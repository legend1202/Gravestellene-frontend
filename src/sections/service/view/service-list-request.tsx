import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import {
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridToolbarContainer,
  GridRowSelectionModel,
  GridToolbarQuickFilter,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { isCompanyFn, isFellesraadFn } from 'src/utils/role-check';
import { getMergedServiceLists, getRequestedServiceLists } from 'src/utils/getRServicesList';

import { useTranslate } from 'src/locales';
import { useAuthContext } from 'src/auth/hooks';
import { useGetGraveyards } from 'src/api/graveyard';
import {
  RequestService,
  useGetRequestedServices,
  ApproveServiceByFellesraad,
  useGetServicesListsByCompanyId,
} from 'src/api/service';

import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import FormProvider, { RHFSelect } from 'src/components/hook-form';

import { IServiceItem } from 'src/types/service';

import {
  RenderCellPrice,
  RenderCellGraveyard,
  RenderCellDescription,
  RenderCellRequestApprove,
  RenderCellRequestedGraveyard,
} from '../graveyard-table-row';

// ----------------------------------------------------------------------

const HIDE_COLUMNS = {
  category: false,
};

const HIDE_COLUMNS_TOGGLABLE = ['category', 'actions'];

// ----------------------------------------------------------------------

export default function ServiceRequest() {
  const { enqueueSnackbar } = useSnackbar();

  const [isComany, setCompany] = useState(false);

  const [isFellesraad, setFellesraad] = useState(false);

  const { t } = useTranslate();

  const confirmRows = useBoolean();

  const settings = useSettingsContext();

  const { user } = useAuthContext();

  const { services, servicesLoading } = useGetServicesListsByCompanyId(user?.userId);
  const { rservices } = useGetRequestedServices(user?.userId);
  const { graveyards } = useGetGraveyards();

  const [servicesData, setServicesData] = useState<IServiceItem[] | []>([]);

  const [selectedRowIds, setSelectedRowIds] = useState<GridRowSelectionModel>([]);

  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>(HIDE_COLUMNS);

  const newGravesyardSchema = Yup.object().shape({
    id: Yup.string().required('Please select Graveyard!'),
  });

  const defaultValues = useMemo(
    () => ({
      id: '',
    }),
    []
  );
  const methods = useForm({
    resolver: yupResolver(newGravesyardSchema),
    defaultValues,
  });
  const { watch } = methods;

  const values = watch();

  useEffect(() => {
    if (services) {
      setServicesData(services);
    }
  }, [services]);

  useEffect(() => {
    if (user?.role) {
      setCompany(isCompanyFn(user?.role));
      setFellesraad(isFellesraadFn(user?.role));
    }
  }, [user?.role]);

  const handleMergRows = useCallback(async () => {
    if (services && services.length > 0) {
      if (!isFellesraad) {
        const updatedRows = await getMergedServiceLists(services, rservices);
        setServicesData(updatedRows);
      }
    }
    if (isFellesraad) {
      const updatedRows = await getRequestedServiceLists(rservices);
      setServicesData(updatedRows);
    }
  }, [services, isFellesraad, rservices]);

  useEffect(() => {
    if (rservices) {
      console.log('request services', rservices);
      handleMergRows();
    }
  }, [rservices, handleMergRows]);

  const handleRequestRow = async (id: string) => {
    try {
      const fellesraad = graveyards.filter((graveyard) => graveyard?.id === values.id);
      if (!values?.id) {
        console.error('Select Graveyard!');
      }
      const requestQuery = {
        fellesraadId: fellesraad[0]?.fellesraadId || '',
        graveyardId: values?.id || '',
        serviceId: id || '',
        companyId: user?.userId || '',
      };
      const result = await RequestService(requestQuery);

      if (result.searchResults?.success) {
        enqueueSnackbar('Service request success!');
      }
    } catch (error) {
      window.prompt('Please select the Graveyard!');
    }
  };

  const handleApproveRow = async (id: string) => {
    const result = await ApproveServiceByFellesraad(id);
    if (result.searchResults.success) {
      const updatedServices = servicesData.map((service) => {
        if (service.id === result.searchResults.result.id)
          return {
            ...service,
            rapproved: result.searchResults.result.approved,
          };
        return service;
      });
      setServicesData(updatedServices);
      enqueueSnackbar('Approve success!');
    } else {
      console.error('Approve not success!');
    }
  };

  const actions = (params: any) => {
    if (isFellesraad) {
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
      if (!('rapproved' in params.row)) {
        return [
          <GridActionsCellItem
            showInMenu
            icon={<Iconify icon="solar:trash-bin-trash-bold" />}
            label={t('Request')}
            onClick={() => handleRequestRow(params.row.id)}
          />,
        ];
      }
    }
    return [];
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: t('service_name'),
      flex: 1,
      minWidth: 100,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellGraveyard params={params} />,
    },
    {
      field: 'description',
      headerName: t('description'),
      minWidth: 280,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellDescription params={params} />,
    },
    {
      field: 'price',
      headerName: t('price'),
      minWidth: 110,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellPrice params={params} />,
    },
    {
      field: 'Graveyard',
      headerName: t('Graveyard'),
      minWidth: 280,
      type: 'singleSelect',
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellRequestedGraveyard params={params} />,
    },
    {
      field: 'Approve',
      headerName: t('Approve'),
      minWidth: 110,
      type: 'singleSelect',
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellRequestApprove params={params} />,
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

  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);

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
          isComany && (
            <Button
              component={RouterLink}
              href={paths.fellesraad.service.create}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              {t('new_service')}
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

      {graveyards && !isFellesraad && (
        <FormProvider methods={methods}>
          <RHFSelect
            fullWidth
            name="id"
            label={t('Graveyard')}
            InputLabelProps={{ shrink: true }}
            PaperPropsSx={{ textTransform: 'capitalize' }}
            sx={{ mb: 1 }}
          >
            {graveyards.map(
              (option) =>
                option?.approved && (
                  <MenuItem key={option.id} value={option?.id}>
                    {option?.name}
                  </MenuItem>
                )
            )}
          </RHFSelect>
        </FormProvider>
      )}

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
            onRowSelectionModelChange={(newSelectionModel) => {
              setSelectedRowIds(newSelectionModel);
            }}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
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
