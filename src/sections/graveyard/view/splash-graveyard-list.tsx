import { useMemo, useState } from 'react';

import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';
import { useGetAllGraveyards } from 'src/api/graveyard';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { IGraveyardItem } from 'src/types/graveyard';

import {
  RenderCellApprove,
  RenderCellLocation,
  RenderCellSplashGraveyard,
} from '../graveyard-table-row';

// ----------------------------------------------------------------------

export default function SplashGraveyardList() {
  const { t } = useTranslate();
  const settings = useSettingsContext();

  const { graveyards, graveyardsLoading } = useGetAllGraveyards();

  const [tableData, setTableData] = useState<IGraveyardItem[]>([]);

  useMemo(() => {
    if (!graveyardsLoading) {
      setTableData(graveyards);
    }
  }, [graveyards, graveyardsLoading]);

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: t('Graveyard'),
      flex: 1,
      minWidth: 280,
      hideable: false,
      renderCell: (params) => <RenderCellSplashGraveyard params={params} />,
    },
    {
      field: 'location',
      headerName: t('location'),
      minWidth: 280,
      renderCell: (params) => <RenderCellLocation params={params} />,
    },
    {
      field: 'publish',
      headerName: t('Approve'),
      minWidth: 110,
      type: 'singleSelect',
      renderCell: (params) => <RenderCellApprove params={params} />,
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
        links={[{ name: t('Graveyard'), href: paths.dashboard.root }, { name: t('List') }]}
        sx={{
          mb: {
            xs: 3,
            md: 5,
          },
        }}
      />

      <Card
        sx={{
          height: '100%',
          flexGrow: { md: 1 },
          display: { md: 'flex' },
          flexDirection: { md: 'column' },
        }}
      >
        {graveyards && (
          <DataGrid
            rows={tableData}
            columns={columns}
            getRowHeight={() => 'auto'}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            autoHeight
          />
        )}
      </Card>
    </Container>
  );
}
