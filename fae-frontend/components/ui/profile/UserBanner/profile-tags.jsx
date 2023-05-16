import {
    Button,
    Box,
    Flex,
    Text,
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverHeader,
    Input,
    InputGroup,
    InputLeftElement,
    Heading,
    Tag,
    TagRightIcon,
    IconButton,
} from '@chakra-ui/react'
import { MinusIcon, AddIcon} from '@chakra-ui/icons'
import { FiTag } from "react-icons/fi";
import { useState } from 'react';
import { TEST_PROFILE_RESPONSE_DATA } from '@/components/ui/profile/TEST_DATA';

const { tags: user_tags } = TEST_PROFILE_RESPONSE_DATA[0]; 

// Styling for tags in popover view 
const TagButt = ({ text, onClick }) => {
    return (
    <Box p={'3px'}>
        <Tag
            size="md"
            bgColor={'gray.300'}
            onClick={onClick}
            variant='outline'
            borderRadius={'xl'}
            border={'3px'}
            color={'black'}
            textAlign={'center'} >
            {text}
            <TagRightIcon
                as={MinusIcon}
                bgColor={'white'}
                borderRadius={'full'}
                borderColor={'pink'}
                border={'1px'}
                position="relative"
                right="-3"
                top="-3" />
        </Tag>
    </Box>
    );
};

// Renders profile tags section & editable popover
export default function UserTags({ editable }) {
    const [tags, setTags] = useState(user_tags);
    const [tagInput, setTagInput] = useState('');
    const [tempTags, setTempTags] = useState(tags);
    const [isOpen, setIsOpen] = useState(false);

    // Handle done button & updates tags
    function handleDone() {
        setTagInput('');
        setTags(tempTags);
        setIsOpen(false);
    }

    // Handles cancel button & does NOT update tags
    function togglePopover() {
        setTagInput('');
        setTempTags(tags);
        setIsOpen(!isOpen);
    }

    // Adding a tag
    function addTag(text) {
        setTagInput('');
        setTempTags([...tempTags, text]);
    };

    // Deleting a tag
    function removeTag(i) {
            tempTags.splice(i, 1); 
    }

    // Render tag buttons in popover
    function renderButts(tags) {
        return tags.map((tag, i) => {
            return (
                <TagButt
                    key={i} 
                    text={tag} 
                    onClick={() => removeTag(i)} />
            );
        });
    };

    return (
        <Box>
        <Heading as="h2" fontSize="lg" textTransform={'uppercase'} mb={4}>Tags</Heading>
        <Flex wrap={'wrap'}>
            {tags.map((tag, i) => (
                <Box p={'3px'}>
                    <Tag
                        key={i}
                        color={'black'}
                        borderRadius="full"
                        bgColor={'blue.100'}
                        border={'3px solid'}
                        borderColor={'blue.300'}
                        size="lg"
                        variant="solid">
                        {tag}
                    </Tag>
                </Box>
                ))}
            {editable && (
                <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)} >
                    <PopoverTrigger>
                        <Box p={'3px'}>
                        <Button
                            leftIcon={<AddIcon />}
                            size='sm'
                            borderColor="gray.300"
                            borderWidth="2px"
                            borderStyle="dashed"
                            padding="0.5rem 1rem"
                            borderRadius="2xl">
                            Add Tag
                        </Button>
                        </Box>
                    </PopoverTrigger>
                    <PopoverContent align={'center'}>
                        <PopoverHeader>
                            <Stack direction='row' justify={'center'} align={'center'}>
                                <Button
                                    size='sm'
                                    colorScheme={'purple'}
                                    variant={'outline'}
                                    onClick={togglePopover}>
                                    Cancel
                                </Button>

                                <Text as={'h2'} px={5} fontWeight={'bold'}>Edit tags</Text>

                                <Button
                                    size='sm'
                                    colorScheme={'purple'}
                                    variant={'solid'}
                                    onClick={handleDone}>
                                    Done
                                </Button>
                            </Stack>
                        </PopoverHeader>
                        <PopoverBody >
                            <Stack>
                                <InputGroup>
                                    <InputLeftElement
                                        children={<FiTag color="gray" size='2.5vh' />}
                                    />
                                    <Input
                                        value={tagInput}
                                        placeholder='Add a tag (e.g. Collegiate, Flexible Pay, etc.)'
                                        focusBorderColor='purple.700'
                                        borderRadius={'2xl'}
                                        onChange={(e) => (setTagInput(e.target.value))}
                                    />
                                     <IconButton icon={<AddIcon />} onClick={() => addTag(tagInput)} />
                                </InputGroup>
                               
                                <Box align='left'>
                                    <Text fontWeight={'bold'} py={2}>
                                        Current Tags
                                    </Text>
                                    <Box>
                                        { renderButts(tempTags) }                                    
                                    </Box>
                                </Box>
                            </Stack>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            )}
        </Flex>
        </Box>
    );
}