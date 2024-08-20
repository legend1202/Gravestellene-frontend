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
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { useTranslate } from 'src/locales';
import { useGetGraveyards } from 'src/api/graveyard';
import { GetGravestones, deleteGravestone } from 'src/api/gravestone';

import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import EmptyContent from 'src/components/empty-content';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useSettingsContext } from 'src/components/settings';
import FormProvider, { RHFSelect } from 'src/components/hook-form';

import { IGravestoneItem } from 'src/types/gravestone';

import {
  RenderCellSite,
  RenderCellQuarter,
  RenderCellHomeTown,
  RenderCellBirthday,
  RenderCellGravestone,
  RenderCellBuriedDate,
  RenderCellBuriedWith,
  RenderCellDeceaseDate,
} from '../graveyard-table-row';

// ----------------------------------------------------------------------

const HIDE_COLUMNS = {
  category: false,
};

const HIDE_COLUMNS_TOGGLABLE = ['category', 'actions'];

// ----------------------------------------------------------------------

export default function GravestoneList() {
  const { enqueueSnackbar } = useSnackbar();

  const { t } = useTranslate();

  const confirmRows = useBoolean();

  const router = useRouter();

  const settings = useSettingsContext();

  const { graveyards, graveyardsLoading } = useGetGraveyards();

  const [tableData, setTableData] = useState<IGravestoneItem[]>([]);

  const [tableLoading, setTableLoading] = useState<boolean>(false);

  const [selectedRowIds, setSelectedRowIds] = useState<GridRowSelectionModel>([]);

  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>(HIDE_COLUMNS);

  const newGravestoneSchema = Yup.object().shape({
    id: Yup.string().required('Please select Graveyard!'),
  });

  const defaultValues = useMemo(
    () => ({
      id: '',
    }),
    []
  );
  const methods = useForm({
    resolver: yupResolver(newGravestoneSchema),
    defaultValues,
  });
  const { watch } = methods;

  const values = watch();

  useEffect(() => {
    setTableLoading(graveyardsLoading);
  }, [graveyardsLoading]);

  useEffect(() => {
    if (values?.id) {
      handleSearchResult(values?.id);
    }
  }, [values?.id]);

  const handleDeleteRow = async (id: string) => {
    try {
      const result = await deleteGravestone(id);
      if (result.success) {
        const deleteRow = tableData.filter((row) => row.id !== id);

        enqueueSnackbar('Delete success!');

        setTableData(deleteRow);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRows = useCallback(() => {
    console.log('delete id');
  }, []);

  const handleEditRow = useCallback(
    (id: string) => {
      // console.log(paths.fellesraad.gravestone.edit(id));
      router.push(paths.fellesraad.gravestone.edit(id));
    },
    [router]
  );

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: t('Name'),
      flex: 1,
      minWidth: 220,
      hideable: false,
      renderCell: (params) => <RenderCellGravestone params={params} />,
    },
    {
      field: 'birthday',
      headerName: t('Birthday'),
      minWidth: 150,
      renderCell: (params) => <RenderCellBirthday params={params} />,
    },
    {
      field: 'deceasedDate',
      headerName: t('deceased_date'),
      minWidth: 150,
      renderCell: (params) => <RenderCellDeceaseDate params={params} />,
    },
    {
      field: 'buriedDate',
      headerName: t('Death Age'),
      minWidth: 150,
      renderCell: (params) => <RenderCellBuriedDate params={params} />,
    },
    {
      field: 'homeTown',
      headerName: t('Field'),
      minWidth: 180,
      renderCell: (params) => <RenderCellHomeTown params={params} />,
    },
    {
      field: 'graveSiteNumber',
      headerName: t('Row'),
      minWidth: 110,
      renderCell: (params) => <RenderCellSite params={params} />,
    },
    {
      field: 'quarter',
      headerName: t('Place'),
      minWidth: 110,
      renderCell: (params) => <RenderCellQuarter params={params} />,
    },
    {
      field: 'buriedWith',
      headerName: t('Buried With'),
      minWidth: 280,
      renderCell: (params) => <RenderCellBuriedWith params={params} />,
    },
    {
      type: 'actions',
      field: 'actions',
      headerName: ' ',
      align: 'right',
      headerAlign: 'right',
      minWidth: 80,
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

  const handleSearchResult = async (graveyardId: string) => {
    setTableLoading(true);
    const searchResult = await GetGravestones(graveyardId);
    if (searchResult) {
      setTableData(searchResult?.gravestones);
    }
    setTableLoading(false);
  };
  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);

  return (
    <>
      <Container
        maxWidth={settings.themeStretch ? false : 'lg'}
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {graveyards && (
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
          }}
        >
          {tableData && (
            <DataGrid
              checkboxSelection
              disableRowSelectionOnClick
              rows={tableData}
              columns={columns}
              loading={tableLoading}
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

      <ConfirmDialog
        open={confirmRows.value}
        onClose={confirmRows.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {selectedRowIds.length} </strong> items?
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
