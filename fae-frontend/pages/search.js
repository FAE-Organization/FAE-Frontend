import FilterSidebar from "@/components/ui/queryComponents/filterSidebar"
import { useEffect, useState } from "react"
import { Icon, HStack, Stack, Text, IconButton, useDisclosure } from "@chakra-ui/react"
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import Link from "next/link"
import SearchBar from "@/components/ui/queryComponents/searchBar"
import UserCards from "@/components/ui/user-cards"
import { useRouter } from "next/router"
import { getDirectory } from "@/lib/cms/getComponents/getDirectory";
import { getCachedCategories } from "@/lib/functions/getCachedCategories"

export default function Search({ tempCards, directory }) {

    const [currentSelection, setCurrentSelection] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()

    let allCategories = directory.map((entry) => entry.title)
    const [types, setTypes] = useState([])
    const [currentCategory, setCurrentCategory] = useState('Broadcasting')

    useEffect(() => {
        const { category } = router.query
        const test = async () => {
            const data = await getCachedCategories(category ?? 'Broadcasting')
            setTypes(data)
            setIsLoading(false)
        }
        setCurrentCategory(category)
        test()
    }, [])

    const data = Array.from(tempCards)

    const [cardVals, setCardVals] = useState(data);
    return (
        <Stack width='100%' alignItems='center'>
            <Stack width='90%'>
                <Link href='/directory' style={{ width: 'fit-content' }}>
                    <HStack
                        color='#6742CE'
                        borderRadius='5px'
                        padding='5px'
                        _hover={{
                            transition: '0.3s',
                            backgroundColor: '#EFEFEF'
                        }}>
                        <Icon as={MdOutlineKeyboardArrowLeft} />
                        <Text>Back to Directory</Text>
                    </HStack>
                </Link>
                <Text fontSize='28px' fontWeight={700}>Freelancers in {currentCategory ? currentCategory : 'Broadcasting'}</Text>
                <HStack alignItems='flex-start' gap='15px'>
                    <FilterSidebar filterProps={{
                        states: [currentSelection, setCurrentSelection],
                        categoryStates: [currentCategory, setCurrentCategory],
                        allCategories: allCategories,
                        subcategoryStates: [types, setTypes],
                        isLoading: isLoading,
                        isOpen: isOpen,
                        onClose: onClose,
                        setCardVals: setCardVals
                    }} />
                    <Stack width='100%' gap='15px'>
                        <HStack>
                            <SearchBar />
                            <IconButton
                                icon={<HiOutlineAdjustmentsHorizontal />}
                                aria-label='open filter'
                                display={{
                                    base: 'flex',
                                    md: 'none'
                                }}
                                onClick={onOpen}
                            />
                        </HStack>
                        <UserCards cardVals={cardVals} />
                    </Stack>
                </HStack>
            </Stack>
        </Stack>
    )
}

export async function getServerSideProps() {
    const tempCardsResponse = await fetch('http://localhost:3000/api/v1/users');
    const tempCardsData = await tempCardsResponse.json();
    const directory = await getDirectory()
    return {
        props: {
            tempCards: tempCardsData,
            directory: directory
        }
    }
}