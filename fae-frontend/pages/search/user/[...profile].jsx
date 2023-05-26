import { Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Profile() {
    const router = useRouter()
    const pathname = router.asPath;
    const userId = pathname.split('/').pop();
    return (
        <Stack>
            <Text>User info</Text>
            <Text>user id: {userId}</Text>
            <Text>User info</Text>
        </Stack>
    )
}