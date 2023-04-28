import { VStack, HStack, Box, Button, Image, Text, Spacer } from "@chakra-ui/react";
import Subheader from "../ProfileBody/subheader";

export default function UserHeader({ username, pronouns, payrate }) {
    return (
        <VStack
            align='left'
        >
            <HStack
                color='black'

            >
                <Subheader
                    as='b'
                    fontSize='35px'
                    category={username}
                />
                <Box>
                    {pronouns}
                </Box>
                <Box>
                    {payrate}
                </Box>
                <Spacer />
                <Button variant='outline' colorScheme='purple'>
                    Edit Profile
                </Button>
            </HStack>
            <Image src='/socialMockImage.png' width='100px' />
        </VStack>
    )
}