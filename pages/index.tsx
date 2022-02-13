import { NextPage } from 'next';
import Head from 'next/head';

import { Box, Button, Heading, Text, Flex, Image } from '@chakra-ui/react';
import SimpleLink from '../components/SimpleLink';
import { signIn, useSession } from 'next-auth/react';
import { UnlockIcon } from '@chakra-ui/icons';

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>
          All My Serials | Simple personal item serial number tracking
        </title>
        <meta
          name="description"
          content="Save and track serial numbers for your all your personal items."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        minHeight={{ base: 'auto', md: '40vh', lg: '50vh' }}
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
        marginBottom={3}
        paddingY={6}
        paddingX={4}
      >
        <Box padding={6} textAlign="center" width={{ base: '100%', md: '50%' }}>
          <Heading as="h1" size="xl">
            All My Serials
          </Heading>
          <Text paddingBottom={5}>
            Simple personal item serial number tracking.
          </Text>
          {!session ? (
            <SimpleLink href={'/login'}>
              <Button>Sign Up Now</Button>
            </SimpleLink>
          ) : (
            <SimpleLink href={'/dashboard'}>
              <Button>My Dashboard</Button>
            </SimpleLink>
          )}
        </Box>
        <Image
          src="/home-hero.jpg"
          borderRadius="50%"
          display={{ base: 'none', md: 'block' }}
          boxSize={{ md: '30vh', lg: '40vh' }}
        />
      </Flex>
      <Box
        marginTop={3}
        paddingY={6}
        paddingX={4}
        borderTopWidth="1px"
        borderTopColor="gray.200"
      >
        <Heading as="h2" size="lg">
          How does it work?
        </Heading>
      </Box>
    </>
  );
};

export default Home;
