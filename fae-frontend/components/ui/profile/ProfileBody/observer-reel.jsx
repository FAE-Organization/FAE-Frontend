import { Image, Stack, Box, Text } from "@chakra-ui/react";
import { IconButton } from '@chakra-ui/react'
import { MdOutlineUpload } from "react-icons/md";

export default function ObserverReel( index, { editable }) {
    return (
        <Stack>
             <Box>
                <Text
                    textTransform={'Uppercase'}
                    as='b'
                    fontSize={'20px'}
                    width={'auto'}
                    pr={3}>
                    Observer Reel
                </Text>

                {editable && (
                    <IconButton 
                        fontSize={'2xl'} 
                        variant={'unstyled'} 
                        icon={<MdOutlineUpload />} 
                        color={'purple.800'} />
                )}

            </Box>

            <Image // This may be changed later
                src={index === 1 ? 'profile-test-images/reelMockImage.png' : 'profile-test-images/reelMockImage3.png'}
            />
        </ Stack>
    )
}