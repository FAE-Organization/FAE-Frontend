import { useState } from 'react';
import { Input, Box, Button } from '@chakra-ui/react';

export default function ProfileUsername({ editable, value, onChange, onBlur }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(value);
  const realPurple = '#6B46C1';

  const handleChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    onChange(newUsername);
  };

  function handleUsernameClick() {
    if (editable) {
      setIsEditing(true);
    }
  }

  return (
    <Button w={'fit-content'} m={3}>
      {isEditing ? (
        <Input
          value={value}
          onChange={handleChange}
          focusBorderColor={realPurple}
          onBlur={() => {
            setIsEditing(false);
          }}
          autoFocus
        />
      ) : (
        <Button
          onClick={handleUsernameClick}
          border={editable ? '2px solid ' + realPurple : 'none'}
          borderRadius={'lg'}
          p={'8px'}
          cursor={editable ? 'pointer' : 'default'}>
          {value}
        </Button>
      )}
    </Button >
  );
}