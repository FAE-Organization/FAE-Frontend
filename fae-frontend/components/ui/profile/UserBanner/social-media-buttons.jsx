import { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { setYoutube, setEmail, setTwitter, setTwitch } from '@/lib/redux/userProfileSlice';


export default function SocialButtons({ editable }) {
  const twitter = useSelector((state) => state.userProfile.userData?.twitter);
  const youtube = useSelector((state) => state.userProfile.userData?.youtube);
  const twitch = useSelector((state) => state.userProfile.userData?.twitch);
  const email = useSelector((state) => state.userProfile.userData?.email);

  const [isOpen, setIsOpen] = useState(false);
  const [socialLinks, setSocialLinks] = useState({
    twitter: '',
    youtube: '',
    twitch: '',
    email: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setSocialLinks({
      twitter: twitter || '',
      youtube: youtube || '',
      twitch: twitch || '',
      email: email || '',
    });
  }, [twitter, youtube, twitch, email]);

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

  function handleDone() {
    const {
      twitter,
      youtube,
      twitch,
      email
    } = socialLinks;
    dispatch(setEmail(email));
    dispatch(setYoutube(youtube));
    dispatch(setTwitch(twitch));
    dispatch(setTwitter(twitter));
    setIsOpen(false);
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

                <Button size="sm" colorScheme="purple" variant="solid" onClick={handleDone}>
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
