// // import { Image, Stack, Box, Text } from "@chakra-ui/react";
// // import { IconButton } from '@chakra-ui/react'
// // import { MdOutlineUpload } from "react-icons/md";

// // export default function ObserverReel({ index, editable }) {
// //     return (
// //         <Stack>
// //             <Box>
// //                 <Text
// //                     textTransform={'Uppercase'}
// //                     as='b'
// //                     fontSize={'20px'}
// //                     width={'auto'}
// //                     pr={3}>
// //                     Observer Reel
// //                 </Text>

// //                 {editable && (
// //                     <IconButton
// //                         fontSize={'2xl'}
// //                         variant={'unstyled'}
// //                         icon={<MdOutlineUpload />}
// //                         color={'purple.800'} />
// //                 )}
// //             </Box>

// //             <Image // This may be changed later
// //                 src={index === 1 ? 'profile-test-images/reelMockImage.png' : 'profile-test-images/reelMockImage3.png'}
// //             />
// //         </ Stack>
// //     )
// // }

// import { useState } from 'react';
// import {
//     GridItem,
//     IconButton,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     PopoverArrow,
//     PopoverCloseButton,
//     PopoverHeader,
//     PopoverBody,
//     Input,
//     Flex,
//     Heading,
//     Button,
// } from '@chakra-ui/react';
// import { MdOutlineUpload } from 'react-icons/md';
// import YouTube from 'react-youtube';

// export default function ObserverReel({ headerText, editable }) {
//     const [isOpen, setIsOpen] = useState(false);
//     const [videoUrl, setVideoUrl] = useState('');
//     const [videoId, setVideoId] = useState('');

//     function handleButtonClick() {
//         setIsOpen(!isOpen);
//     };

//     const handleVideoUrlChange = (event) => {
//         setVideoUrl(event.target.value);
//     };

//     const handleUploadVideo = () => {
//         // Extract video ID from the YouTube URL
//         const videoIdMatch = videoUrl.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu.be\/)([\w-]+)/i);
//         const id = videoIdMatch && videoIdMatch[1];

//         if (id) {
//             setVideoId(id);
//             setIsOpen(false);
//         } else {
//             // Handle invalid YouTube URL error
//             console.log('Invalid YouTube URL');
//         }
//     };

//     return (
//         <GridItem colSpan={3}>
//             <Heading as='h2' size='md' mr={2} textTransform={'uppercase'}>
//                 Observer Reel
//             </Heading>
//             {videoId && (
//                 <YouTube videoId={videoId} opts={{ width: '100%', height: '300px' }} />
//             )}
//             <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} placement="right-start">
//                 <PopoverTrigger>
//                     <Flex align='center'>
//                         {editable && (
//                             <IconButton
//                                 icon={<MdOutlineUpload />}
//                                 aria-label='Upload Image'
//                                 variant='unstyled'
//                                 color={'purple.700'}
//                                 fontSize={'25px'}
//                                 onClick={handleButtonClick} />
//                         )}
//                     </Flex>
//                 </PopoverTrigger>
//                 <PopoverContent p="4">
//                     <PopoverArrow />
//                     <PopoverCloseButton />
//                     <PopoverHeader>Upload YouTube Video</PopoverHeader>
//                     <PopoverBody>
//                         <Input
//                             placeholder="YouTube video URL"
//                             value={videoUrl}
//                             onChange={handleVideoUrlChange}
//                             mb="4"
//                         />
//                         <Button onClick={handleUploadVideo}>Upload</Button>
//                     </PopoverBody>
//                 </PopoverContent>
//             </Popover>
//         </GridItem>
//     );
// };

import { useState } from 'react';
import {
  GridItem,
  Stack,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Input,
  Flex,
  Heading,
  Button,
} from '@chakra-ui/react';
import { MdOutlineUpload } from 'react-icons/md';
import YouTube from 'react-youtube';
import Subheader from './subheader';

export default function ObserverReel({ headerText, editable }) {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');

  function handleButtonClick() {
    setIsOpen(!isOpen);
  }

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleUploadVideo = () => {
    // Extract video ID from the YouTube URL
    const videoIdMatch = videoUrl.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu.be\/)([\w-]+)/i);
    const id = videoIdMatch && videoIdMatch[1];

    if (id) {
      setVideoId(id);
      setIsOpen(false);
    } else {
      // Handle invalid YouTube URL error
      console.log('Invalid YouTube URL');
    }
  };

  return (
    <Stack>
      <Flex align="center">
        <Subheader category='Observer Reel' />
        {editable && (
          <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} placement="right-start">
            <PopoverTrigger>
              <IconButton
                icon={<MdOutlineUpload />}
                aria-label="Upload Image"
                variant="unstyled"
                color="purple.700"
                fontSize="25px"
                ml={2}
                onClick={handleButtonClick}
              />
            </PopoverTrigger>
            <PopoverContent p="4">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Upload YouTube Video</PopoverHeader>
              <PopoverBody>
                <Input
                  placeholder="YouTube video URL"
                  value={videoUrl}
                  onChange={handleVideoUrlChange}
                  mb="4"
                />
                <Button onClick={handleUploadVideo}>Upload</Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Flex>
      {videoId && <YouTube videoId={videoId} opts={{ width: '100%', height: '350px' }} />}
    </Stack>
  );
}


