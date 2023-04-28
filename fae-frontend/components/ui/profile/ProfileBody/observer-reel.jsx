import { HStack, VStack, Box, Image, Stack, Text } from "@chakra-ui/react";
import Subheader from "@/components/ui/profile/ProfileBody/subheader"

export default function ObserverReel( props ) {
    return (
        <Stack>
            <Subheader 
                category='Observer Reel' // TODO: may need to refactor this later.
            />

            <Image // This may be changed later
                src='/reelMockImage.png'
            />
        </ Stack>
    )
}