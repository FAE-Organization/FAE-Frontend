import { useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

export default function ProfilePicture({ editable, value, onChange }) {

    function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            onChange(reader.result);
        };
        reader.readAsDataURL(file);
    }

    return (
        <Box
            position="relative"
            w="100%"
            h="auto"
            borderRadius="2xl"
            overflow="hidden"
            m={3}
            maxW={'25vh'}>
            <Box 
                as="img" 
                src={value || "https://via.placeholder.com/150"} 
                alt="Profile picture" 
                w="100%" 
                h="auto"
            />
            {editable && (
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    display="flex"
                    flexDirection="column"
                    alignItems="center">
                    <IconButton
                        aria-label="Upload Image"
                        icon={<MdOutlineAddPhotoAlternate size='lg' />}
                        variant="outline"
                        size={['sm', 'md', 'lg']}
                        onClick={() => document.getElementById('profile-picture-input').click()} />
                    <input
                        id="profile-picture-input"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange} />
                </Box>
            )}
        </Box>
    );
}