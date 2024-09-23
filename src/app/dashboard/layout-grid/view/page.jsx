import { CONFIG } from 'src/config-global';

import { OverviewLayoutView } from 'src/sections/overview/layout-grid/analysis/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Layout Grid | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewLayoutView />;
}
