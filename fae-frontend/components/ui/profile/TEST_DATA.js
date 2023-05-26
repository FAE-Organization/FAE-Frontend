// TODO: Populate with fake data for testing


export const REAL_TEST_MOCK = [
    {
        "id": "645163985070078b811a2e53",
        "username": "Doyle",
        "bio": "Non excepteur dolore elit qui nisi nulla laborum. Velit duis et amet labore irure duis labore in anim in.",
        "pronouns": "he/him",
        "twitch": "twitch.tv",
        "youtube": "youtube.com",
        "discord": "discord.com",
        "twitter": "twitter.com",
        "profilePic": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
        "email": "doylecalderon@slambda.com",
        "salary": {
            "amount": 25,
            "currency": "USD",
            "compensationType": "hourly"
        },
        "game": "CS:GO",
        "region": "EU",
        "experience": "2",
        "siteType": "on-site",
        "tags": [
            "laboris",
            "non",
            "do",
            "sunt"
        ],
        "roles": [
            "producer",
            "broadcaster",
            "producer"
        ],

        // Add support for these to backend: 
        "showcase": ['Notable Events', 'Observer Reel', 'Design Portfolio'],
        "design": [
            '/profile-test-images/designMockimage_1.png',
            '/profile-test-images/designMockimage_2.png',
            '/profile-test-images/designMockimage_3.png',
            '/profile-test-images/designMockimage_4.png'],
        "events": [{
            id: 1,
            thumbnail: '/profile-test-images/eventMockimage_1.png',
            title: 'Astral Clash 2022',
            subtitle: 'Valorant',
            role: 'Caster'
        }],
        "articles": [{
            id: 1,
            title: 'Astral Clash 2022',
            date: '05/10/2023',
            thumbnail: '/profile-test-images/eventMockimage_1.png',
            URL: 'https://esportsinsider.com/'
        }],
        "observer": 'https://www.youtube.com/watch?v=VKKtiLoNYts',
        "editing": 'https://www.youtube.com/watch?v=25Um9QnIO3g',
        "casting": 'https://www.youtube.com/watch?v=Wrdh5HrOCMc',
    }
]

// Structure of server-side for profile page
export const TEST_PROFILE_RESPONSE_DATA = [{
    username: 'Hemmys',
    pronouns: ['She', 'Her'],
    bio: 'these are a lot of words. Max 300 chars?',
    twitch: 'https://www.twitch.tv/hemmys',
    youtube: 'https://www.youtube.com/hemmys',
    twitter: 'https://www.twitter.com/hemmys',
    profilePic: '/profile-test-images/userMockIcon_1.png',
    email: 'hemmys@gmail.com',
    roles: ['Caster', 'Observer', 'Host'],
    tags: ['Collegiate', 'Flexible Pay'],
    salary: 25,
    events: [{
        id: 1,
        thumbnail: '/profile-test-images/eventMockimage_1.png',
        title: 'Astral Clash 2022',
        subtitle: 'Valorant',
        role: 'Caster'
    }],

    // Added these manually, not representative of DB:
    showcase: ['Notable Events', 'Observer Reel', 'Design Portfolio'],
    articles: [{
        id: 1,
        title: 'Astral Clash 2022',
        date: '05/10/2023',
        thumbnail: '/profile-test-images/eventMockimage_1.png',
        URL: 'https://esportsinsider.com/'
    }],
    observer: 'https://www.youtube.com/watch?v=VKKtiLoNYts',
    editing: 'https://www.youtube.com/watch?v=25Um9QnIO3g',
    casting: 'https://www.youtube.com/watch?v=Wrdh5HrOCMc',
    design: [
        '/profile-test-images/designMockimage_1.png',
        '/profile-test-images/designMockimage_2.png',
        '/profile-test-images/designMockimage_3.png',
        '/profile-test-images/designMockimage_4.png'],
    region: 'NA',
    discord: 'hemmys#1131',
}]


// Data for profile pronoun popover component
export const PRONOUN_DATA = ['She', 'Her', 'Hers', 'He', 'Him', 'His', 'They', 'Them', 'Theirs', 'All', 'Any', 'Other'];

// Data for profile Showcase popover component
export const SHOWCASE_DATA = ['Articles', 'Casting Reel', 'Design Portfolio', 'Editing Reel', 'Notable Events', 'Observer Reel'];


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