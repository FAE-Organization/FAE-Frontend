import {
    Stack,
    Text,
    Image,
    Flex,
    Heading,
    Box,
} from '@chakra-ui/react'

// Data to be displayed in InfoContent boxes within InfoSection of homepage
const HOME_ITEMS = [
    {
        headingText: 'Search for the perfect freelancer',
        content: 'FAE acts as a resource to help esports individuals, teams, organizations, and companies find the perfect freelancer for their needs.',
        imgSRC: './homepage-imgs/build.png',
    },
    {
        headingText: 'Build your esports portfolio',
        content: 'FAE helps esports freelancers market themselves in the industry by allowing them to create their own in-app profile and portfolio.',
        imgSRC: './homepage-imgs/test.png',
    },
    {
        headingText: 'Learn about the esports industry',
        content: 'FAE bridges the gap between esports newcomers and veterans by providing resources to help them understand the sectors that make up the industry.',
        imgSRC: './homepage-imgs/feet-pics.png',
    }
];

// Styling for info section of homepage
export function InfoSection() {
    return (
        <Stack align={'center'} pt={{ base: '4em', md: '20px' }}>
            <Heading
                justify={'center'}
                pb={'80px'}
                fontSize={{ base: '30px', lg: '40px' }}>
                <Text as={'b'}>
                    The #1 hub for esports freelancers
                </Text>
            </Heading>
            <InfoContent />
        </Stack>
    )
}

// Styling for each content box within the info section
const InfoContent = () => {
    return (
        <Stack spacing={100} >
            {HOME_ITEMS.map((homeItem, i) => {
                const infoPadding = {};

                if (i % 2 == 0) {
                    // when even
                    infoPadding.pr = '60px'
                } else {
                    // when odd
                    infoPadding.pl = '50px'
                } 

                return (
                    <Flex 
                        key={i} 
                        direction={{ base: 'column', lg: (i % 2 == 0) ? 'row' : 'row-reverse' }} 
                        gap={{ base: '80px', md: '60px', lg: '40px' }}>
                        <Flex>
                            <Image src={homeItem.imgSRC} __css={infoPadding} maxWidth={'450px'} />
                        </Flex>
                        <Flex direction={'column'} justify={'center'}>
                            <Box fontSize={{ base: '20px' }}>
                                <Text as={'b'} casing={'uppercase'} pb={1}>
                                    {homeItem.headingText}
                                </Text>
                                <Text maxW={'500px'}>
                                    {homeItem.content}
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                )
            })}
        </Stack>
    );
};
