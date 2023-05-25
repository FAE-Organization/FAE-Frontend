import {
    Button,
    Flex,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    RadioGroup,
    Radio,
    Tag,
    TagCloseButton
} from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md';
import { useState } from 'react';
import Subheader from '../ProfileBody/subheader';
import { TEST_PROFILE_RESPONSE_DATA } from '@/components/ui/profile/TEST_DATA';

const { region } = TEST_PROFILE_RESPONSE_DATA[0];

export default function Region({ editable }) {
    const [selectedRegion, setSelectedRegion] = useState([region]);
    const [tempSelectedRegion, setTempSelectedRegion] = useState([region]);

    const [isOpen, setIsOpen] = useState(false);

    const regionOptions = [
        { name: 'NA', color: 'blue' },
        { name: 'EU', color: 'green' },
        { name: 'KR', color: 'yellow' },
        { name: 'CN', color: 'red' },
        { name: 'SEA', color: 'teal' },
        { name: 'BR', color: 'purple' },
    ];

    function renderRadios() {
        return (
            <RadioGroup
                value={tempSelectedRegion[0]}
                onChange={() => {
                    setTempSelectedRegion([tempSelectedRegion[0]])
                }}>
                {
                    regionOptions.map((option, i) => {
                        return (
                            <Radio
                                key={i}
                                value={option.name}
                                colorScheme={'purple'}
                                borderColor={'purple.500'}
                                onChange={handleRadioChange}
                                isChecked={tempSelectedRegion.includes(option.name)} >
                                {option.name}
                            </Radio>
                        );
                    })
                }
            </RadioGroup>
        );
    }

    function findObjectColor(region) {
        const regionObj = regionOptions.find((option) => {return option.name === region}) 
        return regionObj.color;
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
        setSelectedRegion(tempSelectedRegion);
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
