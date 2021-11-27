import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { FC } from 'react';
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  interface Props {
      title: string
      image?: string
      slug: string
      index?: number
  }
  const MainCard: FC<Props> = ({title, image, slug, index}) => {
      console.log(slug);
      
    return (
        <Box
          m={12} 
            w="330px" 
            _notLast={{
            mr:{base:"0px",md:"24px"},
          }}
          transition="all .3s"
          _hover={{
              transform: "scale(1.1)"
          }}
          as="a"
          href={slug}
          role={'group'}
          p={6}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image || IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              alt={image || IMAGE}
              src={image || IMAGE}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            {index &&<Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              No {index}
            </Text>}
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={800} textTransform="uppercase">
              {title}
            </Heading>
          </Stack>
        </Box>
    );
  }

  export default MainCard