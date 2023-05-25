import { useState, useRef } from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';
import Subheader from '../ProfileBody/subheader';
import { FaEllipsisH, FaPlus } from 'react-icons/fa';


export default function NotableEvents({ editable, events_data }) {
  const [events, setEvents] = useState(events_data);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [tempEventData, setTempEventData] = useState({
    id: 1,
    title: 'farts',
    subtitle: 'more farts',
    role: 'doctor',
    thumbnail: 'url.com'
  });
  const fileInputRef = useRef(null);

  function handleUpload() {
    setTempEventData(() => ({}));
    setIsPopoverOpen(true);
  }

  function handlePopoverClose() {
    setTempEventData(() => ({}));
    setIsPopoverOpen(false);
  }

  function handleEventDataChange(event) {
    const { name, value } = event.target;
    setTempEventData((prevData) => (() => ({ ...prevData, [name]: value })));
  }

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    setTempEventData((prevData) => (() => ({ ...prevData, thumbnail: file || '' })));
  }

  function handleConfirmUpload() {
    const { id, title, subtitle, role, thumbnail} = tempEventData;

    if (!title || !subtitle || !role || !thumbnail) {
      return;
    }

    if (id) {
      // Update existing event
      const updatedEvents = events.map((event) =>
        event.id === id ? { ...event, title, subtitle, role, thumbnail } : event
      );
      setEvents(updatedEvents);
    } else {
      // Add new event
      const newEvent = {
        id: Date.now(),
        title,
        subtitle,
        role, 
        thumbnail,
      };
      setEvents([...events, newEvent]);
    }
    
    setTempEventData(() => ({}));
    setIsPopoverOpen(false);
  }

  function handleEdit(event) {
    setTempEventData(() => ({ ...event }));
    setIsPopoverOpen(true);
  }

  function handleRemove(eventId) {
    setEvents(events.filter((event) => event.id !== eventId));
    setIsPopoverOpen(false);
  }

  function renderEvents() {
    return events.map((event) => (
      <Box 
        key={event.id} 
        p={1}
        borderWidth={1} 
        borderRadius="md" 
        cursor="pointer" 
        variant={editable ? "outline" : 'unstyled'}
        border={editable ? '1px solid black' : '0px'}
      >
        <Flex justify="space-between" align="center" spacing={10}>
          <Box flex={1} marginRight={4}>
            <Image src={event.thumbnail} alt={event.title} minW={100}/>
          </Box>
          <Box flex={4}>
            <Heading as="h3" size="sm" marginBottom={1}>
              {event.title}
            </Heading>
            <Box fontWeight={'bold'}>
              {event.subtitle}
            </Box>
            <Box fontSize="sm" color="gray.700">
              {event.role}
            </Box>
          </Box>
          {editable && (
            <Box position="relative" >
              <Box
                position="absolute"
                top="-60px"
                right="-15px"
                boxShadow="lg"
                borderRadius="full"
              >
                <IconButton
                  size="sm"
                  isRound
                  bgColor="white"
                  fontSize="xl"
                  color="purple.600"
                  aria-label="Remove Image"
                  icon={<FaEllipsisH />}
                  onClick={() => handleEdit(event)}
                />
              </Box>
            </Box>
          )}
        </Flex>
      </Box>
    ));
  }

  return (
    <VStack align="stretch" spacing={4}>
      <Subheader category="Past Events" />
      <VStack spacing={6} pb={3} align="stretch" >
        {renderEvents()}
      </VStack>
      {editable && (
        <Popover isOpen={isPopoverOpen} onClose={handlePopoverClose} >
          <PopoverTrigger>
            <Box
              p={4}
              borderWidth={1}
              borderRadius="md"
              variant="outline"
              border={'1px solid black'}
              h={75}
            >
              <Box position="relative">
                <Box
                  position="absolute"
                  top="-35px"
                  right="-25px"
                  boxShadow="lg"
                  borderRadius="full"
                >
                  <IconButton
                    size="sm"
                    isRound
                    bgColor="white"
                    fontSize="xl"
                    color="purple.600"
                    aria-label="Add Event"
                    icon={<FaPlus />}
                    onClick={handleUpload}
                  />
                </Box>
              </Box>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverCloseButton />
            <PopoverHeader align="center">
              <Text as="h2" px={5} textTransform="uppercase" fontWeight="bold">
                {tempEventData.id ? 'Edit Event' : 'Upload Event'}
              </Text>
            </PopoverHeader>
            <PopoverBody>
              <VStack spacing={2} align="stretch">
                <Input
                  placeholder="Event Title"
                  name="title"
                  value={tempEventData.title}
                  onChange={handleEventDataChange}
                />
                <Input
                  type="subtitle"
                  placeholder="Game Title"
                  name="subtitle"
                  value={tempEventData.subtitle}
                  onChange={handleEventDataChange}
                />
                <Input
                  type="file"
                  variant="unstyled"
                  placeholder="Thumbnail Upload"
                  name="thumbnail"
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                />
                <Input
                  placeholder="Job Role"
                  name="role"
                  value={tempEventData.role}
                  onChange={handleEventDataChange}
                />
                <Button colorScheme="purple" onClick={handleConfirmUpload}>
                  {tempEventData.id ? 'Update' : 'Upload'}
                </Button>
                {tempEventData.id && (
                  <Button
                    aria-label="Delete Event"
                    variant="outline"
                    colorScheme="red"
                    onClick={() => handleRemove(tempEventData.id)}
                  >
                    Delete Event
                  </Button>
                )}
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </VStack>
  );
}
