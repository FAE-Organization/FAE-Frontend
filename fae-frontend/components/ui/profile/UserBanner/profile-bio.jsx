import React, { useState } from "react";
import { Textarea, Box, Heading } from "@chakra-ui/react";

export default function UserBio({ value, editable }) {
    const [bio, setBio] = useState(value);
    const [isFocused, setIsFocused] = useState(false);

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
        <Box px={3}>
            <Heading as={'h2'} textTransform={'uppercase'}>Bio</Heading>
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
                placeholder='Nothing here yet!'/>
        </Box>
    );
};