import { NextPage } from 'next';
import Head from 'next/head';

import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Divider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import SimpleLink from '../components/SimpleLink';
import { useSession } from 'next-auth/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

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
        minHeight={{ base: 'auto', md: '30vh', lg: '40vh' }}
        alignItems="center"
        justifyContent="center"
        marginBottom={3}
        paddingY={6}
        paddingX={4}
      >
        <Box padding={6} textAlign="center">
          <Heading as="h1" size="2xl">
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
      </Flex>
      <Box
        marginY={4}
        paddingY={8}
        paddingX={6}
        borderTopWidth="1px"
        borderTopColor="gray.200"
      >
        <Heading as="h2" size="xl" marginBottom={6} textAlign="center">
          How does it work?
        </Heading>
        <Flex justifyContent="space-around" flexWrap="wrap">
          <Flex
            alignItems="center"
            flexBasis="20rem"
            flexGrow={0}
            flexShrink={0}
          >
            <Flex
              borderRadius="50%"
              backgroundColor="gray.600"
              color="white"
              height="5rem"
              flexBasis="5rem"
              flexGrow={0}
              flexShrink={0}
              justifyContent="center"
              alignItems="center"
              marginRight={4}
            >
              <Text
                fontSize="2xl"
                fontWeight={800}
                maxWidth="4rem"
                lineHeight={1}
                textAlign="center"
                paddingTop={1}
              >
                Step 1
              </Text>
            </Flex>
            <Text>Create a free account</Text>
          </Flex>
          <Flex
            alignItems="center"
            flexBasis="20rem"
            flexGrow={0}
            flexShrink={0}
            marginY={4}
          >
            <Flex
              borderRadius="50%"
              backgroundColor="gray.600"
              color="white"
              height="5rem"
              flexBasis="5rem"
              flexGrow={0}
              flexShrink={0}
              justifyContent="center"
              alignItems="center"
              marginRight={4}
            >
              <Text
                fontSize="2xl"
                fontWeight={800}
                maxWidth="4rem"
                lineHeight={1}
                textAlign="center"
                paddingTop={1}
              >
                Step 2
              </Text>
            </Flex>
            <Text>Add in your items serial number and information</Text>
          </Flex>
          <Flex
            alignItems="center"
            flexBasis="20rem"
            flexGrow={0}
            flexShrink={0}
          >
            <Flex
              borderRadius="50%"
              backgroundColor="gray.600"
              color="white"
              height="5rem"
              flexBasis="5rem"
              flexGrow={0}
              flexShrink={0}
              justifyContent="center"
              alignItems="center"
              marginRight={4}
            >
              <Text
                fontSize="2xl"
                fontWeight={800}
                maxWidth="4rem"
                lineHeight={1}
                textAlign="center"
                paddingTop={1}
              >
                Step 3
              </Text>
            </Flex>
            <Text>Sleep easy knowing your devices info is safe</Text>
          </Flex>
        </Flex>
      </Box>

      <Box
        marginTop={4}
        paddingY={8}
        paddingX={6}
        borderTopWidth="1px"
        borderTopColor="gray.200"
        id="faq"
      >
        <Heading as="h2" size="xl" marginBottom={4}>
          FAQ
        </Heading>
        <Heading as="h3" size="md" marginBottom={2}>
          What does it cost?
        </Heading>
        <Text>
          This is a non-commercial open source project, which is a fancy way of
          saying free and open source. Any services or technology used on the
          project either offer open-source sponsorship, are otherwise free to
          use, and any costs are covered out of pocket by{' '}
          <SimpleLink
            href="https://twitter.com/jamiesonroberts"
            isExternal
            textDecoration="underline"
          >
            @JamiesonRoberts
          </SimpleLink>
          .
        </Text>
        <Divider marginBottom={4} marginTop={4} />
        <Heading as="h3" size="md" marginBottom={2}>
          How can I help?
        </Heading>
        <Text>
          Open source software and projects are labours of love. But they
          can&lsquo;t exist on their own without help from the community. The
          code for this project is hosted openly on Github, you can log bugs,
          add feature requests, or contribute in other ways depending on your
          skill set.
        </Text>
        <Divider marginBottom={4} marginTop={4} />
        <Heading as="h3" size="md" marginBottom={2}>
          Whats the feature roadmap?
        </Heading>
        <Text>
          The roadmap for the project can be found on the{' '}
          <SimpleLink
            href="https://github.com/JamiesonRoberts/allmyserials/projects?type=beta"
            isExternal
            textDecoration="underline"
          >
            github repository for the project.
          </SimpleLink>
        </Text>
        <Divider marginBottom={4} marginTop={4} />
        <Heading as="h3" size="md" marginBottom={2}>
          What about my data and identity?
        </Heading>
        <Text mb={4}>
          Your data and identity is yours. End of story. The only time any
          personally identifiable information is collected is if you create an
          account. If you choose to delete your account, your data is deleted,
          not stored in an archive. All analytics data is done so transparently
          and without PII collection.
        </Text>
        <Text mb={4}>
          At the launch of <strong>All My Serials</strong> some functionality
          will not be available yet for actions you can take yourself, but they
          are on the roadmap to complete and create. This includes the
          following...
        </Text>
        <List spacing={2} mb={4}>
          <ListItem>
            <ListIcon as={WarningTwoIcon} color="gray.500" />
            Export all account data
          </ListItem>
          <ListItem>
            <ListIcon as={WarningTwoIcon} color="gray.500" />
            Delete account
          </ListItem>
        </List>
        <Divider marginBottom={4} marginTop={4} />
        <Heading as="h3" size="md" marginBottom={2}>
          Who made this?
        </Heading>
        <Text>
          Open source software and projects are labours of love. But they
          can&lsquo;t exist on their own without help from the community. The
          code for this project is hosted openly on Github, you can log bugs,
          add feature requests, or contribute in other ways depending on your
          skill set. It is primarily created and maintained by{' '}
          <SimpleLink
            href="https://twitter.com/jamiesonroberts"
            isExternal
            textDecoration="underline"
          >
            @JamiesonRoberts
          </SimpleLink>
        </Text>
      </Box>
    </>
  );
};

export default Home;
