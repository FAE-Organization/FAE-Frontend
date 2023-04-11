// import { Stack, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { HStack, Box, Text } from "@chakra-ui/react"

export default function DirectoryGrid({ cards }) {
    return (
        // <Grid templateColumns='repeat(4, 1fr)' display='flex' flexWrap='center'>
        //     {cards.map((entry, index) => (
        //         <GridItem>
        //             <Stack>
        //                 <Image
        //                     src='https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png'
        //                     alt='temporary image'
        //                 />
        //             </Stack>
        //             <Stack>
        //                 <Text>
        //                     This category focuses on providing services related to broadcasting and streaming of esports events, including live commentary, production, and more.
        //                 </Text>
        //             </Stack>
        //         </GridItem>
        //     ))}
        // </Grid>

        <HStack justifyContent="center" flexWrap="wrap" spacing="6">
            <Box w="250px" borderWidth="1px" borderRadius="md" overflow="hidden">
                <Box h="200px" bg="blue.200" />
                <Box p="4">
                    <Text fontWeight="semibold">Card 1</Text>
                    <Text>Some text here.</Text>
                </Box>
            </Box>
            <Box w="250px" borderWidth="1px" borderRadius="md" overflow="hidden">
                <Box h="200px" bg="green.200" />
                <Box p="4">
                    <Text fontWeight="semibold">Card 2</Text>
                    <Text>Some text here.</Text>
                </Box>
            </Box>
            <Box w="250px" borderWidth="1px" borderRadius="md" overflow="hidden">
                <Box h="200px" bg="red.200" />
                <Box p="4">
                    <Text fontWeight="semibold">Card 3</Text>
                    <Text>Some text here.</Text>
                </Box>
            </Box>
            <Box w="250px" borderWidth="1px" borderRadius="md" overflow="hidden">
                <Box h="200px" bg="purple.200" />
                <Box p="4">
                    <Text fontWeight="semibold">Card 4</Text>
                    <Text>Some text here.</Text>
                </Box>
            </Box>
            <Box w="250px" borderWidth="1px" borderRadius="md" overflow="hidden">
                <Box h="200px" bg="yellow.200" />
                <Box p="4">
                    <Text fontWeight="semibold">Card 5</Text>
                    <Text>Some text here.</Text>
                </Box>
            </Box>
            <Box w="250px" borderWidth="1px" borderRadius="md" overflow="hidden">
                <Box h="200px" bg="pink.200" />
                <Box p="4">
                    <Text fontWeight="semibold">Card 6</Text>
                    <Text>Some text here.</Text>
                </Box>
            </Box>
        </HStack>
    )
}