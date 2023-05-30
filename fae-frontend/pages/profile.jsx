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
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '@/lib/redux/userProfileSlice';
import { saveUserProfile } from '@/lib/redux/userProfileSlice';


export default function Profile( props ) {
    const [editable, setEditable] = useState(false);
    const dispatch = useDispatch();
    
    const userProfileData = useSelector((state) => state.userProfile.userData);

    useEffect(() => {
        dispatch(setUserData(props.userResponse));
    }, []);

    const handleSaveProfile = async () => {
        const userId = userProfileData.id;
        await dispatch(saveUserProfile(userId));
      };
      

    function handleEditProfile() {
        // handle toggling editable --> static
        if (editable === true) {
            handleSaveProfile();
            setEditable(!editable);
        } else {
        // handle static -> editable
            setEditable(!editable);
        }
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
                />
            </GridItem>

                {/* Profile Header */}
                <GridItem colSpan={4} pt={4} px={3}>
                    <Flex justify={'space-between'} >
                        <Flex direction='row' spacing={3} justify={'center'} align='center' gap={3}>
                            <ProfileUsername editable={editable} />
                            <PronounSelection editable={editable} />
                            <Salary editable={editable} />
                        </Flex>
                
                        {/* Edit mode button -- Hidden on small screens
                            TODO: only show if this is the logged-in user's profile page
                        */}
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
                        <SocialButtons editable={editable} />
                        <Grid templateColumns={{base: '1fr', md: 'repeat(6, 1fr)'}} pt={1}>
                            <GridItem colSpan={2}>
                                <ProfileRoles editable={editable} />
                            </GridItem>

                            <GridItem colSpan={2}>
                                <UserTags editable={editable} />
                            </GridItem>
                            <GridItem colSpan={1}>
                                <RegionSelection editable={editable } />
                            </GridItem>
                            <GridItem colSpan={1}>
                                <UserDiscord editable={editable} />
                            </GridItem>
                        </Grid>
                    </Box>

                    <GridItem pt={2}>
                        <UserBio editable={editable} />
                    </GridItem>
                </GridItem> 
                
                <GridItem rowSpan={2} colSpan={5} >
                    <ProfileBody editable={editable} />
                </GridItem>
            </Grid>
        </Box>
    );
}

export async function getServerSideProps({ query }) {
    // if null render paul
    const userId = query?.id ?? '645163982b93e4decabe5bae'; 

    const data = await (await fetch(
        process.env.NODE_ENV == 'development' ?
        'http://localhost:3001/api/filter' : `${process.env.NEXT_PUBLIC_BACKEND_BASE_URI}/api/filter`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })).json()

    return {
        props: { userResponse: data }
    }
}