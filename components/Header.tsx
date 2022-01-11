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
  SimpleGrid,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  useToken,
  VisuallyHidden,
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  HamburgerIcon,
  LockIcon,
  MoonIcon,
  SunIcon,
  UnlockIcon,
} from '@chakra-ui/icons';
import { Logo } from './Icons';
import SimpleLink from './SimpleLink';

export default function Header(props: GridItemProps) {
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sm] = useToken('breakpoints', ['sm']);
  const [isGreaterThanSmallScreen] = useMediaQuery(`(min-width: ${sm})`);

  const navBarBg = useColorModeValue('gray.900', 'white');
  const navBarColor = useColorModeValue('white', 'gray.900');
  const menuBarColor = useColorModeValue('gray.900', 'white');

  const LogoText = () => {
    if (isGreaterThanSmallScreen) {
      return (
        <Text fontSize="xl" fontWeight={700}>
          All My Serials
        </Text>
      );
    }
    return <VisuallyHidden>All My Serials</VisuallyHidden>;
  };

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
        <SimpleLink
          href={!!session ? '/dashboard' : '/'}
          display="flex"
          alignItems="center"
          color={navBarColor}
        >
          <>
            <Logo width="auto" height="3em" pr={{ base: 0, sm: 4 }} />
            <LogoText />
          </>
        </SimpleLink>
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
            <Logo width="auto" height="2em" color={menuBarColor} pr={2} /> Menu
          </DrawerHeader>
          <DrawerBody>
            <SimpleGrid columns={1} spacing={4}>
              <SimpleLink
                href={!!session ? '/dashboard' : '/'}
                as="a"
                onClick={onClose}
              >
                Home
              </SimpleLink>
              <SimpleLink href="/faq" as="a" onClick={onClose}>
                FAQ
              </SimpleLink>
              {!!session ? (
                <SimpleLink href="/dashboard" as="a" onClick={onClose}>
                  My Dashboard
                </SimpleLink>
              ) : (
                <></>
              )}
            </SimpleGrid>
          </DrawerBody>
          <DrawerFooter>
            <Flex width="100%" justifyContent="space-around">
              <Button
                as="a"
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
