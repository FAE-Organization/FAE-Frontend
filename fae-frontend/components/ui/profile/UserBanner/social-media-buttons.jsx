import { useState } from 'react';
import {
  Flex,
  Stack,
  Button,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Input,
  Text,
  VStack,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaTwitch, FaRegEnvelope } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go'
import { TEST_PROFILE_RESPONSE_DATA } from '../TEST_DATA';

export default function SocialButtons({ editable }) {
  const [isOpen, setIsOpen] = useState(false);
  const [socialLinks, setSocialLinks] = useState({
    twitter: TEST_PROFILE_RESPONSE_DATA[0].twitter,
    youtube: TEST_PROFILE_RESPONSE_DATA[0].youtube,
    twitch: TEST_PROFILE_RESPONSE_DATA[0].twitch,
    email: TEST_PROFILE_RESPONSE_DATA[0].email,
    
  });

    function getSocialIcon(name) {
        switch (name.toLowerCase()) {
            case 'twitter':
                return <FaTwitter />;
            case 'youtube':
                return <FaYoutube />;
            case 'twitch':
                return <FaTwitch />;
            case 'email':
                return <FaRegEnvelope />;
            default:
                return null;
        }
    };

  function handleLinkChange(name, event) {
    const updatedLinks = { ...socialLinks };
    updatedLinks[name] = event.target.value;
    setSocialLinks(updatedLinks);
  }

  return (
    <Flex align="center">
      {Object.entries(socialLinks).map(([name, link], index) => (
        <IconButton
          key={index}
          icon={getSocialIcon(name)}
          aria-label={name}
          onClick={() => window.open(link, '_blank')}
          fontSize="2xl"
          variant="unstyled"
          color="#505050"
        />
      ))}
      {editable && (
        <Popover isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} placement="top-end">
          <PopoverTrigger>
            <IconButton
              icon={<GoPlus />}
              aria-label="Add Link"
              variant="unstyled"
              color="purple.600"
              fontSize="2xl"
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <Stack direction="row" justify="center" align="center">
                <Button size="sm" colorScheme="purple" variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>

                <Text as="h2" px={5} fontWeight="bold" textTransform={'uppercase'}>
                  Edit links
                </Text>

                <Button size="sm" colorScheme="purple" variant="solid" onClick={() => setIsOpen(false)}>
                  Done
                </Button>
              </Stack>
            </PopoverHeader>
            <PopoverBody>
              <VStack spacing={2}>
                {Object.entries(socialLinks).map(([name, link]) => (
                  <InputGroup key={name}>
                    <InputLeftElement pointerEvents="none">
                      {getSocialIcon(name)}
                    </InputLeftElement>
                    <Input
                      value={link}
                      placeholder={name}
                      onChange={(event) => handleLinkChange(name, event)}
                    />
                  </InputGroup>
                ))}
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </Flex>
  );
}
