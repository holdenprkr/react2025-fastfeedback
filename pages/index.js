import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Box, Button, Code, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FastFeedbackIcon } from '../public/icons';
import EmptyState from '@/components/EmptyState';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      {/* <Heading>Fast Feedback</Heading> */}

      {/* <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text> */}
      <FastFeedbackIcon color="black.500" boxSize="64px" />
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button size="sm" mt={4} onClick={(e) => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
