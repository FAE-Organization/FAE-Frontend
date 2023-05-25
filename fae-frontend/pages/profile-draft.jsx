// import { useState } from 'react';
// import { Button, Flex, Stack, Box, Grid, GridItem, useBreakpointValue} from '@chakra-ui/react';
// import ProfilePicture from '@/components/ui/profile/UserBanner/profile-picture';
// import ProfileUsername from '@/components/ui/profile/UserBanner/profile-username';
// import PronounSelection from '@/components/ui/profile/UserBanner/profile-pronouns';
// import Salary from '@/components/ui/profile/UserBanner/profile-salary';
// import UserBio from '@/components/ui/profile/UserBanner/profile-bio';
// import UserDiscord from '@/components/ui/profile/UserBanner/profile-discord';
// import ProfileRoles from '@/components/ui/profile/UserBanner/profile-roles';
// import UserTags from '@/components/ui/profile/UserBanner/profile-tags';
// import ProfileBody from '@/components/ui/profile/ProfileBody/profile-body';
// import Subheader from '@/components/ui/profile/ProfileBody/subheader';
// import Capsule from '@/components/ui/profile/UserBanner/capsule';
// import SocialButtons from '@/components/ui/profile/UserBanner/social-media-buttons';

// export default function Profile() {
//     const [editable, setEditable] = useState(false);
//     const [bio, setBio] = useState('this is a test!');
//     const [discord, setDiscord] = useState('user#0000');

//     // TODO: Clean this up later!!

//     function handleEditProfile() {
//         setEditable(!editable);
//     }

//     function handleProfilePictureChange(value) {
//         setProfilePicture(value);
//     }

//     function handleSaveBio(newBio) {
//         setBio(newBio);
//     };

//     function handleSaveDiscord(newDiscord) {
//         setDiscord(newDiscord);
//     };

//     const showEditButton = useBreakpointValue({ base: false, md: true });

//     return (
//         <Box px={'3rem'} py={'4rem'}>
//             <Grid
//                 templateRows='repeat(3, 1fr)'
//                 columnGap={5}
//                 templateColumns='repeat(5, 1fr)'>

//                 <ProfilePicture
//                     editable={editable}
//                     onChange={handleProfilePictureChange} 
//                 />

//                 {/* Profile Header */}
//                 <GridItem colSpan={4} pt={4} px={3}>
//                     <Flex justify={'space-between'} >
//                         <Flex direction='row' spacing={3} justify={'center'} align='center' gap={3}>
//                             <ProfileUsername editable={editable} />
//                             <PronounSelection editable={editable} />
//                             <Salary editable={editable} />
//                         </Flex>

//                         <Grid>
                            
//                         </Grid>
                

//                         {/* Edit mode button -- Hidden on small screens */}
//                         {showEditButton && (
//                             <Flex>
//                                 <Button
//                                     onClick={handleEditProfile}
//                                     variant={editable ? 'solid' : 'outline'}
//                                     colorScheme={'purple'}>
//                                     {editable ? 'Save Profile' : 'Edit Profile'}
//                                 </Button>
//                             </Flex>
//                         )}
//                     </Flex>


//                     <Box>
//                         <SocialButtons editable={editable} />
//                         <Grid templateColumns={{base: '1fr', md: 'repeat(6, 1fr)'}} pt={1}>
//                             <GridItem colSpan={2}>
//                                 <ProfileRoles editable={editable} />
//                             </GridItem>

//                             <GridItem colSpan={2}>
//                                 <UserTags editable={editable} />
//                             </GridItem>
//                             <GridItem colSpan={1}>
//                             <Stack direction={'column'}>
//                                 <Subheader category='Region'/>
//                                 <Capsule color='#8F9AD2' capName={'NA'} />
//                             </Stack>
//                             </GridItem>
//                             <GridItem colSpan={1}>
//                                 <UserDiscord
//                                     editable={editable}
//                                     initialValue={discord}
//                                     onSave={handleSaveDiscord} />
//                             </GridItem>
//                         </Grid>
//                     </Box>

//                     <GridItem pt={2}>
//                         <UserBio
//                             editable={editable}
//                             initialValue={bio}
//                             onSave={handleSaveBio} />
//                     </GridItem>
//                 </GridItem> 
                
//                 <GridItem rowSpan={2} colSpan={5} >
//                     <ProfileBody editable={editable} />
//                 </GridItem>
//             </Grid>
//         </Box>
//     );
// }

import { useState } from 'react';
import { Button, Flex, Stack, Box, Grid, GridItem, useBreakpointValue} from '@chakra-ui/react';
import ProfilePicture from '@/components/ui/profile/UserBanner/profile-picture';
import ProfileUsername from '@/components/ui/profile/UserBanner/profile-username';
import PronounSelection from '@/components/ui/profile/UserBanner/profile-pronouns';
import Salary from '@/components/ui/profile/UserBanner/profile-salary';
import UserBio from '@/components/ui/profile/UserBanner/profile-bio';
import UserDiscord from '@/components/ui/profile/UserBanner/profile-discord';
import ProfileRoles from '@/components/ui/profile/UserBanner/profile-roles';
import UserTags from '@/components/ui/profile/UserBanner/profile-tags';
import ProfileBody from '@/components/ui/profile/ProfileBody/profile-body';
import Subheader from '@/components/ui/profile/ProfileBody/subheader';
import Capsule from '@/components/ui/profile/UserBanner/capsule';
import SocialButtons from '@/components/ui/profile/UserBanner/social-media-buttons';

export default function Profile() {
  const [editable, setEditable] = useState(false);
  const [bio, setBio] = useState('this is a test!');
  const [discord, setDiscord] = useState('user#0000');

  // TODO: Clean this up later!!

  function handleEditProfile() {
    setEditable(!editable);
  }

  function handleProfilePictureChange(value) {
    setProfilePicture(value);
  }

  function handleSaveBio(newBio) {
    setBio(newBio);
  };

  function handleSaveDiscord(newDiscord) {
    setDiscord(newDiscord);
  };

  const showEditButton = useBreakpointValue({ base: false, md: true });

  return (
    <Box px={{ base: '1rem', md: '3rem' }} py={{ base: '2rem', md: '4rem' }}>
      <Grid
        templateRows='repeat(3, 1fr)'
        columnGap={5}
        templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }}
      >
        {/* Profile Picture */}
        <GridItem colSpan={1} pt={4} px={3}>
          <ProfilePicture
            editable={editable}
            onChange={handleProfilePictureChange}
          />
        </GridItem>

        {/* Profile Header */}
        <GridItem colSpan={{ base: 1, md: 4 }} pt={{ base: 4, md: 0 }} px={3}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={3}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
            gap={3}
          >
            <ProfileUsername editable={editable} />
            <PronounSelection editable={editable} />
            <Salary editable={editable} />

            {/* Edit mode button -- Hidden on small screens */}
            {showEditButton && (
              <Button
                onClick={handleEditProfile}
                variant={editable ? 'solid' : 'outline'}
                colorScheme='purple'
              >
                {editable ? 'Save Profile' : 'Edit Profile'}
              </Button>
            )}
          </Stack>
          <Box>
            <SocialButtons editable={editable} />
            <Grid templateColumns={{ base: '1fr', md: 'repeat(6, 1fr)' }} pt={1}>
              <GridItem colSpan={2}>
                <ProfileRoles editable={editable} />
              </GridItem>

              <GridItem colSpan={2}>
                <UserTags editable={editable} />
              </GridItem>
              <GridItem colSpan={1}>
                <Stack direction='column'>
                  <Subheader category='Region' />
                  <Capsule color='#8F9AD2' capName='NA' />
                </Stack>
              </GridItem>
              <GridItem colSpan={1}>
                <UserDiscord
                  editable={editable}
                  initialValue={discord}
                  onSave={handleSaveDiscord}
                />
              </GridItem>
            </Grid>
          </Box>

          <GridItem pt={2}>
            <UserBio
              editable={editable}
              initialValue={bio}
              onSave={handleSaveBio}
            />
          </GridItem>
        </GridItem>

        <GridItem rowSpan={2} colSpan={5}>
          <ProfileBody editable={editable} />
          {/* <VideoReel headerText={'Test Text'} editable={editable} videoData={videoData}/> */}
        </GridItem>
      </Grid>
    </Box>
  );
}