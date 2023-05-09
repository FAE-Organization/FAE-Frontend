import { Box, Heading, Text, } from '@chakra-ui/react';

export default function PurposeSection() {
    return (
        <Box pt={10} position="relative">
            <Box
                textAlign="center"
                maxWidth="1000px"
                mx="auto"
                p="6">
                <Heading as="h2" size="xl" mb="4">
                    Our Mission
                </Heading>
                <Text fontSize="lg">
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
        </Box>
    );
};