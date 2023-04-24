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
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client'

import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <Box>
      <Head>
        <title>For Anything E-Sports</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="logo/fae-icon.png" />
      </Head>

      <main className={styles.main}>
        <HeroSection />
        <InfoSection />
      </main>
    </Box>
  )
}

// Styling for Hero section of homepage
export function HeroSection() {
  return (
    <Container maxW={'7xl'} bgGradient="radial-gradient(#D9CFF4 6%, #F5F5F5 70%)">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 20 }}
        py={{ base: 20 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            as={'h1'}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}>
              Freelancing platform
            </Text>
            <br />
            <Text as={'span'}>
              for anything esports.
            </Text>
          </Heading>
          <Text fontSize={'20px'}>
            FAE brings the spotlight to those who work behind the scenes in
            esports and gaming to showcase their talent.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
            justify={'center'}
            align={'center'}>
            <Button
              size={'lg'}
              fontWeight={'normal'}
              color={'white'}
              bg={'purple.600'}
              _hover={{ bg: 'purple.500' }}>
              Search Now
            </Button>
            <Text px={6} fontSize={'lg'}>
              or
            </Text>
            <Button
              pr={2}
              fontWeight={500}
              color={'black'}
              variant={'link'}
              size={'lg'}
              _hover={{ fontWeight: '600' }}>
              <Text as={'u'}>
                Create an account
              </Text>
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              minW={'350px'}
              src={'./homepage-imgs/homepage-img.png'} /* TODO: CMS stuff */ />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

// Styling for info section of homepage
export function InfoSection() {
  return (
    <Stack align={'center'} pt={'20px'}>
      <Heading as={'h2'} justify={'center'} pb={'80px'}>
        <Text as={'b'}>
          The #1 hub for esports freelancers
        </Text>
      </Heading>
      <InfoContent />
    </Stack>
  )
}

// Styling for each content box within the info section
const InfoContent = () => {
  return (
    <Stack spacing={100} >
      {HOME_ITEMS.map((homeItem, i) => {
        const infoPadding = {};

        if (i % 2 == 0) {
          // when even
          infoPadding.pr = '40px'
        } else {
          // when odd
          infoPadding.pl = '40px'
        }

        return (
          <Flex direction={i % 2 == 0 ? 'row' : 'row-reverse'}>
            <Image src={homeItem.imgSRC} __css={infoPadding} maxWidth={'300px'} maxH={'250px'} />
            <Flex flex={2} direction={'column'} pt={'10px'} fontSize={{ base: '20px' }}>
              <Text as={'b'} casing={'uppercase'} pb={1}>
                {homeItem.headingText}
              </Text>
              <Text>
                {homeItem.content}
              </Text>
            </Flex>
          </Flex>
        )
      })}
    </Stack>
  );
};

// Data to be displayed in InfoContent boxes within InfoSection of homepage
const HOME_ITEMS = [
  {
    headingText: 'Search for the perfect freelancer',
    content: 'FAE acts as a resource to help esports individuals, teams, organizations, and companies find the perfect freelancer for their needs.',
    imgSRC: './homepage-imgs/test.png',
  },
  {
    headingText: 'Build your esports portfolio',
    content: 'FAE helps esports freelancers market themselves in the industry by allowing them to create their own in-app profile and portfolio.',
    imgSRC: './homepage-imgs/build.png',
  },
  {
    headingText: 'Learn about the esports industry',
    content: 'FAE bridges the gap between esports newcomers and veterans by providing resources to help them understand the sectors that make up the industry.',
    imgSRC: './homepage-imgs/learn.png',
  }
];