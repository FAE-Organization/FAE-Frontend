import { Box, Stack } from "@chakra-ui/react";
import EventDetail from "./event-detail"
import Subheader from "../ProfileBody/subheader";

export default function Showcase() {
    return (
        <Stack
            align='left'
            mr='20px'
        >
         <Subheader 
            category='Work Showcase'
            fontSize='24px'
         />

         <Box>
            <Subheader 
                category='Past Events'
            />
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
         </Box>
        </Stack>
    )
}