import { useState } from 'react';
import { Button, Flex, Box, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
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
                        test={1}
                    />
                </GridItem>

                {/* Profile Header */}
                <GridItem colSpan={4} pt={4} px={3}>
                    <Flex justify={'space-between'} >
                        <Flex direction='row' spacing={3} justify={'center'} align='center' gap={3}>
                            <ProfileUsername editable={editable} test={1} />
                            <PronounSelection editable={editable} test={1} />
                            <Salary editable={editable} />
                        </Flex>

                        {/* Edit mode button -- Hidden on small screens */}
                    </Flex>


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
                                <RegionSelection editable={editable} />
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

export const PAUL_TEST_PROFILE_RESPONSE_DATA = [{
    username: 'Paul',
    pronouns: ['They', 'Them'],
    bio: 'these are a lot of words. Max 300 chars?',
    twitch: 'https://www.twitch.tv/hemmys',
    youtube: 'https://www.youtube.com/hemmys',
    twitter: 'https://www.twitter.com/hemmys',
    profilePic: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    email: 'hemmys@gmail.com',
    roles: ['Caster', 'Observer', 'Host'],
    tags: ['Collegiate', 'Flexible Pay'],
    salary: 25,
    events: [{
        id: 1,
        thumbnail: '/profile-test-images/eventMockimage_1.png',
        title: 'Race to World First 2022',
        subtitle: 'World of Warcraft',
        role: 'Caster'
    }],

    // Added these manually, not representative of DB:
    showcase: ['Notable Events', 'Observer Reel', 'Editing Reel', 'Design Portfolio'],
    articles: [{
        id: 1,
        title: 'Valorant Tournament 2019',
        date: '05/10/2023',
        thumbnail: '/profile-test-images/eventMockimage_3.png',
        URL: 'https://esportsinsider.com/'
    }],
    observer: 'https://www.youtube.com/watch?v=K1JMtq5RQx4',
    editing: 'https://www.youtube.com/watch?v=zvnQxjvq0Dc',
    casting: 'https://www.youtube.com/watch?v=zvnQxjvq0Dc',
    design: [
        '/profile-test-images/designMockimage_4.png',
        '/profile-test-images/designMockimage_1.png',
        '/profile-test-images/designMockimage_2.png',
        '/profile-test-images/designMockimage_3.png',
    ],
    region: 'NA',
    discord: 'hemmys#1131',
}]