import {
    Box,
    Flex,
    IconButton,
    Button,
    Stack,
    Collapse,
    useDisclosure,
    Center,
    HStack,
    Text,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Switch,
    useBreakpointValue
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon
} from '@chakra-ui/icons';
import Link from "next/link"

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

export default function NavBar() {
    const { isOpen, onToggle } = useDisclosure();
    const isSmallScreen = useBreakpointValue({ base: true, md: false })

    console.log(isSmallScreen)

    return (
        <Box bg='#FFF' padding='10px' width='100%'>
            <HStack fontSize={{ base: '14px', md: '16px', lg: '18px' }}>
                {isSmallScreen ? (
                    <MobileNav isOpen={isOpen} onToggle={onToggle} />
                ) : (
                    <HStack width='100%' justify={{ base: 'center', md: 'start' }}>
                        <Flex flex={1}>
                            <Link href="/">
                                {/* Style rules for header logo */}
                                <Image
                                    width={{ base: '150px' }}
                                    src="logo/fae-logo.png"
                                    alt="For Anything Esports logo"
                                />
                            </Link>
                        </Flex>
                        <Flex flex={8}>
                            <DesktopNav />
                        </Flex>
                    </HStack>
                )}
            </HStack >
        </Box >
    );
};

// Styling for Navbar links
const DesktopNav = () => {
    const router = useRouter();

    return (
        <Stack direction='row' width='100%' justifyContent='space-between'>
            <HStack gap='25px'>
                {NAV_ITEMS.map((navItem) => (
                    <Center key={navItem.label}>
                        <Link
                            href={''}
                            p={2}
                            onClick={() => router.push(navItem.href ?? '#')}
                            fontSize={{ base: '20px' }}
                            fontWeight={400}
                            _hover={{
                                textDecoration: 'none',
                                color: 'purple.800'
                            }}>
                            {navItem.label}
                        </Link>
                    </Center>
                ))}
            </HStack>
            <UserActions />
        </Stack >
    );
};

const MobileNav = ({ isOpen, onToggle }) => {
    return (
        <HStack
            width='100%'
            justifyContent='space-between'
            alignItems='flex-start'
            bg='#FFF'
            padding='5px'
        >
            <HStack alignItems='flex-start'>
                <Stack>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        width='50px'
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                    <Collapse in={isOpen} animateOpacity>
                        {NAV_ITEMS.map((navItem) => (
                            <MobileNavItem key={navItem.label} {...navItem} />
                        ))}
                    </Collapse>
                </Stack>
                <Link href="/">
                    <Image
                        width={{ base: '75px' }}
                        src="logo/fae-logo.png"
                        alt="For Anything Esports logo"
                    />
                </Link>
            </HStack>
            <UserActions />
        </HStack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontWeight={600}>
                    {label}
                </Text>
            </Flex>
        </Stack>
    );
};

function UserActions() {
    const { user, error, isLoading } = useUser()
    const router = useRouter()

    return (
        <HStack>
            {!user && (
                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}
                    mr={6}
                >
                    {/* Sign In button */}
                    <Button
                        as={'a'}
                        fontWeight={600}
                        variant={'outline'}
                        href='/api/auth/login'
                        color={'purple.600'}
                    >
                        Sign In
                    </Button>

                    {/* Sign Up button */}
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontWeight={600}
                        color={'white'}
                        bg={'purple.600'}
                        href={'#'}
                        _hover={{
                            bg: 'purple.500',
                        }}
                    >
                        Sign Up
                    </Button>
                </Stack>
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
        </HStack>
    )
}

const NAV_ITEMS = [
    {
        label: 'Directory',
        href: '/directory',
    },
    {
        label: 'Search',
        href: '/search',
    },
    {
        label: 'About',
        href: '#',
    },
    {
        label: 'Profile',
        href: '/profile',
    }
];