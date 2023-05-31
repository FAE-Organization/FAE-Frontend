import { setUsername } from '@/lib/redux/userProfileSlice';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ProfileUsername({ editable }) {
  const dispatch = useDispatch();
  const realPurple = '#6B46C1';
  const userData = useSelector((state) => state.userProfile.userData);
  const [tempSelectedName, setTempSelectedName] = useState(userData?.name || '');

  useEffect(() => {
    setTempSelectedName(userData?.name || '');
  }, [userData]);

  const handleBlur = () => {
    dispatch(setUsername(tempSelectedName));
  };

  // const handleChange = (e) => {
  //   setTempSelectedName(e.target.value);
  // };
  const handleChange = (value) => {
    setTempSelectedName(value);
  };
  

  return (
    <Editable
      isDisabled={!editable}
      value={tempSelectedName}
      fontWeight="bold"
      fontSize={editable ? '2xl' : { base: 'xl', md: '5xl' }}
      borderRadius="lg"
      variant={editable ? 'outline' : 'unstyled'}
      cursor={editable ? 'text' : 'default'}
      border={editable ? `2px solid ${realPurple}` : 'none'}
      onBlur={handleBlur}
      // onChange={handleChange}
      px={3}
    >
      <EditablePreview />
      <EditableInput onChange={handleChange} />
    </Editable>
  );
}

