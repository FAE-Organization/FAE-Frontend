import { Stack, HStack, Box, Text, Badge } from "@chakra-ui/react"

export default function DirectoryGrid({ cards }) {
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
                    >
                        <Stack
                            h="200px"
                            bg={entry}
                            justifyContent='space-between'
                            padding='5px'
                        >
                            <Stack>
                                <Badge
                                    width={{ base: '75%', md: '60^', lg: '50%' }}
                                    backgroundColor='purple.500' color='#FFF'
                                    borderRadius='5px'
                                >
                                    100+ profiles
                                </Badge>
                            </Stack>
                            <Stack>
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
                    </Stack>
                ))}
            </HStack>
        </Stack>
    )
}