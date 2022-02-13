import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

import { Flex, Grid, GridItem } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import DashboardMenu from '../components/DashboardMenu';

interface LayoutProps {
  children?: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isDashboard, setDashboard] = useState(false);

  useEffect(() => {
    const layoutUpdate = (url: string) => {
      setDashboard(url.includes('dashboard'));
    };

    router.events.on('routeChangeComplete', layoutUpdate);
  }, [router.events]);

  const TabBar = () => {
    if (isDashboard && session) {
      return (
        <Flex position="sticky" bottom={0} zIndex={100}>
          <DashboardMenu />
        </Flex>
      );
    }

    return <></>;
  };

  return (
    <Grid templateRows="auto 1fr auto" templateColumns="auto" minH="100vh">
      <Header position="sticky" as="header" top={0} left={0} right={0} />

      <GridItem as={'main'}>
        <Grid templateColumns={'auto minmax(auto, 1200px) auto'}>
          <GridItem colStart={2} overflow="hidden">
            {children}
          </GridItem>
        </Grid>
        <TabBar />
      </GridItem>

      <Footer as={'footer'} />
    </Grid>
  );
}
