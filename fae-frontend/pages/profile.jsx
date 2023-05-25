import { useState } from 'react';
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
                                <UserDiscord
                                    editable={editable}
                                    initialValue={discord}
                                    onSave={handleSaveDiscord} />
                            </GridItem>
                        </Grid>
                    </Box>

                    <GridItem pt={2}>
                        <UserBio
                            editable={editable}
                            initialValue={bio}
                            onSave={handleSaveBio} />
                    </GridItem>
                </GridItem> 
                
                <GridItem rowSpan={2} colSpan={5} >
                    <ProfileBody editable={editable} />
                </GridItem>
            </Grid>
        </Box>
    );
}