import { Stack, Text } from "@chakra-ui/react";

export default function CenteredTitle({ title, description }) {
    return (
        <Stack
            width='100%'
            alignItems='center'
            padding='20px'
        >
            <Stack
                width={{ base: '90%', md: '75%' }}
                textAlign='center'
            >
                <Text
                    fontWeight={700}
                    fontSize={{ base: '26px', md: '32px', lg: '35px' }}
                >
                    {title}
                </Text>
                <Text fontSize={{ base: '16px', md: '18px', lg: '20px' }}>
                    {description}
                </Text>
            </Stack>
        </Stack>
    )
}