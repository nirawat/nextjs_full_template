import { CONFIG } from 'src/config-global';

import { BadgeView } from 'src/sections/_examples/mui/badge-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Badge | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <BadgeView />;
}
