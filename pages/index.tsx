import {
  Flex,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import type { NextPage } from 'next'
import { Blur } from '../components/blur';
import HeroImage from '../components/images/heroImage';
import { TopLayout } from '../components/layout';

const Home: NextPage = () => {
  return (
    <TopLayout>
      <Stack
        mt="2rem"    
        backdropFilter="blur(10px)"
        bg="rgba(255, 255, 255, 0.5)"
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
            height={{ sm: '20rem', lg: '20rem' }}
          />
          <Blur
          position={'absolute'}
          bottom={"0px"}
          right={"0px"}
          zIndex="-1"
          style={{  filter: 'blur(100px)' }}
        />
        </Flex>
      </Stack>
    </TopLayout>
  );
}

export default Home
