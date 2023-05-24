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

const { pronouns } = TEST_PROFILE_RESPONSE_DATA[0];

// When in edit mode, renders popover to edit selected pronouns.
// If not in edit mode, displays user-selected pronouns.
export default function PronounSelection({ editable }) {
    const [selectedPronouns, setSelectedPronouns] = useState(pronouns ?? ['pronouns']);
    const [isOpen, setIsOpen] = useState(false);
    const realPurple = '#6B46C1';

    //Divides checkboxes evenly into two groups
    const halfLength = Math.ceil(RAW_PRONOUN_DATA.length / 2);
    const leftItems = RAW_PRONOUN_DATA.slice(0, halfLength);
    const rightItems = RAW_PRONOUN_DATA.slice(halfLength);

    // Renders checkbox items based on input array
    // If checkbox item value matches selected pronoun(s), renders checked box.
    function renderCheckboxes(items) {
       return items.map((item, i) => {
            if (selectedPronouns.includes(item)) {
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
                        colorScheme={'purple'}
                        borderColor={'purple.500'}
                        onChange={handleCheckboxChange}>
                        {item}
                    </Checkbox>
                );
            }
        });
    };

    function togglePopover() {
        setIsOpen(!isOpen);
    }

    // Updated selected pronouns array with user selection
    function handleCheckboxChange(event) {
        const { value } = event.target;
        if (selectedPronouns.includes(value)) {
            setSelectedPronouns(selectedPronouns.filter(item => item !== value));
        } else {
            setSelectedPronouns([...selectedPronouns, value]);
        }
    }

    // renders pronoun button text. 
    // Defaults to 'pronouns' if none selected.
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
                <Popover isOpen={isOpen} onClose={togglePopover}>
                    <PopoverTrigger>
                        <Button
                            fontWeight='bold'
                            fontSize={'lg'}
                            _hover={{}}
                            onClick={togglePopover}
                            variant='outline'
                            colorScheme='purple'
                            border={editable ? '2px solid ' + realPurple : 'none'}
                            color='black'
                            borderRadius={'lg'}
                            borderColor={editable ? 'realPurple' : 'transparent'}
                            focus={{ boxShadow: 'none' }}>
                            {getButtonText()}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align={'center'}>
                        <PopoverBody>
                            <Stack direction={'row'} spacing={6} justify={'center'}>
                                <Stack spacing={2}>
                                   { renderCheckboxes(leftItems) }
                                </Stack>
                                <Stack spacing={2}>
                                    { renderCheckboxes(rightItems) }
                                </Stack>
                            </Stack>
                            <Button
                                mt={4}
                                onClick={togglePopover}
                                colorScheme={'purple'}
                                variant={'solid'}>
                                Close
                            </Button>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            )}
            {!editable && (
                <Button
                    _hover={{}}
                    fontSize={'xl'}
                    fontWeight={'bold'}
                    variant='outline'
                    borderColor='transparent'
                    colorScheme='none'
                    cursor='default'>
                    {getButtonText()}
                </Button>
            )}
        </>
    );
}
