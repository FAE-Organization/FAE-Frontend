import React, { useState } from "react";
import {
    IconButton,
    Checkbox,
    Flex,
    Button,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverHeader,
    SimpleGrid,
    Stack,
} from '@chakra-ui/react';
import { MdOutlineQueue } from 'react-icons/md';
import Subheader from '../ProfileBody/subheader';
import { SHOWCASE_DATA } from '../TEST_DATA';
import { useDispatch, useSelector } from "react-redux";
import { setShowcase } from "@/lib/redux/userProfileSlice";


export default function WorkShowcase({ editable }) {
    const selectedCategories = useSelector((state) => state.userProfile.userData?.showcase);
    const [tempSelectedCategories, setTempSelectedCategories] = useState(selectedCategories);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    // Toggle cancel button on popover
    function togglePopover() {
        setTempSelectedCategories(selectedCategories);
        setIsOpen(!isOpen);
    }

    function handleDone() {
        setTempSelectedCategories(selectedCategories);
        dispatch(setShowcase(tempSelectedCategories));
        setIsOpen(false);
    }

    // Adding or removing a showcase category
    function handleCheckboxChange(event) {
        const { value } = event.target;
        if (tempSelectedCategories.includes(value)) {
            setTempSelectedCategories(tempSelectedCategories.filter(item => item !== value));
        } else {
            setTempSelectedCategories([...tempSelectedCategories, value]);
        }
    };

    // function isCategoryEnabled(item) {
    //     return tempSelectedCategories.includes(item);
    // }

    return (
        <Flex align="start" spacing={4}>
            <Stack pb={7}>
            <Subheader category="Work Showcase" fontSize={'24px'} />
            </Stack>
            {editable && (
                <Popover
                    isOpen={isOpen}
                    onClose={togglePopover}>
                    <PopoverTrigger>
                        <IconButton
                            icon={<MdOutlineQueue />}
                            ml={3}
                            aria-label="Settings"
                            variant="unstyled"
                            fontSize="27px"
                            color={'purple.600'}
                            onClick={togglePopover}
                        />
                    </PopoverTrigger>
                    <PopoverContent minW={400}>
                        <PopoverHeader>
                            <Flex justify={'space-between'} px={3} py={1} align={'center'}>
                                <Button
                                    size='sm'
                                    colorScheme={'purple'}
                                    variant={'outline'}
                                    onClick={togglePopover}>Cancel</Button>
                                <Text as={'h2'} px={5} fontWeight={'bold'}>Edit Showcase</Text>
                                <Button
                                    size='sm'
                                    colorScheme={'purple'}
                                    variant={'solid'}
                                    onClick={handleDone}>
                                    Done
                                </Button>
                            </Flex>
                        </PopoverHeader>
                        <PopoverBody>
                            <SimpleGrid columns={2} spacingX={1} spacingY={1}>
                                {SHOWCASE_DATA.map((item, i) => {
                                    if (tempSelectedCategories.includes(item)) {
                                        return (
                                            <Checkbox
                                                key={i}
                                                value={item}
                                                colorScheme={'purple'}
                                                borderColor={'purple.500'}
                                                onChange={handleCheckboxChange}
                                                isChecked={true}>
                                                {item}
                                            </Checkbox>
                                        );
                                    } else {
                                        return (
                                            <Checkbox
                                                key={i}
                                                value={item}
                                                colorScheme='purple'
                                                borderColor={'purple.500'}
                                                onChange={handleCheckboxChange}
                                                isChecked={false}>
                                                {item}
                                            </Checkbox>
                                        );
                                    }
                                })}
                            </SimpleGrid>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            )}
        </Flex>
    );
}
