import ProfileBody from "@/components/ui/profile/ProfileBody/profile-body";
import Showcase from "@/components/ui/profile/WorkShowcase/showcase";
import React from "react";
import { VStack, HStack, Center } from "@chakra-ui/react";
import UserBanner from "@/components/ui/profile/UserBanner/user-banner";

export default function Profile(props) {
    return (
        <React.Fragment>
                <VStack padding='50px' maxW={'7xl'}>
                    <UserBanner />
                    <ProfileBody />
                </VStack>
        </React.Fragment >
    )
}