import React, { useState, useEffect } from "react";
import { Textarea, Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function UserBio({ editable }) {
    const userData = useSelector((state) => state.userProfile.userData);
    const [bio, setBio] = useState('');

    useEffect(() => {
        setBio(userData.bio || '');
    }, [userData]);

    const handleChange = (event) => {
        setBio(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <Box>
            <Text
                textTransform={'Uppercase'}
                as='b'
                fontSize={'20px'}
                width={'auto'}>
                Bio
            </Text>
            <Textarea
                value={bio}
                isReadOnly={!editable}
                variant={editable ? 'outline' : 'unstyled'}
                cursor={editable ? 'text' : 'default'}
                borderColor={editable ? 'black' : 'transparent'}
                focusBorderColor={editable ? 'black' : 'transparent'}
                resize='none'
                size={'lg'}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder='Nothing here yet!' />
        </Box>
    );
};