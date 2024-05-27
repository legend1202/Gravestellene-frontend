// import isEqual from "lodash/isEqual";
import { useState, useEffect, useCallback } from "react";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {
  DataGrid,
  GridColDef,
  //   GridToolbarExport,
  GridActionsCellItem,
  GridToolbarContainer,
  GridRowSelectionModel,
  GridToolbarQuickFilter,
  //   GridToolbarFilterButton,
  //   GridToolbarColumnsButton,
  GridColumnVisibilityModel,
} from "@mui/x-data-grid";

import { paths } from "src/routes/paths";
import { useRouter } from "src/routes/hooks";
import { RouterLink } from "src/routes/components";

import { useBoolean } from "src/hooks/use-boolean";

// import { useGetProducts } from "src/api/product";
// import { PRODUCT_STOCK_OPTIONS } from "src/_mock";
// import { useGetGraveyards } from "src/api/graveyard";

import { isAdminFn, isCompanyFn } from "src/utils/role-check";

import { useTranslate } from "src/locales";
import { useAuthContext } from "src/auth/hooks";
import {
  deleteService,
  getAllServices,
  ApproveService,
  useGetServicesListsByCompanyId,
} from "src/api/service";

import Iconify from "src/components/iconify";
import { useSnackbar } from "src/components/snackbar";
// import { useSnackbar } from "src/components/snackbar";
import EmptyContent from "src/components/empty-content";
import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

import { IServiceItem } from "src/types/service";

import {
  //   RenderCellStock,
  RenderCellPrice,
  //   RenderCellPrice,
  RenderCellApprove,
  RenderCellGraveyard,
  RenderCellDescription,
} from "../graveyard-table-row";

// ----------------------------------------------------------------------

const PUBLISH_OPTIONS = [
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
];

// const defaultFilters: IGraveyardTableFilters = {
//   name: "",
//   approved: false,
// };

const HIDE_COLUMNS = {
  category: false,
};

const HIDE_COLUMNS_TOGGLABLE = ["category", "actions"];

// ----------------------------------------------------------------------

export default function ServiceListViewPage() {
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useAuthContext();

  const [isComany, setCompany] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  const { t } = useTranslate();

  const confirmRows = useBoolean();

  const router = useRouter();

  const settings = useSettingsContext();

  // const { user } = useAuthContext();

  const { services, servicesLoading } = useGetServicesListsByCompanyId(
    user?.userId
  );

  const [servicesData, setServicesData] = useState<IServiceItem[] | []>([]);

  const [selectedRowIds, setSelectedRowIds] = useState<GridRowSelectionModel>(
    []
  );

  const [columnVisibilityModel, setColumnVisibilityModel] = useState<
    GridColumnVisibilityModel
  >(HIDE_COLUMNS);

  useEffect(() => {
    if (user?.role) {
      setCompany(isCompanyFn(user?.role));
      setAdmin(isAdminFn(user?.role));
    }
  }, [user?.role]);

  const handleEditRow = useCallback(
    (id: string) => {
      router.push(paths.fellesraad.service.edit(id));
    },
    [router]
  );

  const handleGetAllServices = async () => {
    const aServices = await getAllServices();
    setServicesData(aServices.searchResults.result);
  };

  useEffect(() => {
    if (isAdmin) {
      handleGetAllServices();
    } else if (services && services.length > 0) {
      setServicesData(services);
    }
  }, [isAdmin, services]);

  const handleDeleteRow = async (id: string) => {
    try {
      const result = await deleteService(id);
      if (result.success) {
        const updatedRows = servicesData.filter((row) => row.id !== id);
        setServicesData(updatedRows);
        enqueueSnackbar("Delete success!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleApproveRow = async (id: string) => {
    const result = await ApproveService(id);
    if (result.searchResults.success) {
      const updatedServices = servicesData.map((service) => {
        if (service.id === result.searchResults.result.id)
          return { ...service, approved: result.searchResults.result.approved };
        return service;
      });
      setServicesData(updatedServices);
      enqueueSnackbar("Approve success!");
    } else {
      console.error("Approve not success!");
      // enqueueSnackbar("Approve success!");
    }
  };

  const actions = (params: any) => {
    if (isAdmin) {
      return [
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="eva:checkmark-circle-2-fill" />}
          label="Approve"
          onClick={() => handleApproveRow(params.row.id)}
        />,
      ];
    }
    if (isComany) {
      return [
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:trash-bin-trash-bold" />}
          label={t("delete")}
          onClick={() => handleDeleteRow(params.row.id)}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label={t("edit")}
          onClick={() => handleEditRow(params.row.id)}
        />,
      ];
    }
    return [];
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: t("service_name"),
      flex: 1,
      minWidth: 100,
      hideable: false,
      renderCell: (params) => <RenderCellGraveyard params={params} />,
    },
    {
      field: "description",
      headerName: t("description"),
      minWidth: 280,
      renderCell: (params) => <RenderCellDescription params={params} />,
    },
    {
      field: "price",
      headerName: t("price"),
      minWidth: 280,
      renderCell: (params) => <RenderCellPrice params={params} />,
    },
    {
      field: "Approve",
      headerName: t("approve"),
      width: 110,
      type: "singleSelect",
      editable: true,
      valueOptions: PUBLISH_OPTIONS,
      renderCell: (params) => <RenderCellApprove params={params} />,
    },
    {
      type: "actions",
      field: "actions",
      headerName: " ",
      align: "right",
      headerAlign: "right",
      width: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      getActions: (params) => actions(params),
    },
  ];

  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);

  return (
    <Container
      maxWidth={settings.themeStretch ? false : "lg"}
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CustomBreadcrumbs
        heading="List"
        links={[
          { name: t("service"), href: paths.fellesraad.service.root },
          { name: t("list") },
        ]}
        action={
          <Button
            component={RouterLink}
            href={paths.fellesraad.service.create}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            {t("new_service")}
          </Button>
        }
        sx={{
          mb: {
            xs: 3,
            md: 5,
          },
        }}
      />

      <Card
        sx={{
          height: { xs: 800, md: 2 },
          flexGrow: { md: 1 },
          display: { md: "flex" },
          flexDirection: { md: "column" },
          px: 3,
        }}
      >
        {servicesData && servicesData.length > 0 && (
          <DataGrid
            // checkboxSelection
            disableRowSelectionOnClick
            rows={servicesData}
            columns={columns}
            loading={servicesLoading}
            getRowHeight={() => "auto"}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            onRowSelectionModelChange={(newSelectionModel) => {
              setSelectedRowIds(newSelectionModel);
            }}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) =>
              setColumnVisibilityModel(newModel)
            }
            slots={{
              toolbar: () => (
                <GridToolbarContainer>
                  {/* <ProductTableToolbar
                      filters={filters}
                      onFilters={handleFilters}
                      stockOptions={PRODUCT_STOCK_OPTIONS}
                      publishOptions={PUBLISH_OPTIONS}
                    /> */}

                  <GridToolbarQuickFilter />

                  <Stack
                    spacing={1}
                    flexGrow={1}
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    {!!selectedRowIds.length && (
                      <Button
                        size="small"
                        color="error"
                        startIcon={
                          <Iconify icon="solar:trash-bin-trash-bold" />
                        }
                        onClick={confirmRows.onTrue}
                      >
                        Delete ({selectedRowIds.length})
                      </Button>
                    )}
                  </Stack>
                </GridToolbarContainer>
              ),
              noRowsOverlay: () => <EmptyContent title="No Data" />,
              noResultsOverlay: () => <EmptyContent title="No results found" />,
            }}
            slotProps={{
              columnsPanel: {
                getTogglableColumns,
              },
            }}
          />
        )}
      </Card>
    </Container>
  );
}
