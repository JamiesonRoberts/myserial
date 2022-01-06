import type { ReactElement } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';
import Header from '../components/Header';

interface LayoutProps {
  children?: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Grid
      templateRows="auto 1fr auto"
      templateColumns="auto minmax(auto, 1600px) auto"
      minH="100vh"
    >
      <Header
        position="sticky"
        top={0}
        left={0}
        right={0}
        colStart={1}
        colSpan={3}
        rowStart={1}
      />

      <GridItem as={'main'} colStart={2} rowStart={2}>
        {children}
      </GridItem>

      <GridItem
        as={'footer'}
        colStart={2}
        rowStart={3}
        className={styles.footer}
      />
    </Grid>
  );
}
