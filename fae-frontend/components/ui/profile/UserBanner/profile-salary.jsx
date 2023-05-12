import {
    Button,
    Text,
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverHeader,
    NumberInput,
    NumberInputField,
} from '@chakra-ui/react'
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { useState } from 'react';
import { TEST_PROFILE_RESPONSE_DATA } from '@/components/ui/profile/TEST_DATA';

const { salary } = TEST_PROFILE_RESPONSE_DATA[0]; 

// Renders adjustible pay rate with popover toggle
export default function Salary({ editable }) {
    const [pay, setPay] = useState( salary ?? 0);
    const [tempPaySelection, setTempPaySelection] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const realPurple = '#6B46C1';

    // Handle done button function
    function handleDone() {
        setPay(Number(tempPaySelection));
        setTempPaySelection('');
        setIsOpen(false);
    }

    // Handle cancel button function
    function togglePopover() {
        setTempPaySelection('');
        setIsOpen(!isOpen);
    }

    function getButtonText() {
        return ('$' + pay + '/hr');
    }

    return (
        <>
            {editable && (
                <Popover isOpen={isOpen} onClose={togglePopover}>
                    <PopoverTrigger>
                        <Button
                            fontWeight='normal'
                            _hover={{}}
                            onClick={togglePopover}
                            variant='outline'
                            colorScheme='purple'
                            border={editable ? '2px solid ' + realPurple : 'none'}
                            color='black'
                            borderRadius={'lg'}
                            borderColor={editable ? 'realPurple' : 'transparent'}
                            focus={{ boxShadow: 'none' }}
                            leftIcon={<HiOutlineCurrencyDollar fontWeight={'b'} color={'#7BBB9C'} size={'4vh'} />}>
                            {getButtonText()}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align={'center'}>
                        <PopoverHeader>
                            <Stack direction='row' justify={'center'} align={'center'}>
                                <Button
                                    size='sm'
                                    colorScheme={'purple'}
                                    variant={'outline'}
                                    onClick={togglePopover}>Cancel</Button>
                                <Text as={'h2'} px={5} fontWeight={'bold'}>Edit pay rate</Text>
                                <Button
                                    size='sm'
                                    colorScheme={'purple'}
                                    variant={'solid'}
                                    onClick={handleDone}>
                                    Done
                                </Button>
                            </Stack>
                        </PopoverHeader>
                        <PopoverBody px={20} py={4}>
                                <NumberInput
                                    defaultValue=''
                                    value={tempPaySelection}
                                    size='md'
                                    clampValueOnBlur={true}
                                    onChange={setTempPaySelection}>
                                    <NumberInputField />                           
                                </NumberInput>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            )}
            {!editable && (
                <Button
                    fontWeight='normal'
                    _hover={{}}
                    variant='outline'
                    borderColor='transparent'
                    colorScheme='none'
                    cursor='default'
                    leftIcon={<HiOutlineCurrencyDollar fontWeight={'b'} color={'#7BBB9C'} size={'4vh'} />}>
                    {getButtonText()}
                </Button>
            )}
        </>
    );
}