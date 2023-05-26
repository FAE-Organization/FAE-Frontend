import React, { useState } from "react";
import { Input, Flex} from "@chakra-ui/react";
import Subheader from "../ProfileBody/subheader";

export default function UserDiscord({ editable, userData }) {
    const { discord } = userData[0];
    const [discordData, setDiscordData] = useState(discord || '');
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (event) => {
        setDiscordData(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <Flex direction='column' gap={3}>
            <Subheader category='Discord' />
            <Input
                value={discord}
                isReadOnly={!editable}
                variant={editable ? 'outline' : 'unstyled'}
                cursor={editable ? 'text' : 'default'}
                borderColor={editable ? 'black' : 'transparent'}
                focusBorderColor={editable ? 'black' : 'transparent'}
                resize='none'
                borderRadius={'lg'}
                size={'md'}
                fontWeight={'bold'}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder='user#0000'/>
        </Flex>
    );
};