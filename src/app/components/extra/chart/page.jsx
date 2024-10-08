import { CONFIG } from 'src/config-global';

import { ChartView } from 'src/sections/_examples/extra/chart-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Chart | Components - ${CONFIG.appName}` };

export default function Page() {
  return <ChartView />;
}
