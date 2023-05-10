import {
  Flex,
  Heading,
  Box,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

// Render header text & background img for About page
export default function AboutHeader() {
  return (
    <Box
      display={'flex'}
      w={'full'}
      h={'40vh'}
      backgroundImage={'/homepage-imgs/home-stock-photo.png'}
      backgroundSize={'cover'}
      background-repeat='no-repeat'
      backgroundPosition={'center center'}
      mt={'-0.5rem'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-t, blackAlpha.800, transparent)'}>
        <Flex maxW={'2xl'} align={'center'}>
          <Heading
            as={'h1'}
            fontWeight={'bold'}
            textAlign={'center'}
            color='white'
            lineHeight={1.2}
            fontSize={{ base: '6xl', md: '8xl' }}
          >
            About FAE
          </Heading>
        </Flex>
      </VStack>
    </Box>
  );
}