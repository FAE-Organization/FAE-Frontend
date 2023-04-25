import { Stack, HStack, Box, Text, Badge, Image } from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react";

export default function DirectoryGrid({ cards }) {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

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
                        w='315px'
                        height='325px'
                        noOfLines={4}
                        border="1px solid #CFCFCF"
                        borderRadius="md"
                        overflow="hidden"
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
                                        fontWeight={700}
                                        color='#FEFEFE'
                                        fontSize='26px'
                                    >
                                        {card.title}
                                    </Text>
                                </Stack>
                            </Stack>
                            <Box p="20px">
                                {/* <Text fontWeight="semibold">Card {index + 1} </Text> */}
                                <Text>{card.description}</Text>
                            </Box>
                        </Link>
                    </Stack>
                ))
                }
            </HStack >
        </Stack >
    )
}