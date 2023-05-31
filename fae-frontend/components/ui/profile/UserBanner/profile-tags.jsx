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
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { FiTag } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTags } from '@/lib/redux/userProfileSlice';


// Renders profile tags section & editable popover
export default function UserTags({ editable }) {
    const userTags = useSelector((state) => state.userProfile.userData?.tags);
    const [tags, setLocalTags] = useState(userTags || ['']);
    const [tagInput, setTagInput] = useState('');
    const [tempTags, setTempTags] = useState(tags);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setLocalTags(userTags || ['']);
        setTempTags(userTags || ['']);
    }, [userTags]);

    // Handle done button & updates tags
    function handleDone() {
        setTagInput('');
        dispatch(setTags(tempTags));
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
        const updatedTags = tempTags.filter((_, index) => index !== i);
        setTempTags(updatedTags);
    }

    // Render tag buttons in popover
    function renderButts(tags) {
        return (
            <Flex flexWrap="wrap" gap={1}>
                {tags.map((tag, i) => (
                    <TagButt key={i} text={tag} onClick={() => removeTag(i)} />
                ))}
            </Flex>
        );
    }

    return (
        <Box>
            <Heading as="h2" fontSize="lg" textTransform={'uppercase'} mb={4}>Tags</Heading>
            <Flex wrap={'wrap'}>
                {tags.map((tag, i) => (
                    <Box p={'3px'} key={i}>
                        <Tag
                            color={'black'}
                            borderRadius="full"
                            bgColor={'gray.200'}
                            border={'3px solid'}
                            borderColor={'gray.300'}
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
                                        <InputLeftElement>
                                            <FiTag color="gray" size='2.5vh' />
                                        </InputLeftElement>
                                        <Input
                                            value={tagInput}
                                            placeholder='Add a tag (e.g. Collegiate, Flexible Pay, etc.)'
                                            focusBorderColor='purple.700'
                                            borderRadius={'2xl'}
                                            onChange={(e) => (setTagInput(e.target.value))}
                                        />
                                        <IconButton
                                            icon={<AddIcon />}
                                            onClick={() => addTag(tagInput)}
                                            variant={'unstyled'}
                                        />
                                    </InputGroup>

                                    <Box align='left'>
                                        <Text fontWeight={'bold'} py={2}>
                                            Current Tags
                                        </Text>
                                        <Box>
                                            {renderButts(tempTags)}
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

// Styling for tags in popover view 
function TagButt({ text, onClick }) {
    return (
        <Flex p={'3px'} position="relative">
            <Tag
                size="lg"
                pr={4}
                bgColor={'#E8E8E8'}
                borderRadius={'2xl'}
                border={'2px solid #C4C4C4'}
                color={'black'}
                textAlign={'center'}
                cursor="pointer" >
                {text}
            </Tag>
            <Box
                position="absolute"
                top="10%"
                right="-1"
                transform="translateY(-50%)"
                cursor="pointer"
                opacity={0.8}
                _hover={{ opacity: 1 }} >
                <TagRightIcon
                    as={MinusIcon}
                    onClick={onClick}
                    boxShadow="rgba(0, 0, 0, 0.2) 0px 2px 4px 0px"
                    bgColor={'white'}
                    borderRadius={'full'}
                    p={'0.5'}
                    border={'1px solid #e2e2e2'}
                    boxSize={6}
                />
            </Box>
        </Flex>
    );
};