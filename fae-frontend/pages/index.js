import { Box } from '@chakra-ui/react'
import { HeroSection } from '@/components/ui/homepage/hero-section'
import { InfoSection } from '@/components/ui/homepage/home-info-section'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

// Render content of homepage
export default function Home() {

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