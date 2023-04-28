import { HStack, VStack, Box, Image, Text } from "@chakra-ui/react";

export default function EventDetail({ imageUrl, eventTitle, gameTitle, userRole }) {
    return (
        <HStack
            width='100%'
            alignItems='align-center'
        >
            <Box width='25%' >
                <Image
                    src={imageUrl}
                    alt='event image'
                    height='100px'
                />
            </Box>


            <VStack 
                width='75%'
                alignItems='left'
                spacing='-4px'
                paddingTop='20px' // TODO: adjust this later
            >
                <Text 
                    as='b'
                    fontSize='sm'
                >
                    {eventTitle}
                </Text>
                <Text
                    as='b'
                    fontSize='sm'
                >
                    {gameTitle}
                </Text>
                <Text>
                    {userRole}
                </Text>
            </VStack>
        </HStack>
    )
}