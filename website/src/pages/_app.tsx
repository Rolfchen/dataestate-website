import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import {
  initFirebase,
  AppModalProvider,
  FirebaseLoginModal as LoginModal,
  UserProvider,
  createEmotionCache,
} from 'de-fend';

import { theme } from '../styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CmsApiProvider } from 'de-cms';

const clientSideEmotionCache = createEmotionCache();

export type ExtendedAppProps = AppProps & {
  emotionCache: EmotionCache;
};
/**
 * Custom NextJS Client App
 * This uses example from MUI - https://github.com/mui-org/material-ui/tree/master/examples/nextjs
 * @param param0
 * @returns
 */

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ExtendedAppProps) {
  initFirebase();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <CmsApiProvider apiUrl="http://localhost:3000/api/">
            <AppModalProvider>
              <UserProvider>
                <CssBaseline />
                <Component {...pageProps} />
                <LoginModal />
              </UserProvider>
            </AppModalProvider>
          </CmsApiProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
