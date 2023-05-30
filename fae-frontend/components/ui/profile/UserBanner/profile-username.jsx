import { Input, InputGroup, } from '@chakra-ui/react'
import { useState } from 'react';
import { useSelector } from 'react-redux';


export default function ProfileUsername({ editable }) {
  const userData = useSelector((state) => state.userProfile.userData);
  const { name } = userData;
  const [profileUsername, setProfileUsername] = useState(name);
  const realPurple = '#6B46C1';

  return (
    <InputGroup width='13.5rem' >
      <Input
        value={editable ? ' ' + name : name}
        fontWeight={'bold'}
        fontSize={editable ? '2xl' : { base: 'xl', md: '5xl' }}
        borderRadius={'lg'}
        isReadOnly={!editable}
        variant={editable ? 'outline' : 'unstyled'}
        cursor={editable ? 'text' : 'default'}
        border={editable ? '2px solid ' + realPurple : 'none'}
        onChange={(e) => (setProfileUsername(e.target.value))}
        focusBorderColor={''}
        size={'lg'}
      />
    </InputGroup>
  );
}