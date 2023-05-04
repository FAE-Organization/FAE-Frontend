import { Image, Stack, Box } from "@chakra-ui/react";
import Subheader from "@/components/ui/profile/ProfileBody/subheader"

export default function ObserverReel({ index }) {
    return (
        <Stack>
            <Subheader
                category='Observer Reel' // TODO: may need to refactor this later.
            />

            <Image // This may be changed later
                src={index === 1 ? '/reelMockImage.png' : '/reelMockImage3.png'}
            />
        </ Stack>
    )
}