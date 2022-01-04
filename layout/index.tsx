import type { ReactElement } from 'react';

import { Button, Grid, GridItem } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from '../styles/Home.module.css';

interface LayoutProps {
  children?: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  const { data: session } = useSession();
  return (
    <Grid
      templateRows="auto 1fr auto"
      templateColumns="auto minmax(auto, 1600px) auto"
      minH="100vh"
    >
      <GridItem
        as="nav"
        position="sticky"
        top={0}
        left={0}
        right={0}
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-end"
        alignContent="center"
        colStart={1}
        colSpan={3}
        rowStart={1}
      >
        <Button onClick={() => signIn()} display={!!session ? 'none' : 'block'}>
          Sign In
        </Button>
        <Button
          onClick={() => signOut()}
          display={!!session ? 'block' : 'none'}
        >
          Sign Out
        </Button>
      </GridItem>

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
