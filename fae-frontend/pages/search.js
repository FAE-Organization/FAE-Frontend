import FilterSidebar from "@/components/ui/queryComponents/filterSidebar"
import { useState } from "react"
import { Icon, Button, HStack, Stack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Link from "next/link"
import SearchBar from "@/components/ui/queryComponents/searchBar"

export default function Search({ temp }) {
    const [currentSelection, setCurrentSelection] = useState([])
    const router = useRouter()

    return (
        <Stack width='100%' alignItems='center'>
            <Stack width='90%'>
                <Link href='/directory'>
                    <HStack
                        color='#6742CE'
                        borderRadius='5px'
                        width='fit-content'
                        padding='5px'
                        _hover={{
                            transition: '0.3s',
                            backgroundColor: '#EFEFEF'
                        }}>
                        <Icon as={MdOutlineKeyboardArrowLeft} />
                        <Text>Back to Directory</Text>
                    </HStack>
                </Link>
                <Text width='335px'>Freelancers in Broadcasting</Text>
                <HStack alignItems='flex-start'>
                    <FilterSidebar states={[currentSelection, setCurrentSelection]} />
                    <SearchBar />
                </HStack>
            </Stack>
        </Stack>
    )
}

export async function getStaticProps() {
    return {
        props: {
            temp: 'temp'
        }
    }
}