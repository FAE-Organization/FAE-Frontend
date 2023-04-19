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
            <Grid templateColumns='repeat(4, 1fr)' gap='20px'>
                {cardVals.map(card => (
                    <GridItem key={card.id} height='600px' boxShadow='1px 1px 15px #888'>
                        <Stack>
                            {/* Image field will be added to the cards as well */}
                            <Image
                                src='https://besthqwallpapers.com/Uploads/21-12-2019/116771/thumb-purple-neon-lights-black-background-purple-neon-light-neon-background.jpg'
                                alt={`Profile image for ${card.username}`}
                            />
                        </Stack>
                        <Stack padding='10px'>
                            <HStack>
                                <Text>{card.username}</Text>
                                <Text>{`(${card.pronouns.join('/')})`}</Text>
                            </HStack>
                            <Stack height='150px' justifyContent='space-between'>
                                <Stack>
                                    <Text>Roles</Text>
                                    <HStack flexWrap='wrap' gap='8px' justifyContent='flex-start'>
                                        {card.roles.map((entry, index) => (
                                            <Badge key={index} marginLeft='8px' fontSize='10px'>{entry}</Badge>
                                        ))}
                                    </HStack>
                                </Stack>
                                <Stack>
                                    <Text>Region</Text>
                                    <Stack pl='8px'>
                                        <Badge width='fit-content'>{card.region}</Badge>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack height='125px'>
                                <Text>Notable Events</Text>
                                <Stack>
                                    {card.notableEvents.map((events, index) => (
                                        <Text key={index}>{events}</Text>
                                    ))}
                                </Stack>
                            </Stack>
                            <Stack>
                                <Text>Tags</Text>
                                <HStack flexWrap='wrap' gap='8px'>
                                    {card.tags.map((entry, index) => (
                                        <Badge key={index} mx='8px'>{entry}</Badge>
                                    ))}
                                </HStack>
                            </Stack>
                            <HStack>
                                <Icon as={BiDollarCircle} color='#7BBB9C' />
                                <Text>{card.compensation.amount}/{card.compensation.type}.</Text>
                            </HStack>
                        </Stack>
                    </GridItem>
                ))}
            </Grid>
        </Stack>
    )
}