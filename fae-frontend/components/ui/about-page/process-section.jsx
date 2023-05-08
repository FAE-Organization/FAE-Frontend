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
  } from '@chakra-ui/react';
  import {
    IoSearchSharp,
    IoReceiptSharp,
    IoPeopleSharp,
    IoConstructSharp,
    IoChevronDownSharp,
  } from 'react-icons/io5';
  // import { ReactElement } from 'react';
  
  // interface FeatureProps {
  //   text: string;
  //   iconBg: string;
  //   icon?: ReactElement;
    
  // }
  // { text, icon, iconBg }: FeatureProps
  const Feature = () => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
// Render 'Our Process' section of About page
// TODO: 
//        - Convert feature image into youtube video of project demo
//        - Add 'expand' button to each Feature that creates dropdown text display
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
              divider={
                <StackDivider
                  borderColor={'gray.100'}
                />
              }>
              <Feature
                icon={<Icon as={IoSearchSharp} color={'yellow.500'} w={5} h={5} />}
                iconBg={'yellow.100'}
                text={'Market Analysis & Initial Research'}
                // TODO: Add 'expand' button to each Feature that creates dropdown text display
                // icon={<Icon as={IoChevronDownSharp} color={''} w={5} h={5}

              />
              <Feature
                icon={<Icon as={IoReceiptSharp} color={'green.500'} w={5} h={5} />}
                iconBg={'green.100'}
                text={'Wireframing & Prototyping'}
                // TODO: Add 'expand' button to each Feature that creates dropdown text display
                // icon={<Icon as={IoChevronDownSharp} color={''} w={5} h={5}
              />
              <Feature
                icon={<Icon as={IoPeopleSharp} color={'blue.500'} w={5} h={5} />}
                iconBg={'blue.100'}
                text={'Usability Testing'}
                // TODO: Add 'expand' button to each Feature that creates dropdown text display
                // icon={<Icon as={IoChevronDownSharp} color={''} w={5} h={5}
              />
              <Feature
                icon={<Icon as={IoConstructSharp} color={'purple.500'} w={5} h={5} />}
                iconBg={'purple.100'}
                text={'Development & Implementation'}
                // TODO: Add 'expand' button to each Feature that creates dropdown text display
                // icon={<Icon as={IoChevronDownSharp} color={''} w={5} h={5}
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