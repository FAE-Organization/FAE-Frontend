import ProfileBody from "@/components/ui/profile/ProfileBody/profile-body";
import Showcase from "@/components/ui/profile/WorkShowcase/showcase";
import React from "react";
import { VStack, HStack, Center } from "@chakra-ui/react";
import UserBanner from "@/components/ui/profile/UserBanner/user-banner";

export default function Profile(props) {
    return (
        <React.Fragment>
            <VStack padding='50px' >
                <UserBanner
                    roles={['Observer', 'Tournament Admin', 'Producer', 'Social Media']}
                    tags={['FE/NB', 'Collegiate', 'Flexible Pay']}
                    region={'NA'}
                    image={1}
                    username={'hemmys'}
                    pronouns={'any/all'}
                    payrate='$35/hr'
                />
                <ProfileBody />
            </VStack>
        </React.Fragment >
    )
}

// pastEvents = {
//     [
//     {
//         title: 'Calling All Heroes 2022 Overwatch 2',
//         position: 'Tournament Admin',
//         image: {
//             src: '',
//             alt: ''
//         }
//     },
//     {
//         title: 'Calling All Heroes 2022 Overwatch 2',
//         position: 'Tournament Admin',
//         image: {
//             src: '',
//             alt: ''
//         }
//     }
//     ]}
// observerReel = {}