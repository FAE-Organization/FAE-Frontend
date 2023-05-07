import { Stack, Text, Box, HStack, Link, Button, Image } from "@chakra-ui/react";
import NextLink from 'next/link';

export default function Footer() {
    return (
        <Stack alignItems='center' >
            <Image
                width={{ base: '150px', lg: '160px', xl: '180px' }}
                src="logo/fae-logo.png" // May need to use different logo?
                alt="For Anything Esports logo"
            />
            <HStack spacing={6}>
                <Text
                    as={'b'} 
                    align={'center'} 
                    color={'purple.700'}
                    size={{base: '16px', md: '18px', lg: '20px', xl: '22px'}}>
                    Beginning June 2nd 2023, FAE will become an open-source Capstone project
                </Text>
            </HStack>
            <Text
                pb={{ base: '15px', md: '20px', xl: '25px' }}
                size={{ base: '12px', lg: '18px' }}
                fontWeight='light'
            >
                Copyright © 2023 FAE - For Anything Esports
            </Text>
        </Stack>
    );
}