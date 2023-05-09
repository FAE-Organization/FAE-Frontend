import {
    Text,
    Heading,
    Box,
} from '@chakra-ui/react'
import AboutHeader from '@/components/ui/about-page/about-header';
import MemberCards from '@/components/ui/about-page/member-cards.jsx'
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
                {/* <Stakeholders /> */}
                <ProcessSection />
                <MissionValues />
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

// Stakeholder stuff
// function Stakeholders() {
//     return (
//         <Box align={'center'}>
//             <Box>
//                 <Heading as={'h2'}>
//                     Stakeholders
//                 </Heading>
//                 <ul>
//                     <li> Freelancers in the esports industry looking for work </li>
//                     <li> Esports programs, companies, and organizations seeking talent for work </li>
//                 </ul>
//             </Box>
//         </Box>
//     );
// };

// Content for Mission and Values section
function MissionValues() {
    return (
        <Box align={'center'}>
            <Box>
                <Heading as={'h2'}>
                    Benefits of FAE
                </Heading>
                <Text>
                FAE was created to help minimize the challenges that freelancers face in the oversaturated and competitive esports industry. As this area is continuously growing and gaining exposure, the need for freelancers increases. However, our research insights reveal that most esports freelancers are not properly compensated for their work, only utilize social media such as Twitter to market themselves, and have to rely on an existing network in order to become aware of work opportunities. Thus, FAE seeks to assist esports freelancers by increasing their visibility and marketability by providing them with a dedicated platform to showcase their work.
                </Text>
            </Box>
        </Box>
    );
};