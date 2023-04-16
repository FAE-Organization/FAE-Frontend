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
                {cards.map((entry, index) => (
                    <Stack
                        key={index}
                        w='315px'
                        border="1px solid #CFCFCF"
                        borderRadius="md"
                        overflow="hidden"
                        mx='3px'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(-1)}
                        transition="transform 0.2s ease-in-out, filter 0.2s ease-in-out"
                        transform={hoveredIndex === index ? "scale(1.03)" : ""}
                    >
                        <Link href={`/directory/category?id=${index}`}>
                            <Stack
                                h="200px"
                                justifyContent='space-between'
                                padding='5px'
                                backgroundImage={`url(${'https://besthqwallpapers.com/Uploads/21-12-2019/116771/thumb-purple-neon-lights-black-background-purple-neon-light-neon-background.jpg'})`}
                                backgroundPosition='center'
                                backgroundSize='cover'
                                transition='background-size 0.3s ease-in-out'
                                filter={hoveredIndex === index ? "brightness(75%)" : ""}
                                _hover={{
                                    backgroundSize: '120%',
                                    filter: "brightness(50%)",
                                    transition: 'background-size 0.3s ease-in-out, filter 0.3s ease-in-out'
                                }}
                            >
                                {/* _hover={{
                                    transform: 'scale(1.5)',
                                    transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out'
                                }} */}
                                <Stack zIndex={1}>
                                    <Badge
                                        width={{ base: '75%', md: '60^', lg: '50%' }}
                                        backgroundColor='purple.500' color='#FFF'
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
                                        Title Goes Here
                                    </Text>
                                </Stack>
                            </Stack>
                            <Box p="20px">
                                <Text fontWeight="semibold">Card {index + 1} </Text>
                                <Text>Some text here.</Text>
                            </Box>
                        </Link>
                    </Stack>
                ))}
            </HStack>
        </Stack>
    )
}