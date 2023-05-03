import { Stack, Grid, GridItem, useBreakpointValue, HStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function UserCardLoading() {
    const columns = useBreakpointValue({
        base: 1,
        sm: 2,
        lg: 3,
        xl: 4
    })

    const [opacity, setOpacity] = useState(0.2);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(opacity => (opacity === 0.05 ? 0.9 : 0.05));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Stack width='100%'>
            <Grid
                templateColumns={{
                    base: `repeat(${columns}, 1fr)`,
                    sm: `repeat(${columns}, 1fr)`,
                    lg: `repeat(${columns}, 1fr)`,
                    xl: `repeat(${columns}, 1fr)`,
                }}
                gap='20px'
                placeItems='center'
            >
                {[...Array(columns * 2).keys()].map((_, index) => (
                    <GridItem
                        key={index}
                        width='100%'
                        height='550px'
                        opacity={opacity}
                        transition='1s'
                        transitionDelay={`${index * 100}ms`}
                    >
                        <Skeleton height={150} />
                        <Skeleton height={25} width={50} />
                        <Skeleton height={15} width={25} />
                        <Skeleton height={15} width={90} p={20} />
                        <Skeleton height={15} width={50} />
                        <Skeleton height={15} width={20} p={15} />
                        <Skeleton height={15} width={100} times={3} />
                        <Skeleton height={15} width={25} />
                        <HStack>
                            <Stack backgroundColor='#BBB' flex={1} height='10px' />
                            <Stack backgroundColor='#BBB' flex={3} height='10px' />
                            <Stack backgroundColor='#BBB' flex={2} height='10px' />
                        </HStack>
                        <Stack p='10px' />
                        <Skeleton height={10} width={25} />
                    </GridItem>
                ))}
            </Grid>
        </Stack>
    )
}

function Skeleton({ height, width, times, p }) {
    const parsedTimes = times !== undefined ? times : 1
    return (
        <>
            {Array.from(Array(parsedTimes)).map((_, index) => (
                <Stack
                    key={index}
                    backgroundColor='#BBB'
                    height={height ? `${height}px` : '100%'}
                    width={width ? `${width}%` : '100%'}
                    padding={`0px ${p ? p : 10}px`}
                />
            ))}
            <Stack p='10px' />
        </>
    )
}