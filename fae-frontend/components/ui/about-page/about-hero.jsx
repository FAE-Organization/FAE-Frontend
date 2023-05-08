import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  // Render header text & background img for About page
  //    TODO: override margin styling so banner image extends across screens.
  export default function AboutHeader() {
    return (
      <Flex
        w={'full'}
        h={'30vh'}
        backgroundImage={
          '/homepage-imgs/home-stock-photo.png'
        }
        backgroundSize={'cover'}
        background-repeat='no-repeat'
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              About FAE
            </Text>
          </Stack>
        </VStack>
      </Flex>
    );
  }