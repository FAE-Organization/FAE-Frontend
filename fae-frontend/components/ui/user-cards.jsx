import { Stack, Grid, GridItem, Image, HStack, Text, Badge, Icon } from "@chakra-ui/react"
import Link from "next/link";
import { BiDollarCircle } from 'react-icons/bi'

export default function UserCards({ cardVals }) {

    return (
        <Stack width='100%'>
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
                {cardVals && (Array.from(cardVals).map(card => (
                    <GridItem
                        key={card.id}
                        height='560px'
                        width={{ base: '75%', sm: '100%' }}
                        boxShadow='1px 1px 15px #888'
                        _hover={{
                            transition: "transform 0.2s ease-in-out, filter 0.2s ease-in-out",
                            transform: 'scale(1.03)'
                        }}
                        borderRadius='5px'
                    >
                        {/* <Link href={`/user/${card.id}`}> */}
                        <Link href={`/user/profile?id='${card.id}'`}>
                            <Stack>
                                <Image
                                    src={card.profilePic}
                                    alt={`Profile image for ${card.name}`}
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
                                // Maybe do this instead: JoannaC... (they/them) 
                                >
                                    <Text fontSize='20px' fontWeight={600}>{card.name}</Text>
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
                                        {card.events.map((events, index) => (
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
                                        noOfLines={1}
                                    >
                                        {card.tags.map((entry, index) => (
                                            <Badge key={index} fontSize='10px'>{entry}</Badge>
                                        ))}
                                    </HStack>
                                </Stack>
                                <HStack fontWeight={700}>
                                    <Icon as={BiDollarCircle} color='#7BBB9C' />
                                    {/* <Text>${card.compensation.amount}/{card.compensation.type}</Text> */}
                                    <Text>${card.salary}/hr</Text>
                                </HStack>
                            </Stack>
                        </Link>
                    </GridItem>

                )))}
            </Grid>
        </Stack>
    )
}

