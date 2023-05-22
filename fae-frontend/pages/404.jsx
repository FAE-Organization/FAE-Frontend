import { Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Error() {
    const router = useRouter()
    const [seconds, setSeconds] = useState(5)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds <= 1) {
                    clearInterval(interval)
                    router.back()
                }
                return prevSeconds - 1
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Stack position='relative' height='80vh'>
            <Stack position='absolute' bottom='50%'>
                <Text>
                    Seconds left: {seconds}
                </Text>
            </Stack>
        </Stack>
    )
}