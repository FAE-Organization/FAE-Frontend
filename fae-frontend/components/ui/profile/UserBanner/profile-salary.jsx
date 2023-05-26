import { Button, Box, Text, Flex, Select, Stack, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverHeader, NumberInput, NumberInputField, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';
import { HiOutlineCurrencyDollar, HiOutlineCurrencyPound } from "react-icons/hi";
import { useState } from 'react';
import { TEST_PROFILE_RESPONSE_DATA } from '@/components/ui/profile/TEST_DATA';

const { salary } = TEST_PROFILE_RESPONSE_DATA[0];

export default function Salary({ editable }) {
    const [pay, setPay] = useState(salary ?? 0);
    const [tempPaySelection, setTempPaySelection] = useState(salary ?? '');
    const [tempRateSelection, setTempRateSelection] = useState('/hr');
    const [selectedCurrency, setSelectedCurrency] = useState('usd');
    const [isOpen, setIsOpen] = useState(false);
    const realPurple = '#6B46C1';

    function handleDone() {
        setPay(Number(tempPaySelection));
        setIsOpen(false);
    }

    function togglePopover() {
        setIsOpen(!isOpen);
    }

    function getButtonText() {
        return (pay + tempRateSelection);
    }

    function handleCurrencyChange(event) {
        setSelectedCurrency(event.target.value);
    }

    function handleRateChange(event) {
        setTempRateSelection(event.target.value);
    }

    function getButtonIcon() {
        switch (selectedCurrency) {
            case 'usd':
                return <HiOutlineCurrencyDollar color={'#7BBB9C'} size={35} p={2} />;
            case 'cad':
                return <HiOutlineCurrencyDollar color={'#7BBB9C'} size={35} p={2} />;
            case 'gbp':
                return <HiOutlineCurrencyPound color={'#7BBB9C'} size={35} p={2} />;
            default:
                return null;
        }
    }

    return (
        <>
            {editable && (
                <Popover isOpen={isOpen} onClose={togglePopover} Width={'fit-content'}>
                    <PopoverTrigger>
                        <Button
                            px={2}
                            fontWeight='normal'
                            fontSize={'xl'}
                            _hover={{}}
                            onClick={togglePopover}
                            variant='outline'
                            colorScheme='purple'
                            border={editable ? '2px solid ' + realPurple : 'none'}
                            color='black'
                            borderRadius={'lg'}
                            borderColor={editable ? 'realPurple' : 'transparent'}
                            focus={{ boxShadow: 'none' }}
                            leftIcon={getButtonIcon()}
                        >
                            {getButtonText()}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align={'center'} width={'fit-content'}>
                        <PopoverHeader>
                            <Flex direction='row' justify={'space-between'}>
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
                            </Flex>
                        </PopoverHeader>
                        <PopoverBody py={4} px={10}>
                            <InputGroup size='md'>
                                <Stack direction="column" spacing={2} align="center">
                                    <Select placeholder='Currency' onChange={handleCurrencyChange}>
                                        <option value='usd'>USD</option>
                                        <option value='cad'>CAD</option>
                                        <option value='gbp'>GBP</option>
                                    </Select>
                                    <InputGroup size='md'>
                                        <NumberInput
                                            defaultValue=''
                                            value={tempPaySelection}
                                            size='md'
                                            clampValueOnBlur={true}
                                            onChange={setTempPaySelection}>
                                            <NumberInputField />
                                        </NumberInput>
                                        <Box width={'fit-content'}>
                                        <Select placeholder='Rate' onChange={handleRateChange}>
                                            <option value='/hr'>/hr</option>
                                            <option value='/yr'>/yr</option>
                                            <option value='/milestone'>/milestone</option>
                                        </Select>
                                        </Box>
                                    </InputGroup>
                                </Stack>
                            </InputGroup>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            )}
            {!editable && (
                <Button
                    fontWeight='normal'
                    fontSize={'xl'}
                    _hover={{}}
                    variant='outline'
                    borderColor='transparent'
                    colorScheme='none'
                    cursor='default' >
                    <Flex gap={2} align={'center'}>
                        {getButtonIcon()}
                        {getButtonText()}
                    </Flex>
                </Button>
            )}
        </>
    );
}
