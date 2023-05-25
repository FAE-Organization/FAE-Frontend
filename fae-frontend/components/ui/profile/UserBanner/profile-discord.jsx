import React, { useState } from "react";
import { Input, Flex} from "@chakra-ui/react";
import Subheader from "../ProfileBody/subheader";
import { TEST_PROFILE_RESPONSE_DATA } from '@/components/ui/profile/TEST_DATA';

const { discord: discord_data } = TEST_PROFILE_RESPONSE_DATA[0];

export default function UserDiscord({ value, editable }) {
    const [discord, setDiscord] = useState(discord_data || value);
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