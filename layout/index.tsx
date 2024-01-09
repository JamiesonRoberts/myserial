import type { ReactElement } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
  children?: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Grid templateRows="auto 1fr auto" templateColumns="auto" minH="100vh">
      <Header
        position="sticky"
        as="header"
        top={0}
        left={0}
        right={0}
        zIndex={1}
      />

      <GridItem as={'main'}>
        <Grid templateColumns={'auto minmax(auto, 1200px) auto'}>
          <GridItem colStart={2} overflow="hidden">
            {children}
          </GridItem>
        </Grid>
      </GridItem>

      <Footer as={'footer'} />
    </Grid>
  );
}
