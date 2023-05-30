import React, { useState, useEffect } from "react";
import { Textarea, Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setBio } from "@/lib/redux/userProfileSlice";


export default function UserBio({ editable }) {
    const bio = useSelector((state) => state.userProfile.userData?.bio);
    const [bioText, setBioText] = useState('');
    const [setFocused, setIsFocused] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setBioText(bio || '');
    }, [bio]);

    const handleChange = (event) => {
        setBioText(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        dispatch(setBio(bioText));
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
                value={bioText}
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