import { CONFIG } from 'src/config-global';

import { OverviewLayoutMgrView } from 'src/sections/overview/layoutmgr/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Layout Managment | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewLayoutMgrView />;
}
