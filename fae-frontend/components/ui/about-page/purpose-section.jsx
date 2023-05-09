import {
    Text,
    Heading,
    Box,
    Flex,
} from '@chakra-ui/react'


// Content for Mission and Values section
export default function PurposeSection() {
    return (
        <Box align={'center'} pt={'20px'} px={''}>
            <Flex direction={'column'} gap={4}>
                <Heading as={'h2'}>
                    Why We Matter
                </Heading>
                <Box>
                    <Text size={{base: 'sm', md: 'lg', xl: '2xl'}}>
                        FAE was created to help minimize the challenges that freelancers face in the
                        oversaturated and competitive esports industry. As this area is continuously
                        growing and gaining exposure, the need for freelancers increases. However,
                        our research insights reveal that most esports freelancers are not properly
                        compensated for their work, only utilize social media such as Twitter to market
                        themselves, and have to rely on an existing network in order to become aware of
                        work opportunities. Thus, FAE seeks to assist esports freelancers by increasing
                        their visibility and marketability by providing them with a dedicated platform
                        to showcase their work.
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};