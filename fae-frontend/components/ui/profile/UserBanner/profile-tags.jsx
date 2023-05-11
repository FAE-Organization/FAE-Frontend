import {
    Button,
    Box,
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
    TagRightIcon
} from '@chakra-ui/react'
import { MinusIcon} from '@chakra-ui/icons'
import { FiTag } from "react-icons/fi";
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const TagButt = ({ text, onClick }) => {
    return (
        <Tag
            size="md"
            bgColor={'gray.300'}
            onClick={onClick}
            variant='outline'
            borderRadius={'xl'}
            border={'3px'}
            color={'black'}
            textAlign={'center'}
        >
            {text}
            <TagRightIcon
                as={MinusIcon}
                bgColor={'white'}
                borderRadius={'full'}
                borderColor={'pink'}
                border={'1px'}
                position="relative"
                right="-3"
                top="-3"
            />
        </Tag>
    );
};

export default function UserTags({ items, editable }) {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    function handleCancel() {
        setIsOpen(false);
    }

    function handleDone() {
        setIsOpen(false);
        // Do something with the new pay and rate values, e.g. call an API or update a parent component
    }

    function togglePopover() {
        setIsOpen(!isOpen);
    }

    return (
        <Box>
            {/* Heading text is unique to tags */}
            <Heading as="h2" fontSize="xl" mb={4}>Tags</Heading>
            {editable && (
                <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)} >
                    <PopoverTrigger>
                        <Button
                            leftIcon={<AddIcon />}
                            size='sm'
                            borderColor="gray.300"
                            borderWidth="2px"
                            borderStyle="dashed"
                            padding="0.5rem 1rem"
                            borderRadius="2xl">
                            {/* Button text is unique to tags */}
                            Add Tag
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align={'center'}>
                        <PopoverHeader>
                            <Stack direction='row' justify={'center'} align={'center'}>
                                <Button
                                    size='sm'
                                    colorScheme={'purple'}
                                    variant={'outline'}
                                    onClick={handleCancel}>Cancel</Button>

                                {/* Text is unique to Tags */}
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
                                {/* Popover body is unique to Tags */}
                                <InputGroup>
                                    <InputLeftElement
                                        children={<FiTag color="gray" size='2.5vh' />}
                                    />
                                    <Input
                                        placeholder='Add a tag (e.g. Collegiate, Flexible Pay, etc.)'
                                        focusBorderColor='purple.700'
                                        borderRadius={'2xl'}
                                    />
                                </InputGroup>
                                <Box align='left'>
                                    <Text fontWeight={'bold'} py={2}>
                                        Current Tags
                                    </Text>
                                    <Box>
                                        This is where tags go!
                                    </Box>
                                </Box>
                            </Stack>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            )}
        </Box>
    );
}