import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

interface LayoutProps {
  children?: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [isDashboard, setDashboard] = useState(false);

  useEffect(() => {
    const layoutUpdate = (url: string) => {
      setDashboard(url.includes('dashboard'));
    };

    router.events.on('routeChangeComplete', layoutUpdate);
  }, [router.events]);

  console.log(isDashboard);
  return (
    <Grid templateRows="auto 1fr auto" templateColumns="auto" minH="100vh">
      <Header
        isDashboard={isDashboard}
        position="sticky"
        as="header"
        top={0}
        left={0}
        right={0}
      />

      <GridItem as={'main'}>
        <Grid templateColumns={'auto minmax(auto, 1200px) auto'}>
          <GridItem colStart={2}>{children}</GridItem>
        </Grid>
      </GridItem>

      <Footer as={'footer'} />
    </Grid>
  );
}
