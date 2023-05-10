import {
  Stack,
  Text,
  Button,
  Image,
  Flex,
  Container,
  Heading,
  Box,
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client'


// Styling for Hero section of homepage
export function HeroSection() {
  const router = useRouter()
  const { user } = useUser()

  return (
    <Container maxW={'7xl'} bgGradient="radial-gradient(#D9CFF4 15%, #F5F5F5 70%)">
      <Flex
        align={'center'}
        spacing={{ base: 8, md: 20 }}
        pb={{ base: '5em', md: '10em' }}
        direction={{ base: 'column', md: 'row' }}
        gap={20}>
        <Flex direction={'column'} gap={{ base: 5, md: 5 }}>
          <Heading
            as={'h1'}
            lineHeight={0.6}
            fontWeight={600}
            pb={'8px'}
            fontSize={{ base: '4xl', lg: '5xl', xl: '6xl' }}
            whiteSpace={'nowrap'}>
            <Text
              position={'relative'}>
              Freelancing platform
            </Text>
            <br />
            <Text as={'i'}>
              for anything esports.
            </Text>
          </Heading>
          <Text fontSize={{ sm: '16px', md: '20px', lg: '24px' }}>
            FAE brings the spotlight to those who work behind the scenes in
            esports and gaming to showcase their talent.
          </Text>
          <Flex
            spacing={{ base: 4, sm: 6 }}
            direction={{base: 'column', sm: 'row'}}
            justify={'center'}
            align={'center'}>
            <Button
              size={{ base: 'md', lg: 'lg' }}
              fontWeight={'normal'}
              color={'white'}
              bg={'purple.600'}
              _hover={{ bg: 'purple.500' }}
              onClick={() => {
                router.push('/search')
              }}>
              Search Now
            </Button>
            {!user && (
              <Flex align={'center'} direction={{base: 'column', sm: 'row'}}>
                <Text pl={8} pr={6} pt={{base: 3, sm: 0 }} fontSize={'lg'}>or</Text>
                <Button
                  pr={2}
                  fontWeight={500}
                  color={'black'}
                  variant={'link'}
                  size={{ base: 'md', lg: 'lg' }}
                  _hover={{ fontWeight: '600' }}>
                  <Text as={'u'}>Create an account</Text>
                </Button>
              </Flex>
            )}
          </Flex>
        </Flex>
        <Flex
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={ '/homepage-imgs/homepage-img.png'} />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}