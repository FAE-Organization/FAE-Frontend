import { VStack, Flex, Box, IconButton, Image, Text } from "@chakra-ui/react";
import { FaPlus, FaEllipsisH } from "react-icons/fa";

// Renders all event items
export default function EventDetail({ editable, events }) {

    // Renders container for individual event items
    function EventBox({ event }) {
        const { imageUrl, eventTitle, gameTitle, userRole } = event;

        return (
            <Flex
                border={editable ? '1px solid black' : ''}
                borderRadius={editable ? 'md' : ''}
                minWidth={'full'}>
                <Flex>
                    <Image
                        src={imageUrl}
                        alt='event image'
                    />
                </Flex>
                <Flex
                    width='70%'
                    alignItems='left'
                    spacing='-4px'
                    py='10px'
                    direction={'column'}
                    justifyItems={'center'}>
                    <Text as='b' fontSize='sm' >
                        {eventTitle}
                    </Text>
                    <Text as='b' fontSize='sm'>
                        {gameTitle}
                    </Text>
                    <Text>
                        {userRole}
                    </Text>
                </Flex>
                {editable && (
                    <IconButton
                        size={'sm'}
                        isRound
                        bgColor={'white'}
                        boxShadow={'md'}
                        fontSize={'xl'}
                        color={'purple.600'}
                        position='relative'
                        right='-3'
                        top='-4'
                        aria-label='Edit event'
                        icon={<FaEllipsisH />} />
                )}
            </Flex>
        );
    };

    return (
        <VStack spacing={editable ? 5 : 2} align='start'>
            {events.map((event, index) => (
                <EventBox key={index} event={event} editable={editable} />
            ))}
            {editable && (
                <Flex
                border={editable ? '1px solid black' : ''}
                borderRadius={editable ? 'md' : ''}
                minH={'60px'}
                width={'full'}>
                    <IconButton
                        size={'sm'}
                        isRound
                        bgColor={'white'}
                        boxShadow={'md'}
                        fontSize={'xl'}
                        color={'purple.600'}
                        position='relative'
                        right='-307'
                        top='-4'
                        aria-label='Add event'
                        icon={<FaPlus />} />
                </Flex>
            )}
        </VStack>
    );
};