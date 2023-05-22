import { Box, Stack, IconButton, Text } from "@chakra-ui/react";
import EventDetail from "./WorkShowcase/event-detail";
import { BiAddToQueue } from "react-icons/bi";

export default function Showcase({ index, editable }) {
    const directory = '/profile-test-images';
    return (
        <Stack
            align='left'
            mr='20px'
        >
            <Box>
                <Text
                    textTransform={'Uppercase'}
                    as='b'
                    fontSize={'24px'}
                    width={'auto'}
                    pr={3}>
                    Work Showcase
                </Text>
                {editable && (
                    <IconButton
                        fontSize={'2xl'}
                        variant={'unstyled'}
                        icon={<BiAddToQueue />}
                        color={'purple.800'} />
                )}
            </Box>

            <Box>
                <Text
                    textTransform={'Uppercase'}
                    as='b'
                    fontSize={'20px'}
                    width={'auto'}
                    pr={3}>
                    Past Events
                </Text>
                <EventDetail
                    imageUrl={index === 1 ? directory + '/eventMockImage_1.png' : directory + '/eventMockImage_3.png'}
                    eventTitle={index === 1 ? 'Calling All Heroes 2022' : 'Global Series Championship'}
                    gameTitle={index === 1 ? 'Overwatch 2' : 'Apex Legends'}
                    userRole={index === 1 ? 'Tournament Admin' : 'Caster'}
                />

                <EventDetail
                    imageUrl={index === 1 ? directory + '/eventMockImage_2.png' : directory + '/eventMockImage_4.png'}
                    eventTitle={index === 1 ? 'Calling All Heroes 2022' : 'CDL Championship'}
                    gameTitle={index === 1 ? 'Overwatch 2' : 'Call of Duty: MWII'}
                    userRole={index === 1 ? 'Tournament Admin' : 'Observer'}
                />
            </Box>
        </Stack>
    )
}