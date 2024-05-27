// import isEqual from "lodash/isEqual";
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import {
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridColumnVisibilityModel,
} from "@mui/x-data-grid";

import { paths } from "src/routes/paths";

import { isAdminFn } from "src/utils/role-check";

import { useAuthContext } from "src/auth/hooks";
import { ApproveOrderedList, GetOrderedServices } from "src/api/order";

import Iconify from "src/components/iconify";
import { useSnackbar } from "src/components/snackbar";
import EmptyContent from "src/components/empty-content";
import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

import { IOrderedList } from "src/types/order";

import {
  RenderCellUser,
  RenderCellPrice,
  RenderCellApprove,
  RenderCellServices,
  RenderCellGraveyard,
} from "../order-list-table-row";

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

export default function OrderListApprove() {
  const { user } = useAuthContext();

  // const [isFellesraad, setFellesraad] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const settings = useSettingsContext();

  const { orders, ordersLoading } = GetOrderedServices();

  const [tableData, setTableData] = useState<IOrderedList[]>([]);

  const [columnVisibilityModel, setColumnVisibilityModel] = useState<
    GridColumnVisibilityModel
  >(HIDE_COLUMNS);

  useEffect(() => {
    if (user?.role) {
      // setFellesraad(isFellesraadFn(user?.role));
      setAdmin(isAdminFn(user?.role));
    }
  }, [user?.role]);

  useEffect(() => {
    if (orders && orders.length > 0) {
      if (isAdmin) {
        setTableData(orders);
      } else {
        const approvedData = orders.filter((order) => order?.approved === true);
        setTableData(approvedData);
      }
    }
  }, [orders, isAdmin]);

  const handleApproveRow = async (id: string) => {
    const result = await ApproveOrderedList(id);
    if (result.results.success) {
      const updatedTableData = tableData.map((row) => {
        if (row.id === result.results.result.id)
          return {
            ...row,
            approved: result.results.result.approved,
          };
        return row;
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
    return [];
  };
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Client",
      flex: 1,
      minWidth: 140,
      hideable: false,
      renderCell: (params) => <RenderCellUser params={params} />,
    },
    {
      field: "orders",
      headerName: "Orders",
      minWidth: 140,
      renderCell: (params) => <RenderCellServices params={params} />,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 140,
      renderCell: (params) => <RenderCellPrice params={params} />,
    },
    {
      field: "gravestone",
      headerName: "Gravestone",
      width: 110,
      type: "singleSelect",
      editable: true,
      valueOptions: PUBLISH_OPTIONS,
      renderCell: (params) => <RenderCellGraveyard params={params} />,
    },
    {
      field: "approve",
      headerName: "Approve",
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
          { name: "Order", href: paths.dashboard.root },
          { name: "List" },
        ]}
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
          px: 3,
          flexGrow: { md: 1 },
          display: { md: "flex" },
          flexDirection: { md: "column" },
        }}
      >
        {orders && (
          <DataGrid
            // checkboxSelection
            disableRowSelectionOnClick
            rows={tableData}
            columns={columns}
            loading={ordersLoading}
            getRowHeight={() => "auto"}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) =>
              setColumnVisibilityModel(newModel)
            }
            slots={{
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
