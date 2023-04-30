import { Stack, HStack, Text, Button, Image, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useRouter } from "next/router"
import { useUser } from '@auth0/nextjs-auth0/client'
import Link from "next/link"

export default function Navbar() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);
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
                        <HStack
                            width='250px'
                            justifyContent='space-between'
                        >
                            {/* <Button
                                backgroundColor='#6642CE'
                                color='#FFF'
                                onClick={() => {
                                    router.push('/api/auth/logout')
                                }}
                            >
                                Log out
                            </Button> */}
                            <Text fontSize='22px' fontWeight={600}>
                                {user.name}
                            </Text>
                            <HStack >
                                <Link href='/auth/account'>
                                    <Image
                                        src={user.picture}
                                        alt='user profile picture'
                                        borderRadius='full'
                                        width='50px'
                                    />
                                </Link>
                                <Menu>
                                    {({ isOpen }) => (
                                        <>
                                            <MenuButton
                                                isActive={isOpen}
                                                as={IconButton}
                                                icon={
                                                    <ChevronDownIcon
                                                        transform={isOpen ? 'rotate(180deg)' : null}
                                                        transition='0.3s'
                                                    />
                                                }
                                            />
                                            <MenuList>
                                                <MenuItem onClick={() => router.push('/profile')}>
                                                    View Profile
                                                </MenuItem>
                                                <MenuItem onClick={() => router.push('/api/auth/logout')}>
                                                    Log out
                                                </MenuItem>
                                            </MenuList>
                                        </>
                                    )}
                                </Menu>
                            </HStack>
                        </HStack>
                    )}
                    {/* 
                    Username and Profile Link
                    */}
                </HStack>
            </HStack>
        </Stack>
    )
}