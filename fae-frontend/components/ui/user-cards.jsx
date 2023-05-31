import { Stack, Grid, GridItem, Image, HStack, Text, Badge, Icon } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { BiDollarCircle } from 'react-icons/bi'
import { setIsUserCardLoading } from "@/lib/redux/loadingSlice";
import Paginator from "../utils/Paginator";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function UserCards() {
    const [cardVals, setCardVals] = useState()
    const [cardValsLength, setCardValsLength] = useState(cardVals ? cardVals.length : 0)

    const currentUserDataByFilter = useSelector((state) => state.user.usersByFilter)
    const currentUserDataBySearch = useSelector((state) => state.user.usersBySearch)
    const userLength = useSelector((state) => state.user.users)

    const dispatch = useDispatch()

    const queryClient = useQueryClient()
    const tenMinutes = 1000 * 60 * 10

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            if (cardVals) {
                return cardVals
            } else {
                throw new Error
            }
        },
        retry: 5,
        staleTime: tenMinutes,
        refetchInterval: tenMinutes + 5000
    })

    console.log(data)

    useEffect(() => {
        const searchMap = new Map()
        currentUserDataBySearch.data.forEach((entry => {
            searchMap.set(entry._id, entry)
        }))

        const currentUserData = currentUserDataByFilter.filter((entry) => {
            if (currentUserDataBySearch.initialLoad) {
                return true
            } else {
                return searchMap.has(entry._id)
            }
        })

        setCardVals(currentUserData)
        setCardValsLength(currentUserData ? currentUserData.length : 0)
        dispatch(setIsUserCardLoading(false))
    }, [currentUserDataByFilter, currentUserDataBySearch])

    return (
        <Stack width='100%'>
            {cardValsLength > 0 && (
                <Paginator totalItems={userLength} itemsPerPage={8} />
            )}

            <Grid
                templateColumns={{
                    base: '1fr',
                    sm: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                    xl: 'repeat(4, 1fr)'
                }}
                gap='20px'
                placeItems='center'
            >
                {cardVals && (Array.from(cardVals).map((card, index) => (
                    <GridItem
                        key={index}
                        height='560px'
                        width={{ base: '75%', sm: '100%' }}
                        boxShadow='1px 1px 15px #888'
                        _hover={{
                            transition: "transform 0.2s ease-in-out, filter 0.2s ease-in-out",
                            transform: 'scale(1.03)'
                        }}
                        borderRadius='5px'
                    >
                        <Link href={`/profile?id=${card._id}`}>
                            <Stack>
                                <Image
                                    src={card.profilePic}
                                    alt={`Profile image for ${card.username}`}
                                    borderTopLeftRadius='5px'
                                    borderTopRightRadius='5px'
                                    height='150px'
                                    objectFit='cover'
                                />
                            </Stack>
                            <Stack padding='10px'>
                                <Stack
                                    alignItems={{
                                        md: 'center',
                                    }}
                                    direction={{
                                        base: 'column',
                                        md: 'row'
                                    }}
                                    flexWrap='wrap'
                                >
                                    <Text fontSize='20px' fontWeight={600}>{card.username}</Text>
                                    <Text fontSize='12px' color='#8F8F8F'>{`(${card.pronouns})`}</Text>
                                </Stack>
                                <Stack
                                    height={{
                                        base: '130px',
                                        md: '150px'
                                    }}
                                    justifyContent='space-between'
                                >
                                    <Stack>
                                        <Text>Roles</Text>
                                        <HStack flexWrap='wrap' justifyContent='flex-start' noOfLines={2}>
                                            {card.roles.map((entry, index) => (
                                                <Badge
                                                    key={index}
                                                    fontSize='10px'
                                                    marginLeft='8px'
                                                    backgroundColor={(() => {
                                                        switch (entry) {
                                                            case 'observer':
                                                                return 'red.100'
                                                            case 'graphic designer':
                                                                return 'pink.100'
                                                            case 'tournament admin':
                                                                return 'blue.100'
                                                            case 'producer':
                                                                return 'green.100'
                                                        }
                                                    })()}
                                                >
                                                    {entry}
                                                </Badge>
                                            ))}
                                        </HStack>
                                    </Stack>
                                    <Stack>
                                        <Text>Region</Text>
                                        <Stack>
                                            <Badge
                                                width='fit-content'
                                                backgroundColor={(() => {
                                                    switch (card.region) {
                                                        case 'NA':
                                                            return 'purple.200'
                                                        case 'SA':
                                                            return 'yellow.400'
                                                        case 'AS':
                                                            return 'blue.200'
                                                    }
                                                })()}
                                            >
                                                {card.region}
                                            </Badge>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack height='100px' padding='10px 0px'>
                                    <Text fontSize='12px' fontWeight={600}>NOTABLE EVENTS</Text>
                                    <Stack lineHeight='10px' fontSize='12px'>
                                        {card.events && (
                                            <>
                                                {
                                                    card.events.map((events, index) => (
                                                        <Text key={index}>{events.title}</Text>
                                                    ))
                                                }
                                            </>
                                        )}
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <Text
                                        color='#505050'
                                        fontWeight={600}
                                        fontSize='12px'
                                    >
                                        TAGS
                                    </Text>
                                    <HStack
                                        noOfLines={1}
                                    >
                                        {card.tags.map((entry, index) => (
                                            <Badge key={index} fontSize='10px'>{entry}</Badge>
                                        ))}
                                    </HStack>
                                </Stack>
                                <HStack fontWeight={700}>
                                    <Icon as={BiDollarCircle} color='#7BBB9C' />
                                    <Text>${card.salary.amount}/{
                                        (() => {
                                            switch (card.salary.compensationType) {
                                                case 'hourly':
                                                    return 'hr'
                                                case 'salary':
                                                    return 'yr'
                                                case 'milestone':
                                                    return 'mi'
                                                default:
                                                    'return hr'
                                            }
                                        })()
                                    }</Text>
                                </HStack>
                            </Stack>
                        </Link>
                    </GridItem>

                )))}
            </Grid>
            {cardValsLength > 0 && (
                <Paginator totalItems={userLength} itemsPerPage={8} />
            )}
        </Stack>
    )
}

