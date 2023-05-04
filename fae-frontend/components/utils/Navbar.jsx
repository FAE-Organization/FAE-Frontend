import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Link,
    useDisclosure,
    Image,
    Center,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router'; 

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const { user, error, isLoading } = useUser()

  return (
    <Box bg='#FFF'>
      <Flex
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
        fontSize={{ base: '20px' }}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href="/">
            {/* Style rules for header logo */}
            <Image
              width={{ base: '150px' }}
              src="logo/fae-logo.png"
              alt="For Anything Esports logo"
            />
          </Link>

          {/* desktop nav links */}
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* Styling rules for sign in & sign up buttons */}
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
            href={'#'}

            color={'purple.600'} >
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
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

// Styling for Navbar links
const DesktopNav = () => {
  const router = useRouter();
  
  return (
    <Stack direction={'row'} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Center key={navItem.label}>
          <Link
            p={2}
            onClick={() => router.push( navItem.href ?? '#')}
            fontSize={{ base: '20px' }}
            fontWeight={400}
            _hover={{
              textDecoration: 'none',
              color: 'purple.800',
              fontWeight: 'semibold',
            }}>
            {navItem.label}
          </Link>
        </Center>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg='#FFF'
      p={4}
      display={{ md: 'none' }}>

      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

    </Stack>
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