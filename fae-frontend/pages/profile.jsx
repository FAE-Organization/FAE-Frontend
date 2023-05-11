import { useState } from 'react';
import { Button, Box } from '@chakra-ui/react';
import ProfilePicture from '@/components/ui/profile/UserBanner/profile-picture';
import ProfileUsername from '@/components/ui/profile/UserBanner/profile-username';
import PopoverButton from '@/components/ui/profile/UserBanner/profile-pronouns';
import Salary from '@/components/ui/profile/UserBanner/profile-salary';
import UserBio from '@/components/ui/profile/UserBanner/profile-bio';
import UserDiscord from '@/components/ui/profile/UserBanner/profile-discord';
import ProfileRoles from '@/components/ui/profile/UserBanner/profile-roles';
import UserTags from '@/components/ui/profile/UserBanner/profile-tags';
// import { ROLES_DATA } from '@/components/ui/profile/TEST_DATA'

export default function Profile() {
    const [editable, setEditable] = useState(false);
    const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150');
    const [username, setUsername] = useState('Hemmys');
    const [bio, setBio] = useState('this is a test!');
    const [discord, setDiscord] = useState('user#0000');
    const [roles, setRoles] = useState(ROLES_DATA);
    const PRONOUN_DATA = ['She', 'Her', 'Hers', 'He', 'Him', 'His', 'They', 'Them', 'Theirs', 'All', 'Any', 'Other'];


    // TODO: Clean this up later!!

    function handleEditProfile() {
        setEditable(!editable);
    }

    function handleUsernameChange(value) {
        setUsername(value);
    }

    function handlePronounChange(value) {
        setPronouns(value);
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

    function handleRoleSelect(heading, option) {
        const existingIndex = selectedRoles.findIndex(role => role.heading === heading);
        if (existingIndex !== -1) {
            // Remove role if it was already selected
            const newSelectedRoles = [...selectedRoles];
            newSelectedRoles[existingIndex].options = newSelectedRoles[existingIndex].options.filter(selectedOption => selectedOption !== option);
            setSelectedRoles(newSelectedRoles);
        } else {
            // Add new role
            setSelectedRoles([...selectedRoles, { heading, options: [option] }]);
        }
    }

    return (
        <Box>
            {/* Edit mode button */}
            <Button
                onClick={handleEditProfile}
                variant={editable ? 'solid' : 'outline'}
                colorScheme={'purple'}>
                {editable ? 'Save Profile' : 'Edit Profile'}
            </Button>

            {/* TODO: Modify/clean components to reduce repetitve code */}
            <ProfilePicture
                editable={editable}
                value={profilePicture}
                onChange={handleProfilePictureChange} />
            <ProfileUsername
                editable={editable}
                value={username}
                onChange={handleUsernameChange} />
            <PopoverButton
                editable={editable}
                items={PRONOUN_DATA}
                onChange={handlePronounChange} />
            <Salary
                editable={editable}
                onChange={handlePronounChange} />
            <UserTags
                editable={editable}
                onChange={handlePronounChange}
            />
            <ProfileRoles
                editable={editable}
                roles={ROLES_DATA}
                selectedRoles={[]} />
            <UserBio
                editable={editable}
                initialValue={bio}
                onSave={handleSaveBio} />
            <UserDiscord
                editable={editable}
                initialValue={discord}
                onSave={handleSaveDiscord} />
        </Box>
    );
}

// Structure of server-side for profile page
const TEST_PROFILE_RESPONSE_DATA = [{
    username: 'Hemmys',
    pronouns: ['she', 'her'],
    bio: 'these are a lot of words. Max 300 chars?',
    twitch: 'https://www.twitch.tv/hemmys',
    youtube: 'https://www.youtube.com/hemmys',
    discord: 'https://www.discord.com/user/hemmys',
    twitter: 'https://www.twitter.com/hemmys',
    profilePic: '/profile-test-images/hemmys.png',
    email: 'hemmys@gmail.com',
    roles: ['Caster', 'Observer', 'Host'],
    tags: ['Collegiate', 'Flexible Pay'],
    salary: '25',
    events: [{ imageUrl: '/designMockimage_1.png', eventTitle: 'Astral Clash 2022', gameTitle: 'Valorant', userRole: 'Caster' }],
}];

const ROLES_DATA = [
    {
        heading: 'broadcast',
        options: ['caster', 'host', 'observer', 'producer', 'replay operator', 'technical director'],
    },
    {
        heading: 'business operations',
        options: ['administrative', 'finance', 'information technology', 'operations', 'project management'],
    },
    {
        heading: 'communications & marketing',
        options: ['community management', 'marketing', 'partnerships', 'social media'],
    },
    {
        heading: 'content creation',
        options: ['editorial', 'graphic design', 'motion design', 'photography', 'videography', 'video editing'],
    },
    {
        heading: 'performance',
        options: ['coaching', 'health', 'psychology', 'team manager'],
    },
    {
        heading: 'tournaments & events',
        options: ['event organizer', 'facilities management', 'tournament admin', 'tournament organizer'],
    },
];