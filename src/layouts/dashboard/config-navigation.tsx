import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

// import Label from "src/components/label";
// import Iconify from "src/components/iconify";
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  gravestone: icon('ic_gravestone'),
  graveyard: icon('ic_graveyard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();

  const data = useMemo(
    () => [
      // fELLESRAAD
      {
        subheader: t('overview'),
        roles: ['ADMIN', 'FELLESRAAD'],
        items: [
          {
            title: t('welcome'),
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
            roles: ['ADMIN', 'FELLESRAAD', 'COMPANY'],
          },

          // Graveyard
          {
            title: t('graveyard'),
            path: paths.fellesraad.graveyard.root,
            icon: ICONS.graveyard,
            roles: ['FELLESRAAD'],
            children: [
              {
                title: t('list'),
                path: paths.fellesraad.graveyard.list,
              },
              { title: t('create'), path: paths.fellesraad.graveyard.create },
            ],
          },

          {
            title: t('gravestone'),
            path: paths.fellesraad.gravestone.root,
            icon: ICONS.gravestone,
            roles: ['FELLESRAAD'],
            children: [
              { title: t('list'), path: paths.fellesraad.gravestone.root },
              { title: t('create'), path: paths.fellesraad.gravestone.create },
            ],
          },
          {
            title: t('services'),
            path: paths.fellesraad.service.approve,
            icon: ICONS.ecommerce,
            roles: ['FELLESRAAD'],
            children: [
              /* { title: t('approve'), path: paths.fellesraad.service.approve }, */
              { title: t('request'), path: paths.fellesraad.service.request },
            ],
          },
          {
            title: t('orders'),
            path: paths.fellesraad.order.approve,
            icon: ICONS.booking,
            roles: ['FELLESRAAD'],
            children: [{ title: t('approve'), path: paths.fellesraad.order.approve }],
          },
        ],
      },
      // fELLESRAAD
      {
        subheader: t('approve'),
        roles: ['ADMIN'],
        items: [
          // Approve
          {
            title: t('user'),
            path: paths.admin.user.userList,
            icon: ICONS.graveyard,
            roles: ['ADMIN'],
          },
          {
            title: t('graveyard'),
            path: paths.fellesraad.graveyard.list,
            icon: ICONS.graveyard,
            roles: ['ADMIN'],
          },
          {
            title: t('services'),
            path: paths.fellesraad.service.approve,
            icon: ICONS.graveyard,
            roles: ['ADMIN'],
          },
          {
            title: t('orders'),
            path: paths.fellesraad.order.approve,
            icon: ICONS.graveyard,
            roles: ['ADMIN'],
          },
        ],
      },
      // COMPANY
      {
        subheader: t('company'),
        roles: ['COMPANY'],
        items: [
          {
            title: t('welcome'),
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
            roles: ['COMPANY'],
          },
          // Graveyard
          {
            title: t('graveyard'),
            path: paths.fellesraad.graveyard.list,
            icon: ICONS.graveyard,
            roles: ['COMPANY'],
          },

          {
            title: t('services'),
            path: paths.fellesraad.service.approve,
            icon: ICONS.ecommerce,
            roles: ['COMPANY'],
            children: [
              { title: t('create'), path: paths.fellesraad.service.create },
              { title: t('list'), path: paths.fellesraad.service.list },
              { title: t('request'), path: paths.fellesraad.service.request },
              { title: t('order'), path: paths.fellesraad.service.order },
            ],
          },
          {
            title: t('orders'),
            path: paths.fellesraad.order.approve,
            icon: ICONS.booking,
            roles: ['FELLESRAAD'],
            children: [{ title: t('approve'), path: paths.fellesraad.order.approve }],
          },
        ],
      },
    ],
    [t]
  );

  return data;
}
