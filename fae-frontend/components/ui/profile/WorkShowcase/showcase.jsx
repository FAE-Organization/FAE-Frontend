import { VStack, Stack, Text } from "@chakra-ui/react";
import EventDetail from "./event-detail"

const fakeEventData = {
    imageUrl: './public/logo/fae-icon.png',
    eventTitle: 'Calling All Heroes 2022', 
    gameTitle: 'Overwatch 2', 
    userRole: 'Tournament Admin',
};

export default function Showcase({ title, description }) {
    return (
        <VStack
            width='30%'
            bgColor='lavender'
        >
         <Text>
            WORK SHOWCASE
         </Text>
         <Stack>
            <Text>
                PAST EVENTS
            </Text>
            <EventDetail
                imageUrl={'/eventMockImage_1.png'}
                eventTitle={'Calling All Heroes 2022'} 
                gameTitle={'Overwatch 2'} 
                userRole={'Tournament Admin'}
            />

            <EventDetail
                imageUrl={'/eventMockImage_2.png'}
                eventTitle={'Calling All Heroes 2022'} 
                gameTitle={'Overwatch 2'} 
                userRole={'Tournament Admin'}
            />
         </Stack>
        </VStack>
    )
}