import {
    Stack,
    HStack,
    Text,
    Button,
    Image,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Box,
    Spacer,
    Switch,
} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useRouter } from "next/router"
import { useUser } from '@auth0/nextjs-auth0/client'
import Link from "next/link"

export default function Navbar() {
    const router = useRouter()
    const { user, error, isLoading } = useUser()

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            px={4}
            py={2}
            bg="#FFFFFF"
            color="black"
        >
            <Flex align="center" mr={5}>
                <Box p={2} bg="white">
                    <Link href="/">
                        {/* TODO: Might need to adjust height and width later */}
                        <img src="logo/fae-logo.png" alt="Logo" height="auto" width="150" />
                    </Link>
                </Box>
                <Box>
                    <Link href="/directory">
                        <Button
                            variant="ghost"
                            color="black"
                            fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                            onClick={() => router.push('/directory')}
                        >
                            Directory
                        </Button>
                    </Link>
                    <Link href="/search">
                        <Button
                            variant="ghost"
                            color="black"
                            fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                        >
                            Search
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button
                            variant="ghost"
                            color="black"
                            fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                        >
                            About
                        </Button>
                    </Link>

                    <Link href="/profile">
                        <Button
                            variant="ghost"
                            color="black"
                            fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                            onClick={() => router.push('/profile')}
                        >
                            Profile
                        </Button>
                    </Link>

                </Box>
            </Flex>
            <Spacer />
            <Box>
                <HStack>
                    {!user && (
                        <>
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
                            <Text fontSize='22px' fontWeight={600}>
                                {user.name}
                            </Text>
                            <HStack >
                                <Link href='/profile'>
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
                                                backgroundColor='#FFF'
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
                                                <MenuItem
                                                    onClick={() => router.push('/profile')}
                                                    borderBottom='1px solid #BBB'
                                                >
                                                    Profile
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => router.push('/profile')}
                                                    borderBottom='1px solid #BBB'
                                                >
                                                    Settings
                                                </MenuItem>
                                                <MenuItem
                                                    closeOnSelect={false}
                                                    width='100%'
                                                    display='flex'
                                                    flexDirection='row'
                                                    justifyContent='space-between'
                                                    borderBottom='1px solid #BBB'
                                                >
                                                    Dark Mode
                                                    <Switch onChange={(event) => event.preventDefault()} />
                                                </MenuItem>
                                                <MenuItem onClick={() => router.push('/api/auth/logout')}>
                                                    Sign out
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
            </Box>
        </Flex>
    );
}