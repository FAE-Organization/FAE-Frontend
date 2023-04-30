import { VStack, HStack, Image } from "@chakra-ui/react";
import UserHeader from "./user-header.jsx";
import UserCategories from "./user-categories.jsx";
import UserBio from "./user-bio.jsx";

export default function UserBanner() {
    return (
        <HStack
            align='top'
            maxWidth='85%'
        >

            <Image 
                src='/userMockIcon_1.png' 
                borderRadius='20px' 
                width='300px' 
                mt='5px'
                me='20px'
            />

            <VStack
                align='left'
            >
                <UserHeader 
                    username='hemmys'
                    pronouns='any/all'
                    payrate='$35/hr'
                />
                <UserCategories />
                <UserBio />
            </VStack>
        </HStack>
    )
}