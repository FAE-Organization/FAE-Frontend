// TODO: Populate with fake data for testing

// Structure of server-side for profile page
export const TEST_PROFILE_RESPONSE_DATA = [{
    username: 'Hemmys',
    pronouns: ['She', 'Her'],
    bio: 'these are a lot of words. Max 300 chars?',
    twitch: 'https://www.twitch.tv/hemmys',
    youtube: 'https://www.youtube.com/hemmys',
    discord: 'https://www.discord.com/user/hemmys',
    twitter: 'https://www.twitter.com/hemmys',
    profilePic: '/profile-test-images/userMockIcon_1.png',
    email: 'hemmys@gmail.com',
    roles: ['Caster', 'Observer', 'Host'],
    tags: ['Collegiate', 'Flexible Pay'],
    salary: 25,
    events: [{ imageUrl: '/designMockimage_1.png', eventTitle: 'Astral Clash 2022', gameTitle: 'Valorant', userRole: 'Caster' }],
}]


// Data for profile pronoun popover component
export const PRONOUN_DATA = ['She', 'Her', 'Hers', 'He', 'Him', 'His', 'They', 'Them', 'Theirs', 'All', 'Any', 'Other'];

// Data for profile Showcase popover component
export const SHOWCASE_DATA = ['Articles', 'Design Portfolio', 'Notable Events', 'Casting Reel', 'Editing Reel', 'Observer Reel'];


// Data for profile roles popover component
export const ROLES_DATA = [
        {
            heading: 'broadcast',
            options: ['Caster', 'Host', 'Observer', 'Producer', 'Replay Operator', 'Technical Director'],
        },
        {
            heading: 'business operations',
            options: ['Administrative', 'Finance', 'Information Technology', 'Operations', 'Project Management'],
        },
        {
            heading: 'communications & marketing',
            options: ['Community Management', 'Marketing', 'Partnerships', 'Social Media'],
        },
        {
            heading: 'content creation',
            options: ['Editorial', 'Graphic Design', 'Motion Design', 'Photography', 'Videography', 'Video Editing'],
        },
        {
            heading: 'performance',
            options: ['Coaching', 'Health', 'Psychology', 'Team Manager'],
        },
        {
            heading: 'tournaments & events',
            options: ['Event Organizer', 'Facilities Management', 'Tournament Admin', 'Tournament Organizer'],
        },
    ];

// Data for past events on profile
export const EVENT_DATA = [
    {
        imageUrl: '/profile-test-images/eventMockImage_1.png',
        eventTitle: 'Calling All Heroes 2022',
        gameTitle: 'Overwatch 2',
        userRole: 'Tournament Admin',
    },
    {
        imageUrl: '/profile-test-images/eventMockImage_2.png',
        eventTitle: 'Astral Clash 2022',
        gameTitle: 'Valorant',
        userRole: 'Observer',
    },
];

// Data for Design Portfolio on profile
export const DESIGN_DATA = [
    '/profile-test-images/designMockImage_1.png',
    '/profile-test-images/designMockImage_2.png',
    '/profile-test-images/designMockImage_3.png',
    '/profile-test-images/designMockImage_4.png', 
];

// FAKE EVENT DATA
//
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