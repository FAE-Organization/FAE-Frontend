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

export default function PronounSelection({ editable }) {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const realPurple = '#6B46C1';
    const SHOWCASE_DATA = ['Articles', 'Design Portfolio', 'Notable Events', 'Casting Reel', 'Editing Reel', 'Observer Reel'];


    const halfLength = Math.ceil(SHOWCASE_DATA.length / 2);
    const leftItems = SHOWCASE_DATA.slice(0, halfLength);
    const rightItems = SHOWCASE_DATA.slice(halfLength);


    function togglePopover() {
        setIsOpen(!isOpen);
    }

    function handleCheckboxChange(event) {
        const { value } = event.target;
        if (selectedItems.includes(value)) {
            setSelectedItems(selectedItems.filter(item => item !== value));
        } else {
            setSelectedItems([...selectedItems, value]);
        }
    }

    function getButtonText() {
        if (selectedItems.length === 0) {
            return 'pronouns';
        } else {
            return selectedItems.join('/');
        }
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
                            focus={{ boxShadow: 'none' }}>
                            {getButtonText()}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align={'center'}>
                        <PopoverBody>
                            <Stack direction={'row'} spacing={6} justify={'center'}>
                                <Stack spacing={2}>
                                    {leftItems.map(item => (
                                        <Checkbox key={item} value={item} onChange={handleCheckboxChange}>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </Stack>
                                <Stack spacing={2}>
                                    {rightItems.map(item => (
                                        <Checkbox key={item} value={item} onChange={handleCheckboxChange}>
                                            {item}
                                        </Checkbox>
                                    ))}
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
                    fontWeight='normal'
                    _hover={{}}
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



// import {
//     Button,
//     Stack,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     PopoverBody,
//     Checkbox,
// } from '@chakra-ui/react';
// import { useState } from 'react';

// export default function PronounSelection({ pronouns, editable }) {
//     const [selectedItems, setSelectedItems] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
//     const realPurple = '#6B46C1';
//     const halfLength = Math.ceil(pronouns.length / 2);
//     const leftItems = items.slice(0, halfLength);
//     const rightItems = items.slice(halfLength);

//     function togglePopover() {
//         setIsOpen(!isOpen);
//     }

//     function handleCheckboxChange(event) {
//         const { value } = event.target;
//         if (selectedItems.includes(value)) {
//             setSelectedItems(selectedItems.filter(item => item !== value));
//         } else {
//             setSelectedItems([...selectedItems, value]);
//         }
//     }

//     function getButtonText() {
//         if (selectedItems.length === 0) {
//             return 'pronouns';
//         } else {
//             return selectedItems.join('/');
//         }
//     }

//     return (
//         <>
//             {editable && (
//                 <Popover isOpen={isOpen} onClose={togglePopover}>
//                     <PopoverTrigger>
//                         <Button
//                             fontWeight='normal'
//                             _hover={{}}
//                             onClick={togglePopover}
//                             variant='outline'
//                             colorScheme='purple'
//                             border={editable ? '2px solid ' + realPurple : 'none'}
//                             color='black'
//                             borderRadius={'lg'}
//                             borderColor={editable ? 'realPurple' : 'transparent'}
//                             focus={{ boxShadow: 'none' }}>
//                             {getButtonText()}
//                         </Button>
//                     </PopoverTrigger>
//                     <PopoverContent align={'center'}>
//                         <PopoverBody>
//                             <Stack direction={'row'} spacing={6} justify={'center'}>
//                                 <Stack spacing={2}>
//                                     {leftItems.map(item => (
//                                         <Checkbox key={item} value={item} onChange={handleCheckboxChange}>
//                                             {item}
//                                         </Checkbox>
//                                     ))}
//                                 </Stack>
//                                 <Stack spacing={2}>
//                                     {rightItems.map(item => (
//                                         <Checkbox key={item} value={item} onChange={handleCheckboxChange}>
//                                             {item}
//                                         </Checkbox>
//                                     ))}
//                                 </Stack>
//                             </Stack>
//                             <Button 
//                                 mt={4} 
//                                 onClick={togglePopover}
//                                 colorScheme={'purple'}
//                                 variant={'solid'}>
//                                 Close
//                             </Button>
//                         </PopoverBody>
//                     </PopoverContent>
//                 </Popover>
//             )}
//             {!editable && (
//                 <Button
//                     fontWeight='normal'
//                     _hover={{}}
//                     variant='outline'
//                     borderColor='transparent'
//                     colorScheme='none'
//                     cursor='default'>
//                     {getButtonText()}
//                 </Button>
//             )}
//         </>
//     );
// }
