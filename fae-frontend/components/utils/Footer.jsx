import { Stack, Text, HStack, Image } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
    return (
        <React.Fragment>
            <Stack alignItems='center' pt={{ base: '80px', md: '100px', xl: '110px' }} >
                <Image
                    width={{ base: '150px', lg: '160px', xl: '180px' }}
                    src="logo/fae-logo.png"
                    alt="For Anything Esports logo"
                />
                <HStack spacing={6}>
                    <Text  as={'b'} align={'center'} fontSize={{ base: '16px', md: '20px', lg: '22px'}} color={'purple.800'}>
                    Effective beginning June 2nd 2023, FAE will become an open-source capstone project.
                    </Text>
                </HStack>
                <Text
                    pb={{ base: '15px', md: '20px', xl: '25px' }}
                    fontSize={{ base: '12px', lg: '18px' }}
                    fontWeight='light'
                >
                    Copyright © 2023 FAE - For Anything Esports
                </Text>
            </Stack>
        </React.Fragment>
    );
}