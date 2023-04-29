import { Stack, Text, Box, HStack, Link, Button, Image} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Stack
            width='100%'
            backgroundColor='#F5F5F5'
        >
            <Stack alignItems='center'>
                <Box>
                    <Image
                        src="logo/fae-logo.png"
                        alt="For Anything Esports logo"
                        // height="auto"
                        // width="150"
                        width={{ base: '150px', lg: '160px', xl: '180px' }}

                    />
                </Box>
                <HStack>
                    <Link href="/">
                        <Button
                            // TODO: Create theme component to style these buttons &
                            //       simplify this duplicated code
                            variant="ghost"
                            fontSize={{ base: '15px', lg: '20px', xl: '25px' }}
                            fontWeight="semibold"
                            onClick={() => router.push('/')} >
                            About
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button
                            variant="ghost"
                            fontSize={{ base: '15px', lg: '20px', xl: '25px' }}
                            fontWeight="semibold"
                            onClick={() => router.push('/')} >
                            Privacy Policy
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button
                            variant="ghost"
                            fontSize={{ base: '15px', lg: '20px', xl: '25px' }}
                            fontWeight="semibold"
                            onClick={() => router.push('/')} >
                            FAQ
                        </Button>
                    </Link>
                </HStack>
                <Text 
                    pb={{ base: '15px', md: '20px', xl: '25px' }}
                    fontSize={{ base: '15px', lg: '20px' }}
                    fontWeight='light'
                >
                    Copyright © 2023 FAE - For Anything Esports
                </Text>
            </Stack>
        </Stack>
    )
}