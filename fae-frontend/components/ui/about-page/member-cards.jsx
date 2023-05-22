import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
} from '@chakra-ui/react';
import UserTags from '../profile/UserBanner/user-tags';

// Render array of member cards
export default function MemberCards(props) {
    return (
        <Flex wrap={'wrap'} justify='center'>
            {props.members.map((memberObj, i) => {
                return (
                    <MemberCard key={i} {...memberObj} />
                )
            })}
        </Flex>
    )
}

// Render individual member cards
function MemberCard(props) {
    const { name, tags, email, image, alt } = props;

    return (
        <Center py={6} px={3}>
            <Box
                w={'xs'}
                rounded={'2xl'}
                my={2}
                mx={[0, 3]}
                overflow={'hidden'}
                bg='white'
                border={'1px'}
                borderColor='black'
                boxShadow={'6px 6px 0 #553C9A'}>
                <Box h={{base: '250px', md: '300px'}} borderBottom={'1px'} borderColor='black'>
                    <Img
                        src={image}
                        roundedTop={'xl'}
                        objectFit="cover"
                        h='full'
                        w='full'
                        alt={alt}
                    />
                </Box>
                <Box p={4}>
                    <Flex align={'center'} justify={'center'}>
                    <UserTags tags={tags} />
                    </Flex>
                    <Heading color={'black'} fontSize={'2xl'} noOfLines={1} pt={3}>
                        {name}
                    </Heading>
                    <Text color={'gray.500'} noOfLines={1}>
                        {email}
                    </Text>
                </Box>
            </Box>
        </Center>
    );
}