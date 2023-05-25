import { Input, InputGroup, } from '@chakra-ui/react'
import { useState } from 'react';
import { TEST_PROFILE_RESPONSE_DATA } from '@/components/ui/profile/TEST_DATA';
import { PAUL_TEST_PROFILE_RESPONSE_DATA } from '@/pages/search/user/profile';

const { username } = TEST_PROFILE_RESPONSE_DATA[0];

export default function ProfileUsername({ editable, test }) {
  const paul = PAUL_TEST_PROFILE_RESPONSE_DATA[0]
  const [profileUsername, setProfileUsername] = useState(test ? paul.username : username);
  const realPurple = '#6B46C1';

  return (
    <InputGroup maxW='13.5rem' >
      <Input
        value={editable ? ' ' + profileUsername : profileUsername}
        fontWeight={'bold'}
        fontSize={editable ? '2xl' : { base: 'xl', md: '5xl' }}
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