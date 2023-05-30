import { setProfilePic } from '@/lib/redux/userProfileSlice';
import { Box, IconButton, Image, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';


export default function ProfilePicture({ editable, onChange }) {
    const value = useSelector((state) => state.userProfile?.userData?.profilePic);
    const imageSize = useBreakpointValue({ base: '100%', md: 'auto' });
    const containerSize = useBreakpointValue({ base: '100%', md: '350px' });

    const dispatch = useDispatch();

    function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            onChange(reader.result);
        };
        reader.readAsDataURL(file);
        dispatch(setProfilePic(file));
    }

    return (
        <GridItem
            colSpan={1}
            position="relative"
            w={'100%'}
            h={imageSize === 'auto' ? 'auto' : 'initial'}
            borderRadius="2xl"
            overflow="hidden"
            minW={containerSize}
        >
            <Box position="relative">
                <Box position="relative" width="100%" paddingBottom="100%">
                    <Image
                        as="img"
                        src={value}
                        alt="Profile picture"
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        borderRadius="2xl"
                        filter={editable ? "brightness(0.6)" : "brightness(1)"}
                    />
                </Box>
                {editable && (
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
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
