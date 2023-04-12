import { Stack, Text } from "@chakra-ui/react";

export default function CenteredTitle({ title, description }) {
    return (
        <Stack
            width='100%'
            alignItems='align-center'
        >
            <Stack width='80%'>
                <Text
                    fontWeight={700}
                    fontSize='20px'
                >
                    {title}
                </Text>
                <Text>
                    {description}
                </Text>
            </Stack>
        </Stack>
    )
}