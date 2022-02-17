import type { GridItemProps } from '@chakra-ui/react';
import {
  Divider,
  Grid,
  GridItem,
  List,
  ListItem,
  Text,
  useColorModeValue,
  useMediaQuery,
  useToken,
} from '@chakra-ui/react';
import { Github, Logo, Plausible, Twitter } from './Icons';
import { useSession } from 'next-auth/react';
import SimpleLink from './SimpleLink';

export default function Footer(props: GridItemProps) {
  const { data: session } = useSession();
  const [md] = useToken('breakpoints', ['md']);
  const [isGreaterThanMediumScreen] = useMediaQuery(`(min-width: ${md})`);

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
            <Grid
              templateRows="repeat(5, auto)"
              templateColumns={{ base: 'auto', md: '2fr 1fr', lg: '3fr 1fr' }}
              gap={6}
              width="100%"
            >
              <GridItem>
                <SimpleLink
                  href="/"
                  as="a"
                  display="inline-flex"
                  alignItems="center"
                >
                  <>
                    <Logo width="auto" height="3em" pr={4} />
                    <Text fontSize="xl" fontWeight={700}>
                      All My Serials
                    </Text>
                  </>
                </SimpleLink>
              </GridItem>
              <GridItem
                rowSpan={{ base: 1, md: 5 }}
                borderLeftColor="gray.500"
                borderLeftStyle="solid"
                borderLeftWidth="1px"
                pl={6}
                pb={4}
              >
                <Text
                  width="auto"
                  height="3em"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="xl"
                  fontWeight={500}
                  color="gray.300"
                >
                  Links
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <SimpleLink href="/" as="a">
                      Home
                    </SimpleLink>
                  </ListItem>
                  <ListItem>
                    <SimpleLink href="/#faq" as="a">
                      FAQ
                    </SimpleLink>
                  </ListItem>
                  <ListItem>
                    {!!session ? (
                      <SimpleLink href="/dashboard" as="a">
                        My Dashboard
                      </SimpleLink>
                    ) : (
                      <></>
                    )}
                  </ListItem>
                  <ListItem>
                    <SimpleLink
                      href="https://github.com/JamiesonRoberts/allmyserials"
                      as="a"
                      display="inline-flex"
                      alignItems="center"
                      isExternal
                    >
                      <>
                        <Github mr={2} />
                        Code
                      </>
                    </SimpleLink>
                  </ListItem>
                  <ListItem>
                    <SimpleLink
                      href="https://plausible.io/allmyserials.com"
                      as="a"
                      display="inline-flex"
                      alignItems="center"
                      isExternal
                    >
                      <>
                        <Plausible mr={2} /> Analytics Dashboard
                      </>
                    </SimpleLink>
                  </ListItem>
                  <ListItem>
                    <SimpleLink
                      href="https://twitter.com/jamiesonroberts"
                      as="a"
                      display="inline-flex"
                      alignItems="center"
                      isExternal
                    >
                      <>
                        <Twitter mr={2} /> @JamiesonRoberts
                      </>
                    </SimpleLink>
                  </ListItem>
                </List>
              </GridItem>
              {!isGreaterThanMediumScreen ? (
                <GridItem>
                  <Divider />
                </GridItem>
              ) : (
                <></>
              )}
              <GridItem color="gray.300">
                <Text pb={1}>Simple personal item serial number tracking.</Text>
                <Text>
                  Built by{' '}
                  <SimpleLink
                    href="https://twitter.com/jamiesonroberts"
                    isExternal
                    color="white"
                  >
                    @JamiesonRoberts
                  </SimpleLink>
                  .
                </Text>
              </GridItem>
              <GridItem>
                <Divider />
              </GridItem>
              <GridItem color="gray.300">
                <Text pb={4}>
                  This website does not use cookies{' '}
                  <span aria-hidden="true">🍪</span> to track you on this
                  website or other 3<sup>rd</sup> party websites or apps. It
                  does not create any personal identifiers for tracking
                  purposes. It does not collect any personally identifiable
                  information unless you create an account.
                </Text>
                <Text>
                  Analytics data is collected using{' '}
                  <SimpleLink
                    href={'https://plausible.io/'}
                    isExternal
                    as="a"
                    color="white"
                  >
                    Plausible
                  </SimpleLink>
                  , and the analytics dashboard is{' '}
                  <SimpleLink
                    href="https://plausible.io/allmyserials.com"
                    isExternal
                    as="a"
                    color="white"
                  >
                    open to the public for transparency.
                  </SimpleLink>
                </Text>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </GridItem>
    </>
  );
}
