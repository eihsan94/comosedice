import {
  Flex,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import type { NextPage } from 'next'
import HeroImage from '../components/images/heroImage';
import { TopLayout } from '../components/layout';

const Home: NextPage = () => {
  return (
    <TopLayout>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Talking Spanish{' '}
          <Text as={'span'} color={'orange.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          This is just an experiment app for me Ihsan and my friend Kaho learning spanish.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            as="a"
            href="/courses"
            _hover={{ bg: 'orange.500' }}>
            Begin
          </Button>
        </Stack>
        <Flex w={'full'}>
          <HeroImage
            height={{ sm: '24rem', lg: '28rem' }}
          />
        </Flex>
      </Stack>
    </TopLayout>
  );
}

export default Home
