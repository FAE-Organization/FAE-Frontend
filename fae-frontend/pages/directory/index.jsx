import { Stack, Spinner } from "@chakra-ui/react";
import CenteredTitle from "@/components/ui/centered-title";
import DirectoryGrid from "@/components/ui/directory-grid";
import React, { useEffect, useState } from "react";
import { getDirectory } from "@/lib/cms/getComponents/getDirectory";
import { getCachedCategories } from "@/lib/functions/getCachedCategories";
import { useViewportHeight } from "@/lib/hooks/useViewportHeight";
import { useDispatch } from "react-redux";
import { initialState, resetForm } from "@/lib/redux/formSlice";
import { setIsPageLoading } from "@/lib/redux/loadingSlice";

export default function Directory(props) {
    const [isLoading, setIsLoading] = useState(true)
    const view = useViewportHeight()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setIsPageLoading(false))
        props.directory.map((entry) => {
            getCachedCategories(entry.title)
        })

        dispatch(resetForm(initialState))
        const fakeGetAsyncDataTimer = Math.floor(Math.random() * 1000) + 100

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
                    <DirectoryGrid
                        cards={props.directory}
                        counts={JSON.parse(props.counts.payload)}
                    />
                )}
            </Stack>
        </React.Fragment >
    )
}

export async function getServerSideProps() {
    const directory = await getDirectory()
    const countData = await (await fetch(
        process.env.NODE_ENV === 'development' ? (
            'http://localhost:3001/api/directory/count'
        ) : (
            `https://fae-backend.onrender.com/api/directory/count`
        ))).json()
    // const countData = await (await fetch(
    //     process.env.NODE_ENV === 'development' ? (
    //         'http://localhost:3001/api/directory/count'
    //     ) : (
    //         `${process.env.NEXT_PUBLIC_BACKEND_BASE_URI}/api/directory/count`
    //     ))).json()

    const countData = await (await fetch(
        'https://fae-backend.onrender.com/api/directory/count'
    )).json()

    return {
        props: { directory: directory, counts: countData }
    }
}