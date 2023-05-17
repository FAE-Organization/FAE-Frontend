import {
  Link,
  Button,
  Box,
  Flex,
  VStack,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaSearch } from 'react-icons/fa'
import {
  IoBrush,
  IoPeople,
  IoHammer,
  IoChevronForward
} from 'react-icons/io5';

// Renders 'Our Process' section of about page
export default function ProcessSection() {
  return (
    <Flex justify={'center'} align={'center'}>
      <Box px={8} py={16}>
        <Box px={'8vh'}>
          <Heading as="h2" fontSize="4xl" mb={4}>
            Our Process
          </Heading>
          <Text fontSize="xl" mb={8}>
            Over the course of about 3 months, our team built this project from the ground up. See our primary steps below, and check out our demo video to learn more.
          </Text>
        </Box>
        <Flex direction={{ base: "column", md: "row" }} justifyContent={"space-between"}>
          <VStack flex={1} align="stretch" justify={'center'}>
            < AccordionSection />
          </VStack>
          <Flex flex={1} ml={{ base: 0, md: 8 }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/x-042Qq00qc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

// Renders accordion section 
const AccordionSection = () => {
  return (
    <Accordion
      allowToggle
      pt={{ base: '10px', sm: '1rem' }}
      pb={{ base: '2rem', sm: '3rem' }}>
      {accordionItems.map(item => (
        <AccordionItem key={item.id}>
          <AccordionButton _hover={{}}>
            <Flex
              w={10}
              h={10}
              color='white'
              fontSize={'2xl'}
              align="center"
              justify="center"
              rounded="full"
              bg={item.iconBg}
              mr={4}>
              {<item.icon />}
            </Flex>
            <Box flex="1" textAlign="left" px={2} py={3} fontSize={{ base: 'lg', lg: 'xl' }}>
              {item.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} px={20}>
            <Text>{item.content}</Text>
            <Link href={item.link} isExternal>
              <Button
                bg={item.iconBg}
                color='white'
                mt={4}
                rightIcon={<IoChevronForward />}>
                {item.route}
              </Button>
            </Link>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

// Data for accordion items
const accordionItems = [
  {
    id: 1,
    icon: FaSearch,
    iconBg: 'pink.500',
    title: 'Research & Market Analysis',
    content: 'Market research, competitive analysis, literature reviews, and user interviews were conducted to understand our problem space.',
    link: 'https://www.google.com/',
    route: 'View our Miro board',
  },
  {
    id: 2,
    icon: IoBrush,
    iconBg: 'yellow.500',
    title: 'Wireframing & Prototyping',
    content: 'Brainstormed and designed FAE’s interface on Figma.',
    link: 'https://www.google.com/',
    route: 'View our Figma design',
  },
  {
    id: 3,
    icon: IoPeople,
    iconBg: 'purple.500',
    title: 'Usability Testing',
    content: 'Conducted numerous rounds with stakeholders to test functionality and appearance.',
    link: 'https://www.google.com/',
    route: 'View our Miro board',
  },
  {
    id: 4,
    icon: IoHammer,
    iconBg: 'blue.500',
    title: 'Development & Implementation',
    content: 'Front-end and back-end development to bring FAE to life!',
    link: 'https://www.google.com/',
    route: 'View our Github repo',
  },
];