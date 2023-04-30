import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    useColorModeValue,
    useDisclosure,
    Image,
    Center,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
  } from '@chakra-ui/icons';
  
  export default function NavBar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box bg='#FFF'>
        <Flex
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
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
          >
            {/* Sign In button */}
            <Button
              as={'a'}
              fontSize={'sm'}
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
              fontSize={'sm'}
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
  }
  
  // Styling for Navbar links
  const DesktopNav = () => {
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Center key={navItem.label}>
            {/* <Popover trigger={'hover'} placement={'bottom-start'}> */}
            {/* <PopoverTrigger> */}
            <Link
  
              p={2}
              href={navItem.href ?? '#'}
              fontSize={'sm'} // TODO: adjust nav item font size
              fontWeight={500}
              _hover={{
                textDecoration: 'none',
                color: 'purple.800'
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
    const { isOpen, onToggle } = useDisclosure();
  
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
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: 'Directory',
      href: '#',
    },
    {
      label: 'Search',
      href: '#',
    },
    {
      label: 'About',
      href: '#',
    }
  ];