import { Stack } from "@chakra-ui/react";
import CenteredTitle from "@/components/ui/centered-title";
import DirectoryGrid from "@/components/ui/directory-grid";
import React, { useEffect } from "react";
import { getDirectory } from "@/lib/cms/getComponents/getDirectory";
import { getCachedCategories } from "@/lib/functions/getCachedCategories";

export default function Directory(props) {

    useEffect(() => {
        props.directory.map((entry) => {
            getCachedCategories(entry.title)
        })
    }, [])

    return (
        <React.Fragment>
            <Stack gap='20px'>
                <CenteredTitle
                    title={"Explore our Directory"}
                    description={
                        "Our directory is designed to help users understand the different sectors that make up the esports and gaming industry."
                    }
                />
                <DirectoryGrid cards={props.directory} />
            </Stack>
        </React.Fragment >
    )
}

export async function getServerSideProps() {
    const directory = await getDirectory()
    return {
        props: { directory: directory }
    }
}