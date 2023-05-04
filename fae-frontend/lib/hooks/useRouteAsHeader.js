import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function useRouterAsHeader() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    useEffect(() => {
        const handleOnLoad = () => {
            const currentURL = router.asPath
            setTitle(
                currentURL === '/' ?
                    'FAE: Home' :
                    `FAE: ${currentURL[1].toUpperCase() + currentURL.slice(2)}`
            )
        }

        handleOnLoad()
    }, [router.asPath])

    return title
}