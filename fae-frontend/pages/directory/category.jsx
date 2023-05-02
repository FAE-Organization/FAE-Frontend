import { Button, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Category({ id }) {
    const router = useRouter()
    return (
        <Stack>
            <Text>
                This is a test page for category number {id}
            </Text>
            <Button onClick={() => router.back()}>Go Back!</Button>
        </Stack>
    )
}

export async function getServerSideProps(context) {
    // Load profile metadata from backend.

    // Get the id value. Ex val is 1 if category?id=1
    const id = context.query.id

    return {
        props: {
            id
        }
    }
}