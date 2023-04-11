import CenteredTitle from "@/components/ui/centered-title";
import DirectoryGrid from "@/components/ui/directory-grid";
import React from "react";

export default function Directory(props) {
    return (
        <React.Fragment>
            <CenteredTitle
                title={"Explore our Directory"}
                description={
                    "Our directory is designed to help users understand the different sectors that make up the esports and gaming industry."
                }
            />
            <DirectoryGrid cards={[1, 1, 1, 1, 1, 1]} />
        </React.Fragment >
    )
}

export async function getStaticProps() {
    return {
        props: { test: 'test' }
    }
}