// import { Box, IconButton, Image, GridItem } from '@chakra-ui/react';
// import { MdOutlineAddPhotoAlternate } from "react-icons/md";
// import { TEST_PROFILE_RESPONSE_DATA } from '@/components/ui/profile/TEST_DATA';

// const { profilePic: value } = TEST_PROFILE_RESPONSE_DATA[0];

// export default function ProfilePicture({ editable, onChange }) {

//     function handleImageChange(event) {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.onload = () => {
//             onChange(reader.result);
//         };
//         reader.readAsDataURL(file);
//     }

//     return (
//         <GridItem
//             colSpan={1}
//             position="relative"
//             w="100%"
//             h="auto"
//             borderRadius="2xl"
//             overflow="hidden"
//             m={3}
//             minW={'350px'}>
//             <Image
//                 as="img"
//                 src={value || "https://via.placeholder.com/150"}
//                 alt="Profile picture"
//                 minW={'350px'}
//                 h="auto"
//                 borderRadius="2xl"
//                 filter={editable ? "brightness(0.6)" : "brightness(1)"}>
//             </Image>
//             {editable && (
//                 <Box
//                     position="absolute"
//                     top="50%"
//                     left="50%"
//                     transform="translate(-50%, -60%)"
//                     display="flex"
//                     flexDirection="column"
//                     alignItems="center"
//                 >
//                     <IconButton
//                         aria-label="Upload Image"
//                         _hover={{}}
//                         icon={<MdOutlineAddPhotoAlternate size='lg' />}
//                         variant="unstyled"
//                         minW={'50px'}
//                         color={'white'}
//                         height={'100%'}
//                         opacity={'0.8'}
//                         onClick={() => document.getElementById('profile-picture-input').click()} />
//                     <input
//                         id="profile-picture-input"
//                         type="file"
//                         accept="image/*"
//                         style={{ display: 'none' }}
//                         onChange={handleImageChange} />
//                 </Box>
//             )}
//         </GridItem>
//     );
// }

import { Box, IconButton, Image, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { TEST_PROFILE_RESPONSE_DATA } from '@/components/ui/profile/TEST_DATA';

const { profilePic: value } = TEST_PROFILE_RESPONSE_DATA[0];

export default function ProfilePicture({ editable, onChange }) {
    const imageSize = useBreakpointValue({ base: '100%', md: 'auto' });
    const containerSize = useBreakpointValue({ base: '100%', md: '350px' });

    function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            onChange(reader.result);
        };
        reader.readAsDataURL(file);
    }

    return (
        <GridItem
            colSpan={1}
            position="relative"
            w={containerSize}
            h={imageSize === 'auto' ? 'auto' : 'initial'}
            borderRadius="2xl"
            overflow="hidden"
            minW={containerSize}
        >
            <Box position="relative">
                <Image
                    as="img"
                    src={value || "https://via.placeholder.com/150"}
                    alt="Profile picture"
                    minW={containerSize}
                    h={imageSize === 'auto' ? 'auto' : 'initial'}
                    borderRadius="2xl"
                    filter={editable ? "brightness(0.6)" : "brightness(1)"}
                />
                {editable && (
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -60%)"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <IconButton
                            aria-label="Upload Image"
                            _hover={{}}
                            icon={<MdOutlineAddPhotoAlternate size='lg' />}
                            variant="unstyled"
                            minW={'50px'}
                            color={'white'}
                            height={'100%'}
                            opacity={'0.8'}
                            onClick={() => document.getElementById('profile-picture-input').click()}
                        />
                        <input
                            id="profile-picture-input"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    </Box>
                )}
            </Box>
        </GridItem>
    );
}
