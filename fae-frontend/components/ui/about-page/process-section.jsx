// import {
//   Container,
//   Box,
//   SimpleGrid,
//   AspectRatio,
//   Flex,
//   Heading,
//   Text,
//   Stack,
//   StackDivider,
//   Icon,
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
// } from '@chakra-ui/react';
// import {
//   IoSearchSharp,
//   IoReceiptSharp,
//   IoPeopleSharp,
//   IoConstructSharp,
// } from 'react-icons/io5';
// import React from 'react';

// // Render each Feature component within the Our Process section.
// const Feature = ({ text, expandText, icon, iconBg }) => {

//   return (
//     <Accordion allowMultiple>
//       <AccordionItem border={0}>
//         <h2>
//           <AccordionButton _hover={{}}>
//             <Flex
//               w={8}
//               h={8}
//               align="center"
//               justify="center"
//               rounded="full"
//               bg={iconBg}
//               mr={4}>
//               {icon}
//             </Flex>
//             <Box as="span" flex={1} textAlign='left' fontWeight={600}>
//               {text}
//             </Box>
//             <Flex>
//               <AccordionIcon />
//             </Flex>
//           </AccordionButton>
//         </h2>
//         <AccordionPanel pb={4}>
//           {expandText}
//         </AccordionPanel>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// // Renders youtube demo video
// const DemoVideo = () => {
//   return(
//     <Box
//         position={'relative'}
//         rounded={'2xl'}
//         boxShadow={'2xl'}
//         width={'full'}
//         overflow={'hidden'}>
//            <AspectRatio ratio={16 / 9}>
//         <iframe
//           top="0"
//           left="0"
//           width="100%"
//           height="100%"
//           src="https://www.youtube.com/embed/x-042Qq00qc"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen>
//         </iframe>
//         </AspectRatio>
//       </Box>
//   );
// }

// // Render 'Our Process' section of About page
// export default function ProcessSection() {
//   return (
//     <Flex
//     direction={["column", "column", "row"]}
//     justify="space-between"
//     align="flex-start"
//     p={8}>

//     <Stack py={12} spacing={6}>
//         <Heading textAlign={'center'}>Our Process</Heading>
//         <Text color={'gray.500'} fontSize={'lg'} textAlign={'center'}>
//           Over the course of about 3 months, our team built this project from the group up.
//           See our primary steps below, and check out our demo video to learn more.
//         </Text>
//         <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
//           <Feature
//             icon={<Icon as={IoSearchSharp} color={'orange.500'} w={5} h={5} />}
//             iconBg={'orange.100'}
//             text={'Research & Market Analysis'}
//             expandText={'Market research, competitive analysis, literature reviews, and user interviews were conducted to understand our problem space.'}

//           />
//           <Feature
//             icon={<Icon as={IoReceiptSharp} color={'green.500'} w={5} h={5} />}
//             iconBg={'green.100'}
//             text={'Wireframing & Prototyping'}
//             expandText={'Brainstormed and designed FAE\’s interface on Figma.'}
//           />
//           <Feature
//             icon={<Icon as={IoPeopleSharp} color={'blue.500'} w={5} h={5} />}
//             iconBg={'blue.100'}
//             text={'Usability Testing'}
//             expandText={'Conducted numerous rounds with stakeholders to test functionality and appearance.'}
//           />
//           <Feature
//             icon={<Icon as={IoConstructSharp} color={'purple.500'} w={5} h={5} />}
//             iconBg={'purple.100'}
//             text={'Development & Implementation'}
//             expandText={'Front-end and back-end development to bring FAE to life.'}
//           />
//         </SimpleGrid>
//       <DemoVideo />
//     </Stack>
//   </Flex>
//   );
// }

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
import { IoSearchSharp } from 'react-icons/io5';

export default function ProcessSection() {
  return (
    <Flex justify={'center'} align={'center'}>
      <Box px={8} py={16}>
        <Heading as="h2" fontSize="4xl" mb={4}>
          Our Process
        </Heading>
        <Text fontSize="xl" mb={8}>
          Over the course of about 3 months, our team built this project from the group up. See our primary steps below, and check out our demo video to learn more.
        </Text>
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
      pt={{base: '10px', sm: '1rem'}}
      pb={{base: '2rem', sm: '3rem'}}>
      {accordionItems.map(item => (
        <AccordionItem key={item.id}>
          <AccordionButton _hover={{}}>
            <Flex
              w={10}
              h={10}
              align="center"
              justify="center"
              rounded="full"
              bg={item.iconBg}
              mr={4}>
              {item.icon}
            </Flex>
            <Box flex="1" textAlign="left" px={2} py={3} fontSize={{base: 'lg', lg:'xl'}}>
              {item.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} px={20}>
            <Text>{item.content}</Text>
            <Link href={item.link} isExternal>
              <Button bg={item.iconBg} color='white' mt={4}>
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
    icon: IoSearchSharp,
    iconBg: 'pink.500',
    iconColor: 'white',
    title: 'Research & Market Analysis',
    content: 'Market research, competitive analysis, literature reviews, and user interviews were conducted to understand our problem space.',
    link: 'https://www.google.com/',
    route: 'View our Miro board',
  },
  {
    id: 2,
    icon: IoSearchSharp,
    iconBg: 'yellow.500',
    iconColor: 'white',
    title: 'Wireframing & Prototyping',
    content: 'Brainstormed and designed FAE’s interface on Figma.',
    link: 'https://www.google.com/',
    route: 'View our Figma design',
  },
  {
    id: 3,
    icon: IoSearchSharp,
    iconBg: 'purple.500',
    iconColor: 'white',
    title: 'Usability Testing',
    content: 'Conducted numerous rounds with stakeholders to test functionality and appearance.',
    link: 'https://www.google.com/',
    route: 'View our Miro board',
  },
  {
    id: 4,
    icon: IoSearchSharp,
    iconBg: 'blue.500',
    iconColor: 'white',
    title: 'Development & Implementation',
    content: 'Front-end and back-end development to bring FAE to life!',
    link: 'https://www.google.com/',
    route: 'View our Github repo',
  },
];