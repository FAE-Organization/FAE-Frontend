// import { useState } from 'react';
// import {
//   Stack,
//   IconButton,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverArrow,
//   PopoverCloseButton,
//   PopoverHeader,
//   PopoverBody,
//   Input,
//   Flex,
//   Button,
// } from '@chakra-ui/react';
// import { MdOutlineUpload } from 'react-icons/md';
// import YouTube from 'react-youtube';
// import Subheader from '../ProfileBody/subheader';

// export default function ObserverReel({ headerText, editable }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [videoUrl, setVideoUrl] = useState('');
//   const [videoId, setVideoId] = useState('');

//   function handleButtonClick() {
//     setIsOpen(!isOpen);
//   }

//   const handleVideoUrlChange = (event) => {
//     setVideoUrl(event.target.value);
//   };

//   const handleUploadVideo = () => {
//     // Extract video ID from the YouTube URL
//     const videoIdMatch = videoUrl.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu.be\/)([\w-]+)/i);
//     const id = videoIdMatch && videoIdMatch[1];

//     if (id) {
//       setVideoId(id);
//       setIsOpen(false);
//     } else {
//       // Handle invalid YouTube URL error
//       console.log('Invalid YouTube URL');
//     }
//   };

//   return (
//     <Stack>
//       <Flex align="center">
//         <Subheader category='Observer Reel' />
//         {editable && (
//           <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} placement="right-start">
//             <PopoverTrigger>
//               <IconButton
//                 icon={<MdOutlineUpload />}
//                 aria-label="Upload Image"
//                 variant="unstyled"
//                 color="purple.700"
//                 fontSize="25px"
//                 ml={2}
//                 onClick={handleButtonClick}
//               />
//             </PopoverTrigger>
//             <PopoverContent p="4">
//               <PopoverArrow />
//               <PopoverCloseButton />
//               <PopoverHeader>Upload YouTube Video</PopoverHeader>
//               <PopoverBody>
//                 <Input
//                   placeholder="YouTube video URL"
//                   value={videoUrl}
//                   onChange={handleVideoUrlChange}
//                   mb="4"
//                 />
//                 <Button onClick={handleUploadVideo}>Upload</Button>
//               </PopoverBody>
//             </PopoverContent>
//           </Popover>
//         )}
//       </Flex>
//       {videoId && <YouTube videoId={videoId} opts={{ width: '100%', height: '350px' }} />}
//     </Stack>
//   );
// }