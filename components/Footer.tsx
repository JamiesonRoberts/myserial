import type { GridItemProps } from '@chakra-ui/react';
import {
  Grid,
  GridItem,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { Logo } from './Icons';
import { useSession } from 'next-auth/react';

export default function Footer(props: GridItemProps) {
  const { data: session } = useSession();

  const footerBorderColor = useColorModeValue('gray.900', 'white');

  return (
    <>
      <GridItem
        {...props}
        borderTopWidth="1px"
        borderTopColor={footerBorderColor}
        borderTopStyle="solid"
        backgroundColor="gray.800"
        color="white"
        py={8}
      >
        <Grid templateColumns="auto minmax(auto, 1200px) auto" px={6}>
          <GridItem colStart={2}>
            <NextLink href={!!session ? '/dasboard' : '/'} passHref>
              <Link display="inline-flex" alignItems="center">
                <Logo width="auto" height="3em" pr={4} />
                <Text fontSize="xl" fontWeight={700}>
                  All My Serials
                </Text>
              </Link>
            </NextLink>
            <Text color="gray.300">
              Simple personal serial number tracking. <br />
              Made and self-funded by{' '}
              <Link
                href="https://twitter.com/jamiesonroberts"
                isExternal
                color="white"
              >
                @JamiesonRoberts
              </Link>
            </Text>
          </GridItem>
        </Grid>
      </GridItem>
    </>
  );
}
