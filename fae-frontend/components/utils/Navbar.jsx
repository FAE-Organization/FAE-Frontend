// import { Stack, HStack } from "@chakra-ui/react"
import { Flex, Box, Spacer, Link, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

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
          <NextLink href="/">
            <Link>
                {/* TODO: Might need to adjust height and width later */}
              <img src="fae-logo.png" alt="Logo" height="auto" width="150" />
            </Link>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/">
            <Link>
              <Button variant="ghost" color="black" mr={2}>
                {/* TODO: change font to poppins */}
                Directory
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/search">
            <Link>
              <Button variant="ghost" color="black">
                {/* TODO: change font to poppins */}
                Search
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/about">
            <Link>
              <Button variant="ghost" color="black">
                {/* TODO: change font to poppins */}
                About
              </Button>
            </Link>
          </NextLink>
        </Box>
      </Flex>
      <Spacer />
      <Box>
        {/*          
        Username and Profile Link
        */}
      </Box>
    </Flex>
      );
    // return (
    //     <Stack
    //         width='100%'
    //         height='100px'
    //         alignItems='center'
    //         backgroundColor='#EEE'
    //     >
    //         <HStack width='95%' justifyContent='space-between'>
    //             <Stack>
    //                 {/* 
    //                 Logo + Navigation Items.
                    
    //                 Probably going to set up CMS so we can update the logo + nav items anytime we need to.
    //                 Saves time and separates UI/UX from code
    //                  */}
    //             </Stack>
    //             <Stack>
    //                 {/* 
    //                 Username and Profile Link
    //                 */}
    //             </Stack>
    //         </HStack>
    //     </Stack>
    // )
}