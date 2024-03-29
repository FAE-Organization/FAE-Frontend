import {
    Button,
    Flex,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverHeader,
    PopoverCloseButton,
    RadioGroup,
    Radio,
    Tag,
    Text,
    Grid,
    TagCloseButton
} from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md';
import { useState, useEffect } from 'react';
import Subheader from '../ProfileBody/subheader';
import { useDispatch, useSelector } from 'react-redux';
import { setRegion } from '@/lib/redux/userProfileSlice';


export default function Region({ editable }) {
    const region = useSelector((state) => state.userProfile.userData?.region);
    const [selectedRegion, setSelectedRegion] = useState(region ? [region] : ['']);
    const [tempSelectedRegion, setTempSelectedRegion] = useState(selectedRegion);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();



    const regionOptions = [
        { name: 'NA', color: 'blue' },
        { name: 'EU', color: 'green' },
        { name: 'KR', color: 'yellow' },
        { name: 'CN', color: 'red' },
        { name: 'SEA', color: 'teal' },
        { name: 'BR', color: 'purple' },
    ];

    useEffect(() => {
        setSelectedRegion(region ? [region] : ['']);
        setTempSelectedRegion(region ? [region] : ['']);
    }, [region]);

    function renderRadios() {
        return (
            <RadioGroup value={tempSelectedRegion[0]} onChange={() => setTempSelectedRegion([tempSelectedRegion[0]])}>
                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4}>
                    {regionOptions.map((option, i) => (
                        <Radio
                            key={i}
                            value={option.name}
                            colorScheme="purple"
                            borderColor="purple.500"
                            size='lg'
                            onChange={handleRadioChange}
                            isChecked={tempSelectedRegion.includes(option.name)}
                        >
                            {option.name}
                        </Radio>
                    ))}
                </Grid>
            </RadioGroup>
        );
    }

    function findObjectColor(region) {
        const regionObj = regionOptions.find((option) => { return option.name === region })
        return regionObj?.color;
    }

    function togglePopover() {
        setIsOpen(!isOpen);
    }

    function handleRadioChange(event) {
        const { value } = event.target;
        if (!selectedRegion.includes(value)) {
            setTempSelectedRegion([value]);
        }
    }

    function handlePopoverClose() {
        const selectedRegionString = tempSelectedRegion[0] || '';
        setSelectedRegion(tempSelectedRegion);
        dispatch(setRegion(selectedRegionString));
        setIsOpen(false);
      }
      

    function getButtonText() {
        if (selectedRegion.length === 0) {
            return;
        } else {
            return selectedRegion;
        }
    }

    return (
        <Flex justifyContent={'left'} align={'left'} direction={'column'} gap={3}>
            <Subheader category="Region" />
            {editable && (
                <Popover isOpen={isOpen} onClose={handlePopoverClose}>
                    <PopoverTrigger>
                        <Tag
                            color={'black'}
                            w={'fit-content'}
                            borderRadius="full"
                            bgColor={`${findObjectColor(selectedRegion[0])}.100`}
                            border={'3px dashed'}
                            borderColor={`${findObjectColor(selectedRegion[0])}.300`}
                            size="lg"
                            variant="solid"
                            onClick={togglePopover}>
                            {getButtonText()}
                            <TagCloseButton as={MdSettings} />
                        </Tag>
                    </PopoverTrigger>
                    <PopoverContent align="center">
                        <PopoverCloseButton />
                        <PopoverHeader align="center">
                            <Text as="h2" px={5} textTransform="uppercase" fontWeight="bold">
                                Select Region
                            </Text>
                        </PopoverHeader>
                        <PopoverBody>
                            <Flex direction="column" spacing={6} justify="center" align={'center'}>
                                {renderRadios()}
                            </Flex>
                            <Button mt={4} onClick={handlePopoverClose} colorScheme="purple" variant="solid">
                                Close
                            </Button>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            )}
            {!editable && (
                <Tag
                    color={'black'}
                    w={'fit-content'}
                    borderRadius="full"
                    bgColor={`${findObjectColor(selectedRegion[0])}.100`}
                    border={'3px solid'}
                    borderColor={`${findObjectColor(selectedRegion[0])}.300`}
                    size="lg"
                    variant="solid">
                    {getButtonText()}
                </Tag>
            )}
        </Flex>
    );
}
