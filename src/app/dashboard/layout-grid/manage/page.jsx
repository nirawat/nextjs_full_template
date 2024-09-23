import { CONFIG } from 'src/config-global';

import { OverviewLayoutManage } from 'src/sections/overview/layout-grid/analysis/manage/';

// ----------------------------------------------------------------------

export const metadata = { title: `Layout Grid | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewLayoutManage />;
}
