import Head from 'next/head'
import Image from 'next/image'
import { HStack, Button, Stack, Text } from '@chakra-ui/react'
import { Inter } from "@next/font/google"
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter()
    return (
        <main className={styles.main}>
            <HStack>
                <Stack>
                    <Text fontSize={{ base: '10px', md: '15px', xl: '22px' }} id="something">
                        Hello
                    </Text>
                    <Button onClick={() => router.push('/profile')}>
                        Profile Test
                    </Button>
                </Stack>
                <Stack><Text>Hello 2</Text></Stack>
            </HStack>
        </main>
    )
}
