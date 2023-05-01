import ProfileBody from "@/components/ui/profile/ProfileBody/profile-body";
import Showcase from "@/components/ui/profile/WorkShowcase/showcase";
import React from "react";
import { VStack } from "@chakra-ui/react";
import UserBanner from "@/components/ui/profile/UserBanner/user-banner";

export default function Profile() {
    return (
        <React.Fragment>
                <VStack padding='50px'>
                    <UserBanner />
                    <ProfileBody />
                </VStack>
        </React.Fragment >
    )
}