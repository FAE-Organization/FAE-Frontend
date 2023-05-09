import {
    Heading,
    Box,
} from '@chakra-ui/react'
import AboutHeader from '@/components/ui/about-page/about-header';
import MemberCards from '@/components/ui/about-page/member-cards.jsx';
import PurposeSection from '@/components/ui/about-page/purpose-section';
import ProcessSection from '@/components/ui/about-page/process-section';

let test_data = [
    {
        name: 'Claudine Dulay',
        tags: ['Product Manager', 'UX/UI Designer'],
        email: 'hemmessy@gmail.com',
        image: '/about-test-imgs/claudine-dulay.jpeg',
        alt: 'Claudine Dulay',
    },
    {
        name: 'Leslie Yan',
        tags: ['UX/UI Designer', 'Researcher'],
        email: 'leslieyyan19@gmail.com',
        image: '/about-test-imgs/leslie-yan.jpeg',
        alt: 'Leslie Yan',
    },
    {
        name: 'Elora Hoberecht',
        tags: ['Frontend Developer'],
        email: 'hoberecht.elora@gmail.com',
        image: '/about-test-imgs/elorahob.jpeg',
        alt: 'Elora Hoberecht',
    },
    {
        name: 'Patrick Liu',
        tags: ['Frontend Developer'],
        email: 'patrickliu022@gmail.com',
        image: '/about-test-imgs/patrick-liu.jpeg',
        alt: 'Patrick Liu',
    },
    {
        name: 'David Ngo',
        tags: ['Backend Developer'],
        email: 'ngodavid215@gmail.com',
        image: '/about-test-imgs/david-ngo.jpeg',
        alt: 'David Ngo',
    }
];

// Renders entire About page, using helper functions defined below
export default function About() {
    return (
        <Box>
            <Box>
                <AboutHeader />
                <PurposeSection />
                <ProcessSection />
            </Box>
            <Box align={'center'}>
                <Heading as={'h1'}>
                    Meet Our Team
                </Heading>
                <MemberCards members={test_data} />
            </Box>
        </Box>
    )
};