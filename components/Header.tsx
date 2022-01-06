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
  GridItem,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { signIn, signOut, useSession } from 'next-auth/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Header(props: GridItemProps) {
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navBarBg = useColorModeValue('gray.900', 'white');
  const navBarColor = useColorModeValue('white', 'black');

  return (
    <>
      <GridItem
        {...props}
        as="nav"
        backgroundColor={navBarBg}
        padding={4}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text as="h1" color={navBarColor} fontWeight={600} fontSize="xl">
          All My Serials
        </Text>
        <ButtonGroup>
          <IconButton
            aria-label={
              colorMode === 'light'
                ? 'Switch to Dark Mode'
                : 'Switch to Light Mode'
            }
            onClick={toggleColorMode}
            colorScheme={colorMode === 'light' ? 'gray' : 'blackAlpha'}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          />
          <Button
            rightIcon={<HamburgerIcon />}
            onClick={onOpen}
            colorScheme={colorMode === 'light' ? 'gray' : 'blackAlpha'}
          >
            Menu
          </Button>
        </ButtonGroup>
      </GridItem>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" top={3} />
          <DrawerHeader px={6} py={4}>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Button
              onClick={() => (!!session ? signOut() : signIn())}
              width="100%"
              display="block"
            >
              {!!session ? 'Sign Out' : 'Sign In'}
            </Button>
          </DrawerBody>
          <DrawerFooter>
            <Button
              onClick={toggleColorMode}
              width="100%"
              rightIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            >
              {colorMode === 'light'
                ? 'Switch to Dark Mode'
                : 'Switch to Light Mode'}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
