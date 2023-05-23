import { Input, InputGroup, } from '@chakra-ui/react'
import { useState } from 'react';
import { TEST_PROFILE_RESPONSE_DATA } from '@/components/ui/profile/TEST_DATA';

const { username: name } = TEST_PROFILE_RESPONSE_DATA[0];

export default function ProfileUsername({ editable }) {
  const [profileUsername, setProfileUsername] = useState(name);
  const realPurple = '#6B46C1';

  return (
      <InputGroup maxW='300px' >
        <Input
          value={editable? ' ' + profileUsername : profileUsername}
          fontWeight={'bold'}
          fontSize={editable ? '2xl' : '6xl'}
          borderRadius={'lg'}
          isReadOnly={!editable}
          variant={editable ? 'outline' : 'unstyled'}
          cursor={editable ? 'text' : 'default'}
          border={editable ? '2px solid ' + realPurple : 'none'}
          onChange={(e) => (setProfileUsername(e.target.value))}
          focusBorderColor={''}
          size={'xl'}
        />
      </InputGroup>
  );
}