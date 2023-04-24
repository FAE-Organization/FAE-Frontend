import { Stack, HStack, IconButton, Button } from "@chakra-ui/react"
import { CgProfile } from 'react-icons/cg'
import { useRouter } from "next/router"
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Navbar() {
    const router = useRouter()
    const { user, error, isLoading } = useUser()
    return (
        <Stack
            width='100%'
            height='100px'
            alignItems='center'
            backgroundColor='#EEE'
        >
            <HStack
                width='95%'
                justifyContent='space-between'
                height='100%'
            >
                <Stack width='100%'>
                    {/* 
                    Logo + Navigation Items.
                    
                    Probably going to set up CMS so we can update the logo + nav items anytime we need to.
                    Saves time and separates UI/UX from code
                     */}
                </Stack>
                <HStack>
                    {!user && (
                        <>
                            {/* <Button
                                color='#6642CE'
                                backgroundColor='#FFF'
                                border='2px solid #6642CE'
                                onClick={() => {
                                    window.location.href =
                                        'https://auth0-fae.us.auth0.com/u/signup?state=hKFo2SBOb0tneGV5ZThoc0oxYXNNMU9wNHVpNHFNT0NFa3dOYaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEdwNVZmTzZaUmhHZ2tMSTdhNllmMExNaVhBOHlVVkpyo2NpZNkgTzhDTFNMaGJhUHZLZzhOblA1UGNVZzNBZXZQWHRSWm0'
                                }}
                            >
                                Sign up
                            </Button> */}
                            <Button
                                backgroundColor='#6642CE'
                                color='#FFF'
                                onClick={() => {
                                    router.push('/api/auth/login')
                                }}
                            >
                                Sign in
                            </Button>
                        </>
                    )}
                    {user && !error && !isLoading && (
                        <>
                            <Button
                                backgroundColor='#6642CE'
                                color='#FFF'
                                onClick={() => {
                                    router.push('/api/auth/logout')
                                }}
                            >
                                Log out
                            </Button>
                            <IconButton
                                icon={<CgProfile />}
                                onClick={() => {
                                    router.push('/auth/account')
                                }}
                            />
                        </>
                    )}
                    {/* 
                    Username and Profile Link
                    */}
                </HStack>
            </HStack>
        </Stack>
    )
}