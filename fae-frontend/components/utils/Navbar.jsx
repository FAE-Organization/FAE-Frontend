// import { Stack, HStack } from "@chakra-ui/react"
import { Flex, Box, Spacer, Link, Button } from '@chakra-ui/react';

export default function Navbar() {
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
                {/* Username and Profile Link */}
            </Box>
        </Flex>
    );
}