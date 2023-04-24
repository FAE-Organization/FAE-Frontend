import { Stack, Grid, GridItem, Image, HStack, Text, Badge, Icon } from "@chakra-ui/react"
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiDollarCircle } from 'react-icons/bi'

export default function UserCards({ cards }) {
    const [cardVals, setCardVals] = useState(cards); // Initial state is set to the prop value

    // Use useEffect to update the cards whenever the tempCards prop changes
    // Maybe useReducer instead of useEffect if cards change often and management
    // becomes more complex.
    useEffect(() => {
        setCardVals(cards);
    }, [cards]);

    return (
        <Stack width='100%'>
            <Grid
                templateColumns={{
                    base: '1fr',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                    xl: 'repeat(4, 1fr)'
                }}
                gap='20px'
            >
                {cardVals.map(card => (
                    <GridItem
                        key={card.id}
                        height='550px'
                        boxShadow='1px 1px 15px #888'
                        _hover={{
                            transition: "transform 0.2s ease-in-out, filter 0.2s ease-in-out",
                            transform: 'scale(1.03)'
                        }}
                    >
                        <Link href={`/user/${card.id}`}>
                            <Stack
                            // overflow='clip' Cool little animation thing, maybe a nice-to-have later on
                            >
                                {/* Image field will be added to the cards as well */}
                                <Image
                                    src='https://besthqwallpapers.com/Uploads/21-12-2019/116771/thumb-purple-neon-lights-black-background-purple-neon-light-neon-background.jpg'
                                    alt={`Profile image for ${card.username}`}
                                    borderTopLeftRadius='5px'
                                    borderTopRightRadius='5px'
                                    height='150px'
                                    objectFit='cover'
                                // _hover={{
                                //     transition: "transform 0.3s ease-in-out, filter 0.2s ease-in-out",
                                //     transform: 'scale(2)'
                                // }}
                                />
                            </Stack>
                            <Stack padding='0px 10px'>
                                <HStack alignItems='center'>
                                    <Text fontSize='22px' fontWeight={600}>{card.username}</Text>
                                    <Text fontSize='12px' color='#8F8F8F'>{`(${card.pronouns.join('/')})`}</Text>
                                </HStack>
                                <Stack height='150px' justifyContent='space-between'>
                                    <Stack>
                                        <Text>Roles</Text>
                                        <HStack flexWrap='wrap' justifyContent='flex-start' noOfLines={2}> {/********************** */}
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
                                        {card.notableEvents.map((events, index) => (
                                            <Text key={index}>{events}</Text>
                                        ))}
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
                                        // flexWrap='wrap'
                                        noOfLines={1} // ********************************************************************************
                                    >
                                        {card.tags.map((entry, index) => (
                                            <Badge key={index} fontSize='10px'>{entry}</Badge>
                                        ))}
                                    </HStack>
                                </Stack>
                                <HStack fontWeight={700}>
                                    <Icon as={BiDollarCircle} color='#7BBB9C' />
                                    <Text>${card.compensation.amount}/{card.compensation.type}</Text>
                                </HStack>
                            </Stack>
                        </Link>
                    </GridItem>
                ))}
            </Grid>
        </Stack>
    )
}