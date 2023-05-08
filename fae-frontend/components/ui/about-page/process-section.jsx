import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Spacer,
} from '@chakra-ui/react';
import {
  IoSearchSharp,
  IoReceiptSharp,
  IoPeopleSharp,
  IoConstructSharp,
  IoChevronDownSharp,
} from 'react-icons/io5';
import React, { useState } from 'react';

// Render each Feature component within the Our Process section.
const Feature = ({ text, expandText, icon, iconBg }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    // <Stack direction="row" align="center" justify="space-between">
      <Accordion allowMultiple>
        <AccordionItem border={0}>
          <h2>
            <AccordionButton _hover={{}}>
              <Flex
                w={8}
                h={8}
                align="center"
                justify="center"
                rounded="full"
                bg={iconBg}
                mr={4}>
                {icon}
              </Flex>
              <Flex as="span" flex={1} textAlign='left' fontWeight={600}>
                {text}
              </Flex>
              <Flex>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {expandText}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    // </Stack>
  );
};

// Render 'Our Process' section of About page
export default function ProcessSection() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Our Process</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Over the course of about 3 months, our team built this project from the group up.
            See our primary steps below, and check out our demo video to learn more.
          </Text>
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={'gray.300'} />}>
            <Feature
              icon={<Icon as={IoSearchSharp} color={'orange.500'} w={5} h={5} />}
              iconBg={'orange.100'}
              text={'Market Analysis & Initial Research'}
              expandText={'Market research, competitive analysis, literature reviews, and user interviews were conducted to understand our problem space'}

            />
            <Feature
              icon={<Icon as={IoReceiptSharp} color={'green.500'} w={5} h={5} />}
              iconBg={'green.100'}
              text={'Wireframing & Prototyping'}
              expandText={'Brainstormed and designed FAE\’s interface on Figma'}
            />
            <Feature
              icon={<Icon as={IoPeopleSharp} color={'blue.500'} w={5} h={5} />}
              iconBg={'blue.100'}
              text={'Usability Testing'}
              expandText={'Conducted numerous rounds with stakeholders to test functionality and appearance'}
            />
            <Feature
              icon={<Icon as={IoConstructSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={'purple.100'}
              text={'Development & Implementation'}
              expandText={'Front-end and back-end development to bring FAE to life'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            // TODO: convert feature image into youtube video of project demo
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}