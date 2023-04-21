import FilterSidebar from "@/components/ui/queryComponents/filterSidebar"
import { useEffect, useState } from "react"
import { Icon, HStack, Stack, Text } from "@chakra-ui/react"
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Link from "next/link"
import SearchBar from "@/components/ui/queryComponents/searchBar"
import UserCards from "@/components/ui/user-cards"
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url"


export default function Search({ tempCards }) {

    const [currentSelection, setCurrentSelection] = useState([])
    let allCategories = [
        'Broadcasting',
        'Business Operations',
        'Communications & Marketing',
        'Content Creation',
        'Performance',
        'Tournament & events'
    ]

    const [currentCategory, setCurrentCategory] = useState('')

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const params = {};
        for (const [key, value] of searchParams.entries()) {
            params[key] = value;
        }
        setCurrentCategory(params.category)

    }, [])

    const filterProps = {
        states: [currentSelection, setCurrentSelection],
        categoryStates: [currentCategory, setCurrentCategory],
        allCategories: allCategories
    }

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
                <Text width='335px'>Freelancers in {currentCategory}</Text>
                <HStack alignItems='flex-start' gap='15px'>
                    <FilterSidebar filterProps={filterProps} />
                    <Stack width='100%' gap='15px'>
                        <SearchBar />
                        <UserCards cards={tempCards} />
                    </Stack>
                </HStack>
            </Stack>
        </Stack>
    )
}

export async function getStaticProps(context) {
    const { query } = context
    /**
     * Temporary data
     * 
     * The ids will be whatever id is set in MongoDB instead of numbers
     */
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

    return {
        props: {
            tempCards: tempCards,
        }
    }
}