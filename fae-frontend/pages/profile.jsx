import ProfileBody from "@/components/ui/profile/ProfileBody/profile-body";
import Showcase from "@/components/ui/profile/WorkShowcase/showcase";
import React from "react";
import { HStack } from "@chakra-ui/react";

export default function Profile(props) {
    return (
        <React.Fragment>
            <HStack
                width='80%'
            >
                <Showcase />
                <ProfileBody />
            </HStack>
           
        </React.Fragment >
    )
}

// export async function getStaticProps() {
//     return {
//         props: { test: 'test' }
//     }
// }