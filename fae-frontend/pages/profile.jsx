import CenteredTitle from "@/components/ui/centered-title";
import DirectoryGrid from "@/components/ui/directory-grid";
import Showcase from "@/components/ui/profile/WorkShowcase/showcase";
import React from "react";

export default function Profile(props) {
    return (
        <React.Fragment>
            <Showcase />
           
        </React.Fragment >
    )
}

// export async function getStaticProps() {
//     return {
//         props: { test: 'test' }
//     }
// }