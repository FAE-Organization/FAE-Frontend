import React, { useState, useEffect } from "react";
import { Input, Flex } from "@chakra-ui/react";
import Subheader from "../ProfileBody/subheader";
import { useDispatch, useSelector } from "react-redux";
import { setDiscord } from "@/lib/redux/userProfileSlice";

export default function UserDiscord({ editable }) {
  const discord = useSelector((state) => state.userProfile.userData?.discord);
  const [discordData, setDiscordData] = useState(discord || '');

  const dispatch = useDispatch();

  useEffect(() => {
    setDiscordData(discord || '');
  }, [discord]);

  const handleChange = (event) => {
    setDiscordData(event.target.value);
  };

  const handleBlur = () => {
    dispatch(setDiscord(discordData));
  };

  return (
    <Flex direction='column' gap={3}>
      <Subheader category='Discord' />
      <Input
        value={discordData}
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
        onBlur={handleBlur}
        placeholder='user#0000'
      />
    </Flex>
  );
};
