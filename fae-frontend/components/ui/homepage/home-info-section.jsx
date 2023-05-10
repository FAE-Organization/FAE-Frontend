import {
    Stack,
    Text,
    Image,
    Flex,
    Heading,
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
                fontSize={{ base: '28px', md: '35px', lg: '40px' }}
                align={'center'}>
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
        <Flex direction={'column'} gap={100}>
            {HOME_ITEMS.map((homeItem, i) => {
                const infoPadding = {};

                if (i % 2 == 0) {
                    // when even
                    infoPadding.pr = {base: 0, md: '40px'}
                } else {
                    // when odd
                    infoPadding.pl = {base: 0, sm: '40px'}
                } 

                return (
                    <Flex 
                        key={i} 
                        direction={{ base: 'column', lg: (i % 2 == 0) ? 'row' : 'row-reverse' }} 
                        justifyContent={'space-between'}
                        gap={{base: 8, md: 20}}>
                        <Flex align={{base: 'center', sm: 'left'}}>
                            <Image src={homeItem.imgSRC} __css={infoPadding} w={{base: '70vh', lg: '60vh'}} minW={'300px'} />
                        </Flex>
                        <Flex direction={'column'} justify={'center'} >
                            <Flex direction={'column'} fontSize={{ base: '20px' }}>
                                <Text as={'b'} casing={'uppercase'} pb={1} fontSize={'2.7vh'}>
                                    {homeItem.headingText}
                                </Text>
                                <Text maxW={'500px'}>
                                    {homeItem.content}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                )
            })}
        </Flex>
    );
};
