import { Box, Stack, IconButton, Text } from "@chakra-ui/react";
import EventDetail from "./WorkShowcase/event-detail";
import { BiAddToQueue } from "react-icons/bi";
import { EVENT_DATA } from "./TEST_DATA";
import Subheader from "./ProfileBody/subheader";

export default function Showcase({ editable }) {
    return (
        <Stack align='left' mr='20px'>
            <Box justifyItems={'center'}>
            <Subheader category='Work Showcase' fontSize={'24px'} />
                {editable && (
                    <IconButton
                        fontSize={'2xl'}
                        variant={'unstyled'}
                        icon={<BiAddToQueue />}
                        ml={2}
                        color={'purple.700'} />
                )}
            </Box>

            <Box>
                <Text
                    textTransform={'Uppercase'}
                    as='b'
                    fontSize={'20px'}
                    width={'auto'}>
                    Past Events
                </Text>
                <EventDetail editable={editable} events={EVENT_DATA} />
            </Box>
        </Stack>
    )
}