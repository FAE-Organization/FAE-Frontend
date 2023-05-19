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
import { useViewportHeight } from "@/lib/hooks/useViewportHeight"
import UserCardLoading from "@/components/ui/loading/user-card-loading"
import { useSearchParams } from 'next/navigation'

export default function Search({ directory, userData }) {

    const [currentSelection, setCurrentSelection] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [cardVals, setCardVals] = useState(userData)
    const [filteredVals, setFilteredVals] = useState(cardVals)

    const { isOpen, onOpen, onClose } = useDisclosure()

    let allCategories = directory.map((entry) => entry.title)
    const [types, setTypes] = useState([])
    const [currentCategory, setCurrentCategory] = useState('Broadcasting')
    const [isUserCardLoading, setIsUserCardLoading] = useState(false)
    const view = useViewportHeight()
    const searchParams = useSearchParams()


    useEffect(() => {
        // const { category } = router.query
        const category = searchParams.get('category')
        const checkForCachedCategories = async () => {
            const data = await getCachedCategories(category ?? 'Broadcasting')
            setTypes(data)
            setIsLoading(false)
        }
        setCurrentCategory(category)
        checkForCachedCategories()

        setCardVals(Array.from(userData))
        setFilteredVals(Array.from(userData))
        // const fakeGetAsyncDataTimer = Math.floor(Math.random() * 3500) + 100

        // const timer = setTimeout(() => {
        //     setIsUserCardLoading(false)
        // }, fakeGetAsyncDataTimer)

        // return () => clearTimeout(timer)

    }, [])

    // const data = Array.from(tempCards)

    // const [cardVals, setCardVals] = useState(data);
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
                        cardVals: cardVals,
                        filteredVals: filteredVals,
                        onClose: onClose,
                        setFilteredVals: setFilteredVals,
                        setIsUserCardLoading: setIsUserCardLoading
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
                        {isUserCardLoading ? (
                            <UserCardLoading />
                        ) : (
                            <UserCards cardVals={filteredVals} />
                        )}
                    </Stack>
                </HStack>
            </Stack>
        </Stack>
    )
}

export async function getServerSideProps() {
    const directory = await getDirectory()

    const userData = await (await fetch(`${process.env.BACKEND_BASE_URI}/api/profile`)).json()
    console.log(userData)
    return {
        props: {
            directory: directory,
            userData: userData
        }
    }
}

// const tempCardsData = [
//     {
//         id: '1',
//         username: 'asa',
//         pronouns: ['any', 'all'],
//         roles: ['observer', 'graphic designer'],
//         region: 'SA',
//         notableEvents: ['VCT Masters 2022', 'VCT Challengers 2023'],
//         tags: ['English', 'Portugese', 'Flexible Pay'],
//         compensation: {
//             type: 'hr',
//             amount: 40,
//             currency: 'usd'
//         }
//     },
//     {
//         id: '2',
//         username: 'belle',
//         pronouns: ['she', 'they'],
//         roles: ['observer', 'graphic designer'],
//         region: 'SA',
//         notableEvents: ['VCT Masters 2022', 'VCT Challengers 2023'],
//         tags: ['AAPI', 'Collegiate', 'FPS', 'FE/NB'],
//         compensation: {
//             type: 'hr',
//             amount: 40,
//             currency: 'usd'
//         }
//     },
//     {
//         id: '3',
//         username: 'Brian S.',
//         pronouns: ['he', 'him'],
//         roles: ['observer', 'tournament admin', 'producer'],
//         region: 'AS',
//         notableEvents: ['VCT LOCK//IN', 'Naraka 2022 Morus Cup'],
//         tags: ['Flexible Schedule'],
//         compensation: {
//             type: 'hr',
//             amount: 35,
//             currency: 'usd'
//         }
//     },
//     {
//         id: '4',
//         username: 'hemmys',
//         pronouns: ['any', 'all'],
//         roles: ['observer', 'tournament admin', 'producer'],
//         region: 'NA',
//         notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
//         tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
//         compensation: {
//             type: 'hr',
//             amount: 30,
//             currency: 'usd'
//         }
//     },
//     {
//         id: '5',
//         username: 'Jaay',
//         pronouns: ['he', 'him'],
//         roles: ['observer', 'tournament admin', 'producer'],
//         region: 'NA',
//         notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
//         tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
//         compensation: {
//             type: 'hr',
//             amount: 30,
//             currency: 'usd'
//         }
//     },
//     {
//         id: '6',
//         username: 'JoannaCasts',
//         pronouns: ['they', 'them'],
//         roles: ['observer', 'tournament admin', 'producer'],
//         region: 'NA',
//         notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
//         tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
//         compensation: {
//             type: 'hr',
//             amount: 30,
//             currency: 'usd'
//         }
//     },
//     {
//         id: '7',
//         username: 'Nixy',
//         pronouns: ['he', 'they'],
//         roles: ['observer', 'tournament admin', 'producer'],
//         region: 'NA',
//         notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
//         tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
//         compensation: {
//             type: 'hr',
//             amount: 30,
//             currency: 'usd'
//         }
//     },
//     {
//         id: '8',
//         username: 'powy',
//         pronouns: ['she', 'her'],
//         roles: ['observer', 'tournament admin', 'producer'],
//         region: 'NA',
//         notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
//         tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
//         compensation: {
//             type: 'hr',
//             amount: 30,
//             currency: 'usd'
//         }
//     },
// ]