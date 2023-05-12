import ProfileBody from "@/components/ui/profile/ProfileBody/profile-body";
import Showcase from "@/components/ui/profile/WorkShowcase/DO_NOT_USE";
import React from "react";
import { VStack } from "@chakra-ui/react";
import UserBanner from "@/components/ui/profile/UserBanner/user-banner";

export default function test() {
    return (
        <React.Fragment>
            <VStack
                padding='50px'
            >
                <UserBanner
                    roles={['Caster', 'Observer', 'Producer']}
                    tags={['English', 'Flexible Pay']}
                    region={'NA'}
                    image={2}
                    username={'Jaay'}
                    pronouns={'he/him'}
                    payrate='$35/hr'
                />
                <ProfileBody index={2} />
            </VStack>
        </React.Fragment >
    )
}