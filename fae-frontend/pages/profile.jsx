import { useState } from 'react'
import { Box, Text, Input, Button } from '@chakra-ui/react'

// Structure of things
const TEST_PROFILE_RESPONSE_DATA = [{
    username: 'Hemmys',
    pronouns: ['she', 'her'],
    bio: 'these are a lot of words. Max 300 chars?',
    twitch : 'https://www.twitch.tv/hemmys',
    youtube : 'https://www.youtube.com/hemmys',
    discord : 'https://www.discord.com/user/hemmys',
    twitter : 'https://www.twitter.com/hemmys',
    profilePic : '/profile-test-images/hemmys.png',
    email : 'hemmys@gmail.com',
    roles: ['Caster', 'Observer', 'Host'],
    tags: ['Collegiate', 'Flexible Pay'],
    salary: '25',
    events: [{ imageUrl: '/designMockimage_1.png', eventTitle: 'Astral Clash 2022', gameTitle: 'Valorant', userRole: 'Caster' }],
}]

export default function Profile() {
    const [username, setUsername] = useState('Hemmys')
    const [isEditMode, setIsEditMode] = useState(false)

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handleEditModeClick = () => {
        setIsEditMode(!isEditMode)
    }

    return (
        <Box>
            <Text fontSize="2xl">Profile Page</Text>
            <Box mt={4}>
                <Text fontWeight="bold">Username:</Text>
                {isEditMode ? (
                    <Input value={username} onChange={handleUsernameChange} borderColor={'purple.700'} />
                ) : (
                    <Text onClick={handleEditModeClick} cursor="pointer">
                        {username}
                    </Text>
                )}
            </Box>

            {/* Edit profile button */}
            <Button mt={4} onClick={handleEditModeClick} variant={isEditMode ? 'solid' : 'outline'} colorScheme='purple'>
                {isEditMode ? 'Save Profile' : 'Edit Profile'}
            </Button>
        </Box>
    );
};


function editButton() {
    return (
        <Button mt={4} onClick={handleEditModeClick} variant={isEditMode ? 'solid' : 'outline'} colorScheme='purple'>
            {isEditMode ? 'Save Profile' : 'Edit Profile'}
        </Button>
    );
}

// OLD CODE
// import ProfileBody from "@/components/ui/profile/ProfileBody/profile-body";
// import React from "react";
// import { VStack } from "@chakra-ui/react";
// import UserBanner from "@/components/ui/profile/UserBanner/user-banner";

// export default function Profile() {
//     return (
//         <React.Fragment>
//             <VStack padding='50px' >
//                 <UserBanner
//                     roles={['Observer', 'Tournament Admin', 'Producer', 'Social Media']}
//                     tags={['FE/NB', 'Collegiate', 'Flexible Pay']}
//                     region={'NA'}
//                     image={1}
//                     username={'hemmys'}
//                     pronouns={'any/all'}
//                     payrate={'$' + salary + '/hr'}
//                 />
//                 <ProfileBody />
//             </VStack>
//         </React.Fragment >
//     )
// }

// pastEvents = {
//     [
//     {
//         title: 'Calling All Heroes 2022 Overwatch 2',
//         position: 'Tournament Admin',
//         image: {
//             src: '',
//             alt: ''
//         }
//     },
//     {
//         title: 'Calling All Heroes 2022 Overwatch 2',
//         position: 'Tournament Admin',
//         image: {
//             src: '',
//             alt: ''
//         }
//     }
//     ]}
// observerReel = {}