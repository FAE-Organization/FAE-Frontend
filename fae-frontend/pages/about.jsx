import {
    Stack,
    Text,
    Button,
    Image,
    Flex,
    Container,
    Heading,
    Box,
    Center
} from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
import MemberCards from '@/components/ui/about-page/member-cards.jsx'
import { Inter } from '@next/font/google'


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
        image: '/about-test-imgs/elora-hoberecht.jpeg',
        alt: 'Elora Hoberecht',
    },
    {
        name: 'Patrick Liu',
        tags: ['Frontend Developer'],
        email: 'patrick@PleaseGiveMeUrEmail.com',
        image: '/about-test-imgs/patrick-liu.jpeg',
        alt: 'Patrick',
    },
    {
        name: 'David Ngo',
        tags: ['Backend Developer'],
        email: 'david@PleaseGiveMeUrEmail.com',
        image: '/about-test-imgs/david-ngo.jpeg',
        alt: 'David',
    }
];

// Renders entire About page, using helper functions defined below
export default function About() {
    return (
        <Box className={styles.main}>
            <Box>
                <AboutUsMain />
                <Stakeholders />
                <StepsTaken />
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

// Main header section of About page
function AboutUsMain() {
    return (
        <Box align={'center'}>
            <Heading as={'h1'}>
                About Us
            </Heading>
            <Text>
                FAE (short for “For Anything Esports”) is an all-in-one hub to help anyone understand the different facets that make up the esports industry and most importantly, 
                <Text as={'b'}>
                    provide freelancers in esports a place to spotlight themselves and showcase their talent.  
                </Text>
                FAE’s main features include an esports industry directory, a search function to find freelancers, and an in-app editable portfolio.
            </Text>
        </Box>
    );
};

// Stakeholder stuff
function Stakeholders() {
    return (
        <Box align={'center'}>
            <Box>
                <Heading as={'h2'}>
                    Stakeholders
                </Heading>
                <ul>
                    <li> Freelancers in the esports industry looking for work </li>
                    <li> Esports programs, companies, and organizations seeking talent for work </li>
                </ul>
            </Box>
        </Box>
    );
};

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

function StepsTaken() {
    return (
        <Box align={'center'}>
            <Heading> Steps Taken </Heading>
            <Box align={'left'}>
                <ul>
                    <li> Initial Research: Market research, competitive analysis, literature reviews, and user interviews were conducted to understand our problem space </li>
                    <li> Wireframing & Prototyping: Brainstormed and designed FAE’s interface on Figma </li>
                    <li> User Testing: Conducted numerous rounds with stakeholders to test functionality and appearance </li>
                    <li> Developing: Front-end and back-end development to bring FAE to life </li>
                </ul>
            </Box>
        </Box>
    );
};