import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';
import Layout from '../layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <PlausibleProvider domain="allmyserials.com">
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </SessionProvider>
    </PlausibleProvider>
  );
}

export default MyApp;
