import { useState } from 'react';
import {
    Flex,
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    Input,
    HStack,
} from '@chakra-ui/react';
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineTwitch, AiOutlineMail } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';

export default function SocialButtons({ editable }) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [socialLinks, setSocialLinks] = useState([
        { name: 'Twitter', link: 'https://twitter.com' },
        { name: 'YouTube', link: 'https://youtube.com' },
        { name: 'Twitch', link: 'https://twitch.tv' },
        { name: 'Email', link: 'mailto:example@example.com' },
    ]);

    function getSocialIcon(name) {
        switch (name.toLowerCase()) {
            case 'twitter':
                return <AiOutlineTwitter />;
            case 'youtube':
                return <AiOutlineYoutube />;
            case 'twitch':
                return <AiOutlineTwitch />;
            case 'email':
                return <AiOutlineMail />;
            default:
                return null;
        }
    };

    function handlePopoverOpen() {
        setIsPopoverOpen(true);
    };

    function handlePopoverClose() {
        setIsPopoverOpen(false);
    };

    function handleLinkChange(index, event) {
        const updatedLinks = [...socialLinks];
        updatedLinks[index].link = event.target.value;
        setSocialLinks(updatedLinks);
    };

    function handleAddLink() {
        const newLink = { name: '', link: '' };
        setSocialLinks([...socialLinks, newLink]);
    };

    return (
        <>
            <Flex align="center">
                {socialLinks.map((socialLink, index) => (
                    <IconButton
                        key={index}
                        icon={getSocialIcon(socialLink.name)}
                        aria-label={socialLink.name}
                        onClick={() => window.open(socialLink.link, '_blank')}
                        mr={2}
                    />
                ))}
                {editable && (
                    <Popover isOpen={isPopoverOpen} onOpen={handlePopoverOpen} onClose={handlePopoverClose} placement="top-end">
                        <PopoverTrigger>
                            <IconButton icon={<FaPlus />} aria-label="Add Link" />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                                <HStack spacing={2}>
                                    {socialLinks.map((socialLink, index) => (
                                        <Input
                                            key={index}
                                            value={socialLink.link}
                                            placeholder={socialLink.name}
                                            onChange={(event) => handleLinkChange(index, event)}
                                        />
                                    ))}
                                </HStack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                )}
            </Flex>
        </>
    );
};