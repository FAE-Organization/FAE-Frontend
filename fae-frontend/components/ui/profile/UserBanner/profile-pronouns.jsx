import {
    Button,
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';
import { PRONOUN_DATA as RAW_PRONOUN_DATA, TEST_PROFILE_RESPONSE_DATA } from '@/components/ui/profile/TEST_DATA';
import { PAUL_TEST_PROFILE_RESPONSE_DATA } from '@/pages/search/user/profile';

const { pronouns } = TEST_PROFILE_RESPONSE_DATA[0];

export default function PronounSelection({ editable, test }) {
    const paul = PAUL_TEST_PROFILE_RESPONSE_DATA[0]
    const [selectedPronouns, setSelectedPronouns] = useState(test ? paul.pronouns : (pronouns ?? ['pronouns']));
    const [tempSelectedPronouns, setTempSelectedPronouns] = useState(pronouns ?? []);


    const [isOpen, setIsOpen] = useState(false);
    const realPurple = '#6B46C1';

    const halfLength = Math.ceil(RAW_PRONOUN_DATA.length / 2);
    const leftItems = RAW_PRONOUN_DATA.slice(0, halfLength);
    const rightItems = RAW_PRONOUN_DATA.slice(halfLength);

    function renderCheckboxes(items) {
        return items.map((item, i) => {
            return (
                <Checkbox
                    key={i}
                    value={item}
                    colorScheme={'purple'}
                    borderColor={'purple.500'}
                    onChange={handleCheckboxChange}
                    isChecked={selectedPronouns.includes(item)} // Set isChecked based on selectedPronouns
                >
                    {item}
                </Checkbox>
            );
        });
    }

    function togglePopover() {
        setIsOpen(!isOpen);
    }

    function handleCheckboxChange(event) {
        const { value } = event.target;
        if (selectedPronouns.includes(value)) {
            setSelectedPronouns(selectedPronouns.filter((item) => item !== value));
        } else {
            setSelectedPronouns([...selectedPronouns, value]);
        }
    }

    function handlePopoverClose() {
        setSelectedPronouns(tempSelectedPronouns);
        setIsOpen(false);
    }

    function getButtonText() {
        if (selectedPronouns.length === 0) {
            return 'pronouns';
        } else {
            return selectedPronouns.join('/');
        }
    }

    return (
        <>
            {editable && (
                <Popover isOpen={isOpen} onClose={handlePopoverClose}>
                    <PopoverTrigger>
                        <Button
                            fontWeight="bold"
                            fontSize="lg"
                            _hover={{}}
                            onClick={togglePopover}
                            variant="outline"
                            colorScheme="purple"
                            border={editable ? `2px solid ${realPurple}` : 'none'}
                            color="black"
                            borderRadius="lg"
                            borderColor={editable ? realPurple : 'transparent'}
                            focus={{ boxShadow: 'none' }}
                        >
                            {getButtonText()}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="center">
                        <PopoverBody>
                            <Stack direction="row" spacing={6} justify="center">
                                <Stack spacing={2}>
                                    {renderCheckboxes(leftItems)}
                                </Stack>
                                <Stack spacing={2}>
                                    {renderCheckboxes(rightItems)}
                                </Stack>
                            </Stack>
                            <Button mt={4} onClick={handlePopoverClose} colorScheme="purple" variant="solid">
                                Close
                            </Button>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            )}
            {!editable && (
                <Button
                    _hover={{}}
                    fontSize="xl"
                    fontWeight="bold"
                    variant="outline"
                    borderColor="transparent"
                    colorScheme="none"
                    cursor="default"
                >
                    {getButtonText()}
                </Button>
            )}
        </>
    );
}
