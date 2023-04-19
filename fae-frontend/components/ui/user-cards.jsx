import { Stack, Grid, GridItem, Image, HStack, Text, Badge, Icon } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { BiDollarCircle } from 'react-icons/bi'

export default function UserCards({ cards }) {
    const [cardVals, setCardVals] = useState(cards); // Initial state is set to the prop value

    // Use useEffect to update the cards whenever the tempCards prop changes
    useEffect(() => {
        setCardVals(cards);
    }, [cardVals]);

    return (
        <Stack width='100%'>
            <Grid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                gap='20px'
            >
                {cardVals.map(card => (
                    <GridItem key={card.id} height='515px' boxShadow='1px 1px 15px #888'>
                        <Stack>
                            {/* Image field will be added to the cards as well */}
                            <Image
                                src='https://besthqwallpapers.com/Uploads/21-12-2019/116771/thumb-purple-neon-lights-black-background-purple-neon-light-neon-background.jpg'
                                alt={`Profile image for ${card.username}`}
                                borderTopLeftRadius='5px'
                                borderTopRightRadius='5px'
                            />
                        </Stack>
                        <Stack padding='10px'>
                            <HStack alignItems='center'>
                                <Text fontSize='22px' fontWeight={600}>{card.username}</Text>
                                <Text fontSize='12px' color='#8F8F8F'>{`(${card.pronouns.join('/')})`}</Text>
                            </HStack>
                            <Stack height='130px' justifyContent='space-between'>
                                <Stack>
                                    <Text>Roles</Text>
                                    <HStack flexWrap='wrap' gap='10px' spacing={0} justifyContent='flex-start'>
                                        {card.roles.map((entry, index) => (
                                            <Badge
                                                key={index}
                                                fontSize='10px'
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
                            <Stack height='75px' padding='10px 0px'>
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
                                    flexWrap='wrap'
                                    gap='10px'
                                    spacing={0}
                                >
                                    {card.tags.map((entry, index) => (
                                        <Badge key={index} fontSize='10px'>{entry}</Badge>
                                    ))}
                                </HStack>
                            </Stack>
                            <HStack fontWeight={700}>
                                <Icon as={BiDollarCircle} color='#7BBB9C' />
                                <Text>{card.compensation.amount}/{card.compensation.type}</Text>
                            </HStack>
                        </Stack>
                    </GridItem>
                ))}
            </Grid>
        </Stack>
    )
}