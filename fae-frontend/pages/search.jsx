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
import { useDispatch, useSelector } from "react-redux"
import { updateCategory, updateExperience, updateSiteType, updateSubcategory } from "@/lib/redux/formSlice"
import { setCategories, setSubcategories } from "@/lib/redux/filterSubcategorySlice"

export default function Search({ directory }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()

    const [currentCategory, setCurrentCategory] = useState('Broadcasting')  // category states

    const searchParams = useSearchParams()

    const isUserCardLoading = useSelector((state) => state.loading.isUserCardLoading)

    useEffect(() => {
        const category = searchParams.get('category')
        const checkForCachedCategories = async () => {
            const data = await getCachedCategories(category)
            dispatch(setCategories(directory.map((entry) => entry.title)))
            dispatch(updateCategory(decodeURIComponent(category)))
            dispatch(updateSubcategory(data))
            dispatch(setSubcategories(data))
            setCurrentCategory(decodeURIComponent(category))
        }
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
                        isOpen: isOpen,
                        onClose: onClose,
                    }} />
                    <Stack width='100%' gap='0px'>
                        <HStack alignItems='flex-start'>
                            <SearchBar />
                            <Stack>
                                <IconButton
                                    icon={<HiOutlineAdjustmentsHorizontal color='#FFF' />}
                                    aria-label='open filter'
                                    display={{
                                        base: 'flex',
                                        md: 'none'
                                    }}
                                    backgroundColor='#6742CE'
                                    onClick={onOpen}
                                />
                            </Stack>
                        </HStack>
                        {isUserCardLoading ? (
                            <UserCardLoading />
                        ) : (
                            <UserCards />
                        )}
                    </Stack>
                </HStack>
            </Stack>
        </Stack>
    )
}

export async function getServerSideProps() {
    const directory = await getDirectory()

    return {
        props: {
            directory: directory,
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