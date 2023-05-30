import { Button, Box, Text, Flex, Select, Stack, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverHeader, NumberInput, NumberInputField, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';
import { HiOutlineCurrencyDollar, HiOutlineCurrencyPound } from "react-icons/hi";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Salary({ editable }) {
    const salary = useSelector((state) => state.userProfile.salary);

    const [pay, setPay] = useState(salary?.amount);
    const [tempPaySelection, setTempPaySelection] = useState(pay);
    const [tempRateSelection, setTempRateSelection] = useState('hourly');
    const [selectedCurrency, setSelectedCurrency] = useState('usd');
    const [isOpen, setIsOpen] = useState(false);
    const realPurple = '#6B46C1';

    useEffect(() => {
        if (salary) {
            setPay(salary.amount || 0);
            setTempPaySelection(salary.amount || 0);
            setTempRateSelection(salary.compensationType || 'hourly');
            setSelectedCurrency(salary.currency || 'usd');
        }
    }, [salary]);

    function handleDone() {
        setPay(Number(tempPaySelection));
        setIsOpen(false);
    }

    function togglePopover() {
        setIsOpen(!isOpen);
    }

    function getButtonText() {
        return (pay);
    }

    function handleCurrencyChange(event) {
        setSelectedCurrency(event.target.value);
    }

    function handleRateChange(event) {
        setTempRateSelection(event.target.value);
    }

    function getButtonIcon() {
        switch (selectedCurrency.toLowerCase()) {
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

    function getRate() {
        switch (tempRateSelection) {
            case 'hourly':
                return '/hr';
            case 'yearly':
                return '/yr';
            case 'milestone':
                return '/milestone';
            default:
                return '/hr';
        }
    }

    return (
        <>
            {editable && (
                <Popover isOpen={isOpen} onClose={togglePopover} Width={'fit-content'} >
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
                            {getRate()}
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
                                            <option value='hourly'>hourly</option>
                                            <option value='yearly'>yearly</option>
                                            <option value='milestone'>milestone</option>
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
                        {getRate()}
                    </Flex>
                </Button>
            )}
        </>
    );
}
