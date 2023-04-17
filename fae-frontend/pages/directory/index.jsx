import { Stack } from "@chakra-ui/react";
import CenteredTitle from "@/components/ui/centered-title";
import DirectoryGrid from "@/components/ui/directory-grid";
import React from "react";

export default function Directory(props) {
    return (
        <React.Fragment>
            <Stack gap='20px'>
                <CenteredTitle
                    title={"Explore our Directory"}
                    description={
                        "Our directory is designed to help users understand the different sectors that make up the esports and gaming industry."
                    }
                />
                <DirectoryGrid cards={['blue.700', 'green.700', 'red.700', 'purple.700', 'yellow.700', 'pink.700']} />
            </Stack>
        </React.Fragment >
    )
}

export async function getStaticProps() {
    return {
        props: { test: 'test' }
    }
}