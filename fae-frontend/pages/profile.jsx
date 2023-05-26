import { useState, useEffect } from 'react';
import { Button, Flex, Box, Grid, GridItem, useBreakpointValue} from '@chakra-ui/react';
import ProfilePicture from '@/components/ui/profile/UserBanner/profile-picture';
import ProfileUsername from '@/components/ui/profile/UserBanner/profile-username';
import PronounSelection from '@/components/ui/profile/UserBanner/profile-pronouns';
import Salary from '@/components/ui/profile/UserBanner/profile-salary';
import UserBio from '@/components/ui/profile/UserBanner/profile-bio';
import UserDiscord from '@/components/ui/profile/UserBanner/profile-discord';
import ProfileRoles from '@/components/ui/profile/UserBanner/profile-roles';
import UserTags from '@/components/ui/profile/UserBanner/profile-tags';
import ProfileBody from '@/components/ui/profile/ProfileBody/profile-body';
import SocialButtons from '@/components/ui/profile/UserBanner/social-media-buttons';
import RegionSelection from '@/components/ui/profile/UserBanner/region';
import {useSearchParams} from 'next/navigation'

export default function Profile() {
    const [editable, setEditable] = useState(false);
    const [userData, setUserData] = useState([{}]);
    const searchParams = useSearchParams()
    
    useEffect(() => {
      const getUserProfile = async () => {
        try {
          const id = searchParams.get('id')
          const response = await fetch(`http://localhost:3001/api/profile?id=${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            const data = await response.data.json();
            setUserData(data);
            saveUserDataOnServer(data);
          }
        } catch (error) {
          // Handle error if the fetch request fails
        }
      };
    
      const saveUserDataOnServer = async (data) => {
        try {
          const response = await fetch('http://localhost:3001/api/profile?user=Paul', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (!response.ok) {
            // Handle error if the save request fails
          }
        } catch (error) {
          // Handle error if the save request fails
        }
      };
    
      const retrieveUserDataFromServer = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/profile?user=Paul', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            setUserData(data);
          }
        } catch (error) {
          // Handle error if the retrieve request fails
        }
      };
    
      getUserProfile();
    
      // Retrieve the user data from the server on component mount
      retrieveUserDataFromServer();
    }, [userData]);
    
    // Rest of your component code...
    

    // useEffect(() => {
    //     const getUserProfile = async () => {
    //         const data = await (await fetch(
    //             'http://localhost:3001/api/profile?user=Paul',  {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },  
    //         })).json()

    //         // const data = await (await fetch(
    //         //     'https://fae-backend.onrender.com/api/profile', {
    //         //     method: 'GET',
    //         //     headers: {
    //         //         'Content-Type': 'application/json',
    //         //     },
    //         // }
    //         // )).json()

    //         // dispatch(setUsersByFilter(JSON.parse(data.payload)))
    //         setUserData(data);
            
    //     }
    //     getUserProfile()

    // }, [])

    function handleEditProfile() {
        setEditable(!editable);
    }

    function handleProfilePictureChange(value) {
        setProfilePicture(value);
    }

    const showEditButton = useBreakpointValue({ base: false, lg: true });

    return (
        <Box px={'3rem'} py={'4rem'}>
            <Grid
                templateRows='repeat(3, 1fr)'
                columnGap={5}
                templateColumns='repeat(5, 1fr)'>

            <GridItem >
                <ProfilePicture
                    editable={editable}
                    onChange={handleProfilePictureChange} 
                    userData={userData} 
                />
            </GridItem>

                {/* Profile Header */}
                <GridItem colSpan={4} pt={4} px={3}>
                    <Flex justify={'space-between'} >
                        <Flex direction='row' spacing={3} justify={'center'} align='center' gap={3}>
                            <ProfileUsername editable={editable} userData={userData} />
                            <PronounSelection editable={editable} userData={userData} />
                            <Salary editable={editable} userData={userData} />
                        </Flex>
                
                        {/* Edit mode button -- Hidden on small screens */}
                        {showEditButton && (
                            <Flex>
                                <Button
                                    onClick={handleEditProfile}
                                    variant={editable ? 'solid' : 'outline'}
                                    colorScheme={'purple'}>
                                    {editable ? 'Save Profile' : 'Edit Profile'}
                                </Button>
                            </Flex>
                        )}
                    </Flex>


                    <Box>
                        <SocialButtons editable={editable} userData={userData} />
                        <Grid templateColumns={{base: '1fr', md: 'repeat(6, 1fr)'}} pt={1}>
                            <GridItem colSpan={2}>
                                <ProfileRoles editable={editable} userData={userData} />
                            </GridItem>

                            <GridItem colSpan={2}>
                                <UserTags editable={editable} userData={userData} />
                            </GridItem>
                            <GridItem colSpan={1}>
                                <RegionSelection editable={editable } userData={userData} />
                            </GridItem>
                            <GridItem colSpan={1}>
                                <UserDiscord editable={editable} userData={userData} />
                            </GridItem>
                        </Grid>
                    </Box>

                    <GridItem pt={2}>
                        <UserBio
                            editable={editable}
                            userData={userData}
                        />
                    </GridItem>
                </GridItem> 
                
                <GridItem rowSpan={2} colSpan={5} >
                    <ProfileBody editable={editable} userData={userData} />
                </GridItem>
            </Grid>
        </Box>
    );
}