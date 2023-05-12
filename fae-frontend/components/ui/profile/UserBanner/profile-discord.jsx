import React, { useState } from "react";
import { Input, Box, Text, Heading } from "@chakra-ui/react";

export default function UserDiscord({ value, editable }) {
    const [discord, setDiscord] = useState(value);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (event) => {
        setDiscord(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <Box >
            <Heading fontSize="lg" mb={4} as={'h2'} textTransform={'uppercase'}>Discord</Heading>
            <Input
                value={discord}
                isReadOnly={!editable}
                variant={editable ? 'outline' : 'unstyled'}
                cursor={editable ? 'text' : 'default'}
                borderColor={editable ? 'black' : 'transparent'}
                focusBorderColor={editable ? 'black' : 'transparent'}
                resize='none'
                borderRadius={'lg'}
                size={'sm'}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder='user#0000'/>
        </Box>
    );
};