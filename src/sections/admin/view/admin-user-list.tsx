// import isEqual from "lodash/isEqual";
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import {
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridColumnVisibilityModel,
} from "@mui/x-data-grid";

import { paths } from "src/routes/paths";

import { useTranslate } from "src/locales";
import { UserRoleUpdate, useGetUserLists } from "src/api/userlist";

import Iconify from "src/components/iconify";
import { useSnackbar } from "src/components/snackbar";
import EmptyContent from "src/components/empty-content";
import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

import { ITUserItem } from "src/types/user";

import { RenderCellRole, RenderCellGraveyard } from "../graveyard-table-row";

const HIDE_COLUMNS = {
  category: false,
};

const HIDE_COLUMNS_TOGGLABLE = ["category", "actions"];

// ----------------------------------------------------------------------

export default function AdminUserList() {
  const { t } = useTranslate();

  const settings = useSettingsContext();

  const { enqueueSnackbar } = useSnackbar();

  const { users, usersLoading } = useGetUserLists();

  const [tableData, setTableData] = useState<ITUserItem[]>([]);

  const [reset, setReset] = useState(false);

  const [columnVisibilityModel, setColumnVisibilityModel] = useState<
    GridColumnVisibilityModel
  >(HIDE_COLUMNS);

  useEffect(() => {
    if (users) {
      setTableData(users);
    }
  }, [users]);

  const handleUpdateRoleRow = async (id: string, role: string) => {
    const updateData = { id, role };
    const result = await UserRoleUpdate(updateData);
    if (result.data.success) {
      enqueueSnackbar(t("update_success"));
      const updatedUsers = users.map((user) => {
        if (user.id === result.data.result.id)
          return { ...user, role: result.data.result.role };
        return user;
      });
      setTableData([...updatedUsers]);
      setReset(!reset);
    } else {
      enqueueSnackbar("Update did not success");
    }
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 280,
      hideable: false,
      renderCell: (params) => <RenderCellGraveyard params={params} />,
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 280,
      renderCell: (params) => <RenderCellRole params={params} />,
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
          icon={<Iconify icon="solar:eye-bold" />}
          label="ADMIN"
          onClick={() => handleUpdateRoleRow(params.row.id, "ADMIN")}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label="FELLESRAAD"
          onClick={() => handleUpdateRoleRow(params.row.id, "FELLESRAAD")}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label="COMPANY"
          onClick={() => handleUpdateRoleRow(params.row.id, "COMPANY")}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label="CLIENT"
          onClick={() => handleUpdateRoleRow(params.row.id, "CLIENT")}
        />,
      ],
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
        links={[{ name: "User", href: paths.dashboard.root }, { name: "List" }]}
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
        <DataGrid
          checkboxSelection
          disableRowSelectionOnClick
          rows={tableData}
          columns={columns}
          loading={usersLoading}
          getRowHeight={() => "auto"}
          pageSizeOptions={[5, 10, 25]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 },
            },
          }}
          // onRowSelectionModelChange={(newSelectionModel) => {
          //   setSelectedRowIds(newSelectionModel);
          // }}
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
            noResultsOverlay: () => <EmptyContent title="No results found" />,
          }}
          slotProps={{
            columnsPanel: {
              getTogglableColumns,
            },
          }}
        />
      </Card>
    </Container>
  );
}
