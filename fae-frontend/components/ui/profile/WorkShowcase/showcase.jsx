import { Box, Stack } from "@chakra-ui/react";
import EventDetail from "./event-detail"
import Subheader from "../ProfileBody/subheader";

export default function Showcase({ index }) {
    console.log(index)
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
                    imageUrl={index === 1 ? '/eventMockImage_1.png' : '/eventMockImage_3.png'}
                    eventTitle={index === 1 ? 'Calling All Heroes 2022' : 'Global Series Championship'}
                    gameTitle={index === 1 ? 'Overwatch 2' : 'Apex Legends'}
                    userRole={index === 1 ? 'Tournament Admin' : 'Caster'}
                />

                <EventDetail
                    imageUrl={index === 1 ? '/eventMockImage_2.png' : '/eventMockImage_4.png'}
                    eventTitle={index === 1 ? 'Calling All Heroes 2022' : 'CDL Championship'}
                    gameTitle={index === 1 ? 'Overwatch 2' : 'Call of Duty: MWII'}
                    userRole={index === 1 ? 'Tournament Admin' : 'Observer'}
                />
            </Box>
        </Stack>
    )
}