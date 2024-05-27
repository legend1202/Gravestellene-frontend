// import isEqual from "lodash/isEqual";
import { useMemo, useState, useEffect, useCallback } from "react";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridToolbarContainer,
  GridRowSelectionModel,
  GridToolbarQuickFilter,
  GridColumnVisibilityModel,
} from "@mui/x-data-grid";

import { paths } from "src/routes/paths";
import { useRouter } from "src/routes/hooks";
import { RouterLink } from "src/routes/components";

import { useBoolean } from "src/hooks/use-boolean";

import { isAdminFn, isFellesraadFn } from "src/utils/role-check";

import { useAuthContext } from "src/auth/hooks";
import {
  deleteGraveyard,
  ApproveGraveyard,
  useGetGraveyards,
} from "src/api/graveyard";

import Iconify from "src/components/iconify";
import { useSnackbar } from "src/components/snackbar";
import EmptyContent from "src/components/empty-content";
import { ConfirmDialog } from "src/components/custom-dialog";
import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

import { IGraveyardItem } from "src/types/graveyard";

import {
  RenderCellApprove,
  RenderCellLocation,
  RenderCellGraveyard,
} from "../graveyard-table-row";

// ----------------------------------------------------------------------

const PUBLISH_OPTIONS = [
  { value: "approved", label: "Approved" },
  { value: "draft", label: "Draft" },
];

const HIDE_COLUMNS = {
  category: false,
};

const HIDE_COLUMNS_TOGGLABLE = ["category", "actions"];

// ----------------------------------------------------------------------

export default function GraveyardList() {
  const { user } = useAuthContext();

  const [isFellesraad, setFellesraad] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const confirmRows = useBoolean();

  const router = useRouter();

  const settings = useSettingsContext();

  const { graveyards, graveyardsLoading } = useGetGraveyards();

  const [tableData, setTableData] = useState<IGraveyardItem[]>([]);

  const [selectedRowIds, setSelectedRowIds] = useState<GridRowSelectionModel>(
    []
  );

  const [columnVisibilityModel, setColumnVisibilityModel] = useState<
    GridColumnVisibilityModel
  >(HIDE_COLUMNS);

  useEffect(() => {
    if (user?.role) {
      setFellesraad(isFellesraadFn(user?.role));
      setAdmin(isAdminFn(user?.role));
    }
  }, [user?.role]);

  useMemo(() => {
    if (!graveyardsLoading) {
      setTableData(graveyards);
    }
  }, [graveyards, graveyardsLoading]);

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
    console.log("delete id");
  }, []);

  const handleEditRow = useCallback(
    (id: string) => {
      router.push(paths.fellesraad.graveyard.edit(id));
    },
    [router]
  );

  const handleApproveRow = async (id: string) => {
    const result = await ApproveGraveyard(id);
    if (result.searchResults.success) {
      const updatedTableData = tableData.map((graveyard) => {
        if (graveyard.id === result.searchResults.result.id)
          return {
            ...graveyard,
            approved: result.searchResults.result.approved,
          };
        return graveyard;
      });
      setTableData(updatedTableData);

      enqueueSnackbar("Approve success!");
    } else {
      console.error("Approve not success!");
    }
    // router.push(paths.fellesraad.graveyard.edit(id));
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
    if (isFellesraad) {
      return [
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
      ];
    }
    return [];
  };
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
      getActions: (params) => actions(params),
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
            isFellesraad && (
              <Button
                component={RouterLink}
                href={paths.fellesraad.graveyard.create}
                variant="contained"
                startIcon={<Iconify icon="mingcute:add-line" />}
              >
                New Graveyard
              </Button>
            )
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
                  <GridToolbarContainer>
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
