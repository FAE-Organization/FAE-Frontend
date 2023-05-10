import { Stack, HStack, Box, Text, Badge } from "@chakra-ui/react"
import Link from "next/link"
import { useState, useEffect } from "react";

export default function DirectoryGrid({ cards }) {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [opacity, setOpacity] = useState('0')
    useEffect(() => {
        setOpacity('1')
    }, [])

    return (
        <Stack width='100%' alignItems='center'>
            <HStack
                width='95%'
                justifyContent='center'
                flexWrap="wrap"
                gap='20px'
                align="flex-start"
            >

                {cards.map((card, index) => (
                    <Stack
                        key={index}
                        opacity={opacity}
                        filter={opacity !== '1' ? 'blur(4px)' : 'none'}
                        transform={opacity !== '1' ? 'translateX(-30%)' : 'translateX(0)'}
                        transition='1s'
                        transitionDelay={`${(index + 1) * 50}ms`}
                        _mediaReduceMotion={true}
                    >
                        <Stack
                            w='315px'
                            height='325px'
                            noOfLines={4}
                            overflow="hidden"
                            border="1px solid #CFCFCF"
                            borderRadius="md"
                            mx='3px'
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(-1)}
                            transition="transform 0.2s ease-in-out, filter 0.2s ease-in-out"
                            transform={hoveredIndex === index ? "scale(1.03)" : ""}
                        >
                            <Link href={`/search?category=${encodeURIComponent(card.title)}`}>
                                <Stack
                                    h="200px"
                                    justifyContent='space-between'
                                    padding='5px'
                                    backgroundImage={`url(${card.image.src})`}
                                    backgroundPosition='center'
                                    backgroundSize='cover'

                                >
                                    <Stack zIndex={1}>
                                        <Badge
                                            width={{ base: '75%', md: '60%', lg: '50%' }}
                                            backgroundColor='purple.500'
                                            color='#FFF'
                                            borderRadius='5px'
                                        >
                                            100+ profiles
                                        </Badge>
                                    </Stack>
                                    <Stack
                                        zIndex={1}
                                    >
                                        <Text
                                            padding='5px'
                                            fontWeight={700}
                                            color='#FEFEFE'
                                            fontSize={{ base: '22px', md: '24px', lg: '26px' }}
                                        >
                                            {card.title}
                                        </Text>
                                    </Stack>
                                </Stack>
                                <Box p="20px">
                                    <Text fontSize={{ base: '13px', md: '14px', lg: '15px' }}>
                                        {card.description}
                                    </Text>
                                </Box>
                            </Link>
                        </Stack>
                    </Stack>
                ))}

            </HStack >
        </Stack >
    )
}