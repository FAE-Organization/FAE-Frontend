import FilterSidebar from "@/components/ui/queryComponents/filterSidebar"
import { useEffect, useState } from "react"
import { Icon, HStack, Stack, Text } from "@chakra-ui/react"
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
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
                <Text width='335px'>Freelancers in {currentCategory ? currentCategory : 'Broadcasting'}</Text>
                <HStack alignItems='flex-start' gap='15px'>
                    <FilterSidebar filterProps={{
                        states: [currentSelection, setCurrentSelection],
                        categoryStates: [currentCategory, setCurrentCategory],
                        allCategories: allCategories,
                        subcategoryStates: [types, setTypes],
                        isLoading: isLoading
                    }} />
                    <Stack width='100%' gap='15px'>
                        <SearchBar />
                        <UserCards cards={tempCards} />
                    </Stack>
                </HStack>
            </Stack>
        </Stack>
    )
}

export async function getServerSideProps() {
    const tempCards = [
        {
            id: '1',
            username: 'asa',
            pronouns: ['any', 'all'],
            roles: ['observer', 'graphic designer'],
            region: 'SA',
            notableEvents: ['VCT Masters 2022', 'VCT Challengers 2023'],
            tags: ['English', 'Portugese', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 40,
                currency: 'usd'
            }
        },
        {
            id: '2',
            username: 'belle',
            pronouns: ['she', 'they'],
            roles: ['observer', 'graphic designer'],
            region: 'SA',
            notableEvents: ['VCT Masters 2022', 'VCT Challengers 2023'],
            tags: ['AAPI', 'Collegiate', 'FPS', 'FE/NB'],
            compensation: {
                type: 'hr',
                amount: 40,
                currency: 'usd'
            }
        },
        {
            id: '3',
            username: 'Brian S.',
            pronouns: ['he', 'him'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'AS',
            notableEvents: ['VCT LOCK//IN', 'Naraka 2022 Morus Cup'],
            tags: ['Flexible Schedule'],
            compensation: {
                type: 'hr',
                amount: 35,
                currency: 'usd'
            }
        },
        {
            id: '4',
            username: 'hemmys',
            pronouns: ['any', 'all'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'NA',
            notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
            tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 30,
                currency: 'usd'
            }
        },
        {
            id: '5',
            username: 'Jaay',
            pronouns: ['he', 'him'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'NA',
            notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
            tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 30,
                currency: 'usd'
            }
        },
        {
            id: '6',
            username: 'JoannaCasts',
            pronouns: ['they', 'them'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'NA',
            notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
            tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 30,
                currency: 'usd'
            }
        },
        {
            id: '7',
            username: 'Nixy',
            pronouns: ['he', 'they'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'NA',
            notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
            tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 30,
                currency: 'usd'
            }
        },
        {
            id: '8',
            username: 'powy',
            pronouns: ['she', 'her'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'NA',
            notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
            tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 30,
                currency: 'usd'
            }
        },
    ]
    const directory = await getDirectory()
    return {
        props: {
            tempCards: tempCards,
            directory: directory
        }
    }
}