// import isEqual from "lodash/isEqual";
import { useMemo, useState, useCallback } from "react";

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
import { deleteGraveyard, useGetGraveyards } from "src/api/graveyard";

import Iconify from "src/components/iconify";
import { useSnackbar } from "src/components/snackbar";
import EmptyContent from "src/components/empty-content";
import { ConfirmDialog } from "src/components/custom-dialog";
import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

import {
  IGraveyardItem,
  // IGraveyardTableFilters,
  // IGraveyardTableFilterValue,
} from "src/types/graveyard";

// import ProductTableToolbar from "../graveyard-table-toolbar";
// import ProductTableFiltersResult from "../graveyard-table-filters-result";
import {
  //   RenderCellStock,
  //   RenderCellPrice,
  RenderCellApprove,
  RenderCellLocation,
  RenderCellGraveyard,
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

export default function GraveyardList() {
  const { enqueueSnackbar } = useSnackbar();

  const confirmRows = useBoolean();

  const router = useRouter();

  const settings = useSettingsContext();

  const { graveyards, graveyardsLoading } = useGetGraveyards();

  const [tableData, setTableData] = useState<IGraveyardItem[]>([]);

  // const [filters, setFilters] = useState(defaultFilters);

  const [selectedRowIds, setSelectedRowIds] = useState<GridRowSelectionModel>(
    []
  );

  const [columnVisibilityModel, setColumnVisibilityModel] = useState<
    GridColumnVisibilityModel
  >(HIDE_COLUMNS);

  useMemo(() => {
    if (!graveyardsLoading) {
      setTableData(graveyards);
    }
  }, [graveyards, graveyardsLoading]);

  //   const dataFiltered = applyFilter({
  //     inputData: tableData,
  //     filters,
  //   });

  //   const canReset = !isEqual(defaultFilters, filters);

  // const handleFilters = useCallback(
  //   (name: string, value: IGraveyardTableFilterValue) => {
  //     setFilters((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   },
  //   []
  // );

  //   const handleResetFilters = useCallback(() => {
  //     setFilters(defaultFilters);
  //   }, []);

  const handleDeleteRow = async (id: string) => {
    try {
      const result = await deleteGraveyard(id);
      if (result.success) {
        const deleteRow = tableData.filter((row) => row.id !== id);

        enqueueSnackbar("Delete success!");

        setTableData(deleteRow);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRows = useCallback(() => {
    // const deleteRows = tableData.filter(
    //   (row) => !selectedRowIds.includes(row?.id)
    // );
    // enqueueSnackbar("Delete success!");
    // setTableData(deleteRows);
    console.log("delete id");
  }, []);

  const handleEditRow = useCallback(
    (id: string) => {
      router.push(paths.fellesraad.graveyard.edit(id));
    },
    [router]
  );

  // const handleViewRow = useCallback(
  //   (id: string) => {
  //     router.push(paths.fellesraad.graveyard.details(id));
  //   },
  //   [router]
  // );

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Graveyard",
      flex: 1,
      minWidth: 280,
      hideable: false,
      renderCell: (params) => <RenderCellGraveyard params={params} />,
    },
    {
      field: "location",
      headerName: "location",
      minWidth: 280,
      renderCell: (params) => <RenderCellLocation params={params} />,
    },
    {
      field: "publish",
      headerName: "Publish",
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
      getActions: (params) => [
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:trash-bin-trash-bold" />}
          label="Delete"
          onClick={() => handleDeleteRow(params.row.id)}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label="Edit"
          onClick={() => handleEditRow(params.row.id)}
        />,
      ],
    },
  ];

  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);

  return (
    <>
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
            { name: "Graveyard", href: paths.dashboard.root },
            { name: "List" },
          ]}
          action={
            <Button
              component={RouterLink}
              href={paths.fellesraad.graveyard.create}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              New Graveyard
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
          }}
        >
          {graveyards && (
            <DataGrid
              checkboxSelection
              disableRowSelectionOnClick
              rows={tableData}
              columns={columns}
              loading={graveyardsLoading}
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
                  <>
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

                        {/* <GridToolbarColumnsButton />
                      <GridToolbarFilterButton />
                      <GridToolbarExport /> */}
                      </Stack>
                    </GridToolbarContainer>

                    {/* {canReset && (
                    <ProductTableFiltersResult
                      filters={filters}
                      onFilters={handleFilters}
                      onResetFilters={handleResetFilters}
                      results={tableData.length}
                      sx={{ p: 2.5, pt: 0 }}
                    />
                  )} */}
                  </>
                ),
                noRowsOverlay: () => <EmptyContent title="No Data" />,
                noResultsOverlay: () => (
                  <EmptyContent title="No results found" />
                ),
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

      <ConfirmDialog
        open={confirmRows.value}
        onClose={confirmRows.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete{" "}
            <strong> {selectedRowIds.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirmRows.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

// function applyFilter({
//   inputData,
//   filters,
// }: {
//   inputData: IProductItem[];
//   filters: IGraveyardTableFilters;
// }) {
//   const { stock, publish } = filters;

//   if (stock.length) {
//     inputData = inputData.filter((product) =>
//       stock.includes(product.inventoryType)
//     );
//   }

//   if (publish.length) {
//     inputData = inputData.filter((product) =>
//       publish.includes(product.publish)
//     );
//   }

//   return inputData;
// }
