import { Box, VStack, HStack, Image, Text } from "@chakra-ui/react";
import UserHeader from "./user-header.jsx";
import UserCategories from "./user-categories.jsx";
import UserBio from "./user-bio.jsx";
import Showcase from "../WorkShowcase/showcase.jsx";

export default function UserBanner({ stuff }) {
    return (
        <HStack
            align='left'
            width='100%'
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