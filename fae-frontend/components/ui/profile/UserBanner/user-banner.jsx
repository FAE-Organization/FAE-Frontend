import { VStack, HStack, Image } from "@chakra-ui/react";
import UserHeader from "./user-header.jsx";
import UserCategories from "./user-categories.jsx";
import UserBio from "./user-bio.jsx";

export default function UserBanner({ roles, tags, region, image, username, pronouns, payrate }) {
    return (
        <HStack
            align='top'
            maxWidth='85%'
        >

            <Image
                src={image === 1 ? '/userMockIcon_1.png' : '/userMockIcon_2.png'}
                borderRadius='20px'
                width='300px'
                mt='5px'
                me='20px'
            />

            <VStack
                align='left'
            >
                <UserHeader
                    username={username}
                    pronouns={pronouns}
                    payrate={payrate}
                />
                <UserCategories roles={roles} tags={tags} region={region} />
                <UserBio />
            </VStack>
        </HStack>
    )
}