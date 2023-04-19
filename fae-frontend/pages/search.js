import FilterSidebar from "@/components/ui/queryComponents/filterSidebar"
import { useState } from "react"
import { Icon, Button, HStack, Stack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Link from "next/link"
import SearchBar from "@/components/ui/queryComponents/searchBar"
import UserCards from "@/components/ui/user-cards"

export default function Search({ tempCards }) {
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
                    <Stack width='100%'>
                        <SearchBar />
                        <UserCards cards={tempCards} />
                    </Stack>
                </HStack>
            </Stack>
        </Stack>
    )
}

export async function getStaticProps() {
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
            tempCards: tempCards
        }
    }
}