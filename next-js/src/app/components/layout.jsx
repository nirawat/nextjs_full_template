import { MainLayout } from 'src/layouts/main';
import { SignalRProvider } from 'src/utils/Signalr-context'
// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return 
    <MainLayout>
      <SignalRProvider>
        {children}
      </SignalRProvider>
    </MainLayout>;
}
