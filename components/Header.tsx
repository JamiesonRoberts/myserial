import type { GridItemProps } from '@chakra-ui/react';
import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  GridItem,
  Link,
  SimpleGrid,
  Spacer,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import NextLink from 'next/link';
import {
  HamburgerIcon,
  LockIcon,
  MoonIcon,
  SunIcon,
  UnlockIcon,
} from '@chakra-ui/icons';
import { Logo } from './Icons';

type HeaderProps = GridItemProps & {
  isDashboard: boolean;
};

export default function Header(props: HeaderProps) {
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navBarBg = useColorModeValue('gray.900', 'white');
  // const navBarColor = useColorModeValue('white', 'gray.900');

  return (
    <>
      <GridItem
        {...props}
        backgroundColor={navBarBg}
        px={4}
        py={2}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <NextLink href="/" passHref>
          <Link>
            <Logo width="auto" height="3em" color="black" />
            <VisuallyHidden>All My Serials</VisuallyHidden>
          </Link>
        </NextLink>
        <ButtonGroup>
          {!session ? (
            <Button
              onClick={() => signIn()}
              rightIcon={<UnlockIcon />}
              colorScheme={colorMode === 'light' ? 'gray' : 'blackAlpha'}
            >
              Sign In
            </Button>
          ) : (
            <></>
          )}
          <Button
            rightIcon={<HamburgerIcon />}
            onClick={onOpen}
            colorScheme={colorMode === 'light' ? 'gray' : 'blackAlpha'}
          >
            Menu
          </Button>
        </ButtonGroup>
      </GridItem>
      <Drawer isOpen={isOpen} onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" top={4} />
          <DrawerHeader px={6} py={4}>
            <Logo width="auto" height="2em" color="gray.50" pr={2} /> Menu
          </DrawerHeader>
          <DrawerBody>
            <SimpleGrid columns={1} spacing={4}>
              <NextLink href="/" passHref>
                <Button variant="outline" onClick={onClose}>
                  Home
                </Button>
              </NextLink>
              <NextLink href="/faq" passHref>
                <Button variant="outline" onClick={onClose}>
                  FAQ
                </Button>
              </NextLink>
              {!!session ? (
                <NextLink href="/dashboard" passHref>
                  <Button variant="outline" onClick={onClose}>
                    My Dashboard
                  </Button>
                </NextLink>
              ) : (
                <></>
              )}
            </SimpleGrid>
          </DrawerBody>
          <DrawerFooter>
            <Flex width="100%" justifyContent="space-around">
              <Button
                flex="1 0 auto"
                onClick={() => (!!session ? signOut() : signIn())}
                rightIcon={!!session ? <LockIcon /> : <UnlockIcon />}
              >
                {!!session ? 'Sign Out' : 'Sign In'}
              </Button>
              <Spacer />
              <Button
                flex="1 0 auto"
                onClick={toggleColorMode}
                rightIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              >
                Switch to
                <VisuallyHidden>
                  {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
                </VisuallyHidden>
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
