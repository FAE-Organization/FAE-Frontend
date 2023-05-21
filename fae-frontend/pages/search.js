import FilterSidebar from "@/components/ui/queryComponents/filterSidebar"
import { useEffect, useState } from "react"
import { Icon, HStack, Stack, Text, IconButton, useDisclosure } from "@chakra-ui/react"
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import Link from "next/link"
import SearchBar from "@/components/ui/queryComponents/searchBar"
import UserCards from "@/components/ui/user-cards"
import { getDirectory } from "@/lib/cms/getComponents/getDirectory";
import { getCachedCategories } from "@/lib/functions/getCachedCategories"
import UserCardLoading from "@/components/ui/loading/user-card-loading"
import { useSearchParams } from 'next/navigation'
import { useDispatch } from "react-redux"
import { updateCategory, updateExperience, updateSiteType, updateSubcategory } from "@/lib/redux/formSlice"
import { setSubcategories } from "@/lib/redux/filterSubcategorySlice"

export default function Search({ directory }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()

    let allCategories = directory.map((entry) => entry.title)
    const [isLoading, setIsLoading] = useState(true)                        // Is the data currently being filtered
    const [currentCategory, setCurrentCategory] = useState('Broadcasting')  // category states
    const [isUserCardLoading, setIsUserCardLoading] = useState(false)       // Are the user cards loading

    const searchParams = useSearchParams()


    useEffect(() => {
        const category = searchParams.get('category')
        const checkForCachedCategories = async () => {
            const data = await getCachedCategories(category)

            dispatch(updateCategory(decodeURIComponent(category)))
            dispatch(updateSubcategory(data))
            dispatch(setSubcategories(data))
            dispatch(updateSiteType([
                'on-site',
                'remote',
                'hybrid',
                'open to relocation'
            ]))
            dispatch(updateExperience([
                '1',
                '2',
                '3',
                '4'
            ]))
            setIsLoading(false)
        }
        setCurrentCategory(decodeURIComponent(category))
        checkForCachedCategories()
    }, [])

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
                        categoryStates: [currentCategory, setCurrentCategory],
                        allCategories: allCategories,
                        isLoading: isLoading,
                        isOpen: isOpen,
                        onClose: onClose,
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
                            <UserCards setIsLoading={setIsUserCardLoading} />
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