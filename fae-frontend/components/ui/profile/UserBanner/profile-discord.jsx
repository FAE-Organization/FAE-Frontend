import React, { useState } from "react";
import { Textarea, Box, Heading } from "@chakra-ui/react";

export default function UserDiscord({ value, editable }) {
    const [discord, setDiscord] = useState(value);
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
            <Heading as={'h2'} textTransform={'uppercase'}>Discord</Heading>
            <Textarea
                value={discord}
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
                placeholder='user#0000'/>
        </Box>
    );
};