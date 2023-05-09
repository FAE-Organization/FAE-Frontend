import {
  Container,
  Box,
  SimpleGrid,
  AspectRatio,
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
} from '@chakra-ui/react';
import {
  IoSearchSharp,
  IoReceiptSharp,
  IoPeopleSharp,
  IoConstructSharp,
} from 'react-icons/io5';
import React from 'react';

// Render each Feature component within the Our Process section.
const Feature = ({ text, expandText, icon, iconBg }) => {

  return (
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
            <Box as="span" flex={1} textAlign='left' fontWeight={600}>
              {text}
            </Box>
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
  );
};

// Render 'Our Process' section of About page
export default function ProcessSection() {
  return (
    <Flex py={12} justifyContent={'center'}>
      <Flex direction={'column'}>
        <Heading>Our Process</Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
          Over the course of about 3 months, our team built this project from the group up.
          See our primary steps below, and check out our demo video to learn more.
        </Text>
        <Flex direction={'column'}
          spacing={4}
          divider={<StackDivider borderColor={'gray.300'} />}>
          <Feature
            icon={<Icon as={IoSearchSharp} color={'orange.500'} w={5} h={5} />}
            iconBg={'orange.100'}
            text={'Research & Market Analysis'}
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
        </Flex>
      </Flex>
      <Box
        position={'relative'}
        height={'300px'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        width={'full'}
        overflow={'hidden'}>
        <iframe
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/x-042Qq00qc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </Box>
    </Flex>
  );
}