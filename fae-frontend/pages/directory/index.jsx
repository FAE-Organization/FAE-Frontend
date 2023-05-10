import { Stack, Spinner } from "@chakra-ui/react";
import CenteredTitle from "@/components/ui/centered-title";
import DirectoryGrid from "@/components/ui/directory-grid";
import React, { useEffect, useState } from "react";
import { getDirectory } from "@/lib/cms/getComponents/getDirectory";
import { getCachedCategories } from "@/lib/functions/getCachedCategories";
import { useViewportHeight } from "@/lib/hooks/useViewportHeight";

export default function Directory(props) {
    const [isLoading, setIsLoading] = useState(true)
    const view = useViewportHeight()

    useEffect(() => {
        props.directory.map((entry) => {
            getCachedCategories(entry.title)
        })
        const fakeGetAsyncDataTimer = Math.floor(Math.random() * 2500) + 100

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, fakeGetAsyncDataTimer)

        return () => clearTimeout(timer)
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
                {isLoading ? (
                    <Stack width='100%' height={view / 1.2} justifyContent='center' alignItems='center'>
                        <Spinner width='50px' height='50px' color='purple.700' />
                    </Stack>
                ) : (
                    <DirectoryGrid cards={props.directory} isLoading={isLoading} />
                )}
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