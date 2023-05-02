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
                <FooterLink linkText='About' route='/about' />
                <FooterLink linkText='Privacy Policy' route='/privacy-policy' />
                <FooterLink linkText='FAQ' route='/FAQ' />
            </HStack>
            <Text
                pb={{ base: '15px', md: '20px', xl: '25px' }}
                fontSize={{ base: '12px', lg: '18px' }}
                fontWeight='light'
            >
                Copyright © 2023 FAE - For Anything Esports
            </Text>
        </Stack>
    );
}

function FooterLink({ linkText, route }) {
    return (
        <Link
            fontSize={{ base: '0.88em', lg: '1.1em', xl: '1.18em' }}
            fontWeight={425}
            variant="ghost"
            as={NextLink}
            href={'/' + { route }}
        >
            {linkText}
        </Link>
    );
}