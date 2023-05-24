import { useState } from 'react';
import {
  Stack,
  Box,
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
  Button,
} from '@chakra-ui/react';
import { MdOutlineUpload } from 'react-icons/md';
import YouTube from 'react-youtube';
import Subheader from '../ProfileBody/subheader';

function getVideoId(url) {
  const videoIdMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu.be\/)([\w-]+)/i);
  return videoIdMatch && videoIdMatch[1];
};

export default function VideoReel({ headerText, editable, video_data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState(video_data && getVideoId(video_data));

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleUploadVideo = () => {
    const id = getVideoId(videoUrl);
    if (id) {
      setVideoId(id);
      setIsOpen(false);
    } else {
      console.log('Invalid YouTube URL');
    }
  };

  return (
    <Stack pl={4}>
      <Flex align="center">
        <Subheader category={headerText} />
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
      {videoId && (
        <Box borderRadius='lg' overflow='hidden'>
          <YouTube
            videoId={videoId}
            opts={{ width: '100%', height: '350px' }} />
        </Box>
      )}
    </Stack>
  );
}
