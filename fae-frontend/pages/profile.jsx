import { useState } from 'react';
import { Button, Flex, Image, TagLabel, Stack, Box, Grid, GridItem, } from '@chakra-ui/react';
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

    return (
        <Box px={'3rem'} py={'4rem'}>
            <Grid
                templateRows='repeat(3, 1fr)'
                columnGap={5}
                templateColumns='repeat(5, 1fr)'>

                <ProfilePicture
                    editable={editable}
                    onChange={handleProfilePictureChange} />

                <GridItem colSpan={4} pt={3} px={3} pb={2}>
                    <Flex justify={'space-between'}>
                        <Stack direction='row' spacing={3} justify={'center'} align='center'>
                            <ProfileUsername editable={editable} />
                            <PronounSelection editable={editable} />
                            <Salary editable={editable} />
                        </Stack>
                

                        {/* Edit mode button -- PUSH TO THE RIGHT */}
                        <Flex>
                            <Button
                                onClick={handleEditProfile}
                                variant={editable ? 'solid' : 'outline'}
                                colorScheme={'purple'}>
                                {editable ? 'Save Profile' : 'Edit Profile'}
                            </Button>
                        </Flex>
                    </Flex>


                    <Box>
                        <Stack>
                            <Image src='/profile-test-images/socialMockImage.png' width='100px' />
                        </Stack>
                        <Grid templateColumns='repeat(6, 1fr)' pt={5}>
                            <GridItem colSpan={2}>
                                <ProfileRoles editable={editable} />
                            </GridItem>

                            <GridItem colSpan={2}>
                                <UserTags editable={editable} />
                            </GridItem>
                            <GridItem colSpan={1}>
                            <Stack direction={'column'}>
                                <Subheader category='Region'/>
                                <Capsule
                                        color='#8F9AD2'
                                        capName={'NA'}
                                />
                            </Stack>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <UserDiscord
                                    editable={editable}
                                    initialValue={discord}
                                    onSave={handleSaveDiscord} />
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box pt={1}>
                        <UserBio
                            editable={editable}
                            initialValue={bio}
                            onSave={handleSaveBio} />
                    </Box>
                </GridItem> 
                
                <GridItem rowSpan={2} colSpan={5} >
                    <ProfileBody editable={editable} />
                </GridItem>
            </Grid>
        </Box>
    );
}