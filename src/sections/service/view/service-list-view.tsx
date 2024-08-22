import { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridToolbarContainer,
  GridRowSelectionModel,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { isAdminFn, isCompanyFn } from 'src/utils/role-check';

import { useTranslate } from 'src/locales';
import { useAuthContext } from 'src/auth/hooks';
import {
  deleteService,
  getAllServices,
  ApproveService,
  useGetServicesListsByCompanyId,
} from 'src/api/service';

import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { IServiceItem } from 'src/types/service';

import {
  RenderCellPrice,
  RenderCellApprove,
  RenderCellGraveyard,
  RenderCellDescription,
} from '../graveyard-table-row';

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

  const { services, servicesLoading } = useGetServicesListsByCompanyId(user?.userId);

  const [servicesData, setServicesData] = useState<IServiceItem[] | []>([]);

  const [selectedRowIds] = useState<GridRowSelectionModel>([]);

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
        enqueueSnackbar('Delete success!');
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
      enqueueSnackbar('Approve success!');
    } else {
      console.error('Approve not success!');
      // enqueueSnackbar("Approve success!");
    }
  };

  const actions = (params: any) => {
    if (isAdmin) {
      return [
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="eva:checkmark-circle-2-fill" />}
          label={t('Approve')}
          onClick={() => handleApproveRow(params.row.id)}
        />,
      ];
    }
    if (isComany) {
      return [
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:trash-bin-trash-bold" />}
          label={t('delete')}
          onClick={() => handleDeleteRow(params.row.id)}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label={t('Edit')}
          onClick={() => handleEditRow(params.row.id)}
        />,
      ];
    }
    return [];
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: t('service_name'),
      flex: 1,
      minWidth: 220,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellGraveyard params={params} />,
    },
    {
      field: 'description',
      headerName: t('Description'),
      minWidth: 280,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellDescription params={params} />,
    },
    {
      field: 'price',
      headerName: t('Price'),
      minWidth: 140,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellPrice params={params} />,
    },
    {
      field: 'Approve',
      headerName: t('Approve'),
      minWidth: 110,
      type: 'singleSelect',
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellApprove params={params} />,
    },
    {
      type: 'actions',
      field: 'actions',
      headerName: ' ',
      align: 'right',
      headerAlign: 'right',
      width: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      getActions: (params) => actions(params),
    },
  ];

  return (
    <Container
      maxWidth={settings.themeStretch ? false : 'lg'}
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CustomBreadcrumbs
        heading={t('List')}
        links={[{ name: t('service'), href: paths.fellesraad.service.root }, { name: t('List') }]}
        action={
          <Button
            component={RouterLink}
            href={paths.fellesraad.service.create}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            {t('New Service')}
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
          display: { md: 'flex' },
          flexDirection: { md: 'column' },
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
            getRowHeight={() => 'auto'}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
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
                        startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
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
          />
        )}
      </Card>
    </Container>
  );
}
