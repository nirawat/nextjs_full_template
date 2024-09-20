
import { OverviewAnalyticsView } from 'src/sections/overview/analytics/view';
import { CONFIG } from 'src/config-global';
// ----------------------------------------------------------------------

export const metadata = { title: `Analytics | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OverviewAnalyticsView />;
}
