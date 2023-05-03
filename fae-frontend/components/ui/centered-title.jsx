import { Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CenteredTitle({ title, description }) {
    const [opacity, setOpacity] = useState('0')
    useEffect(() => {
        setOpacity('1')
    }, [])
    return (
        <Stack
            width='100%'
            alignItems='center'
            padding='20px'
            opacity={opacity}
            filter={opacity !== '1' ? 'blur(2px)' : 'none'}
            transform={opacity !== '1' ? 'translateX(-1%)' : 'translateX(0)'}
            transition='1s'
            _mediaReduceMotion={true}
        >
            <Stack
                width={{ base: '90%', md: '75%' }}
                textAlign='center'
            >
                <Text
                    fontWeight={700}
                    fontSize={{ base: '24px', md: '28px', lg: '32px' }}
                >
                    {title}
                </Text>
                <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }}>
                    {description}
                </Text>
            </Stack>
        </Stack>
    )
}