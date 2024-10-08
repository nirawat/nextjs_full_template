import { CONFIG } from 'src/config-global';

import { SliderView } from 'src/sections/_examples/mui/slider-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Slider | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <SliderView />;
}
