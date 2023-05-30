import {
    Box,
    Flex,
    IconButton,
    Button,
    Stack,
    Spinner,
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
import { useDispatch, useSelector } from 'react-redux';
import { setIsPageLoading } from '@/lib/redux/loadingSlice';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'

const superCringePuns = [
    "Rebooting skills",
    "Calculating perfect freelancer",
    "Counting down to victory",
    "Summoning the loading bar gods",
    "Preparing for epic plays",
    "Spawning epic skills",
    "Perfecting button mashing technique",
    "Rendering the other side",
    "Optimizing performance",
    "Rushing spawn",
    "Finding compatible lobby",
    "Boosting FPS",
    "Waiting for the loading bar to leave the game"
];

export default function NavBar({ logo, isLoading }) {
    const { isOpen, onToggle } = useDisclosure();
    const isSmallScreen = useBreakpointValue({ base: true, md: false })
    const isPageLoading = useSelector((state) => state.loading.isPageLoading)
    const router = useRouter()
    const path = router.asPath
    const dispatch = useDispatch()

    const [selectRandomPun, setSelectRandomPun] = useState(0)
    const [dots, setDots] = useState('...')

    useEffect(() => {
        const random = Math.floor(Math.random() * superCringePuns.length)
        setSelectRandomPun(random)
        const interval = setInterval(() => {
            setDots(prevDots => {
                if (prevDots.length === 3) {
                    return '.';
                } else {
                    return prevDots + '.';
                }
            });
        }, 500);
        return () => clearInterval(interval);
    }, [isPageLoading])

    return (
        <Box bg='#FFF' padding='10px' width='100%'>
            <HStack fontSize={{ base: '14px', md: '16px', lg: '18px' }} zIndex={2} position='relative' backgroundColor='#FFF'>
                {isSmallScreen ? (
                    <MobileNav isOpen={isOpen} onToggle={onToggle} isSmallScreen={isSmallScreen} />
                ) : (
                    <HStack width='100%' justify={{ base: 'center', md: 'start' }}>
                        <Flex flex={1}>
                            <Link href="/">
                                {isLoading ? (
                                    <Spinner />
                                ) : (
                                    <Image
                                        width='100px'
                                        src={`https:${logo.fields.file.url}`}
                                        alt={logo.fields.title}
                                        onClick={() => {
                                            if ('/' !== path) {
                                                dispatch(setIsPageLoading(true))
                                            }
                                        }}
                                    />
                                )}
                            </Link>
                        </Flex>
                        <Flex flex={{ md: 6, lg: 10 }}>
                            <DesktopNav isSmallScreen={isSmallScreen} />
                        </Flex>
                    </HStack>
                )}
            </HStack >
            {isPageLoading && (
                <Stack>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.3, duration: 0.3, ease: 'easeInOut' }}
                        style={{
                            backgroundColor: '#6B46C1',
                            position: 'absolute',
                            height: '100vh',
                            zIndex: '1',
                            marginLeft: '-10px',
                            marginTop: '5px',
                            background: 'radial-gradient(circle, rgba(107,70,193,1) 58%, rgba(89,58,176,1) 76%)'
                        }}
                    >
                        <Stack width='100%' height='100%' alignItems='center' justifyContent='center'>
                            <Text
                                color='#FFF'
                                fontSize='22px'
                            >
                                {superCringePuns[selectRandomPun]} {dots}
                            </Text>
                        </Stack>
                    </motion.div>
                </Stack>
            )}
        </Box >
    );
};

// Styling for Navbar links
const DesktopNav = ({ isSmallScreen }) => {

    const dispatch = useDispatch()
    const router = useRouter()
    const path = router.asPath

    return (
        <Stack direction='row' width='100%' justifyContent='space-between'>
            <HStack gap={{ base: '15px', md: '10px', lg: '20px' }}>
                {NAV_ITEMS.map((navItem) => (
                    <Center key={navItem.label}>
                        <Link href={navItem.href ?? '#'}
                            onClick={() => {
                                if (navItem.href !== path) {
                                    dispatch(setIsPageLoading(true))
                                }
                            }}
                        >
                            <Text
                                p={2}
                                fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                                fontWeight={400}
                                _hover={{
                                    textDecoration: 'none',
                                    color: 'purple.800'
                                }}
                            >
                                {navItem.label}
                            </Text>
                        </Link>
                    </Center>
                ))}
            </HStack>
            <UserActions isSmallScreen={isSmallScreen} />
        </Stack >
    );
};

const MobileNav = ({ onToggle, isSmallScreen }) => {

    const dispatch = useDispatch()
    const router = useRouter()
    const path = router.asPath

    return (
        <HStack
            width='100%'
            justifyContent='space-between'
            alignItems='flex-start'
            bg='#FFF'
            padding='5px'
        >
            <HStack alignItems='center'>
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton
                                as={IconButton}
                                onClick={onToggle}
                                icon={
                                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                                }
                                width='50px'
                                variant={'ghost'}
                                aria-label={'Toggle Navigation'}
                            />
                            <MenuList>
                                {NAV_ITEMS.map((navItem) => (
                                    <MenuItem
                                        key={navItem.label}
                                        onClick={() => {
                                            if (navItem.href !== path) {
                                                dispatch(setIsPageLoading(true))
                                            }
                                        }}
                                    >
                                        <MobileNavItem {...navItem} />
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </>
                    )}
                </Menu>
                <Link href="/">
                    <Image
                        width='80px'
                        src="logo/fae-logo.png"
                        alt="For Anything Esports logo"
                    />
                </Link>
            </HStack>
            <UserActions isSmallScreen={isSmallScreen} />
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

function UserActions({ isSmallScreen }) {
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
                    width={{ base: 'fit-content', md: '200px', lg: '250px' }}
                    justifyContent='space-between'
                >
                    {!isSmallScreen && (
                        <Text
                            fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                            fontWeight={600}
                        >
                            {user.name}
                        </Text>
                    )}
                    <HStack>
                        <Link href='/profile'>
                            <Stack
                                width={{ base: '30px', md: '40px', lg: '50px' }}
                                maxHeight={{ base: '30px', md: '40px', lg: '50px' }}
                            >
                                <Image
                                    src={`${user.picture}`}
                                    alt='user profile picture'
                                    borderRadius='full'
                                    width='50px'
                                />
                            </Stack>
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
        href: '/about',
    }
];