export default function Users(req, res) {

    // const data = JSON.parse(req.query)
    // nned body-parser
    // const { subcategories } = req.body
    // console.log(JSON.parse(req.body))

    // const parsedSubcategories = subcategories ? (
    //     subcategories.split(',')
    // ) : undefined

    const tempDB = [
        {
            id: '1',
            username: 'asa',
            pronouns: ['any', 'all'],
            roles: ['observer', 'graphic designer'],
            region: 'SA',
            notableEvents: ['VCT Masters 2022', 'VCT Challengers 2023'],
            tags: ['English', 'Portugese', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 40,
                currency: 'usd'
            }
        },
        {
            id: '2',
            username: 'belle',
            pronouns: ['she', 'they'],
            roles: ['observer', 'graphic designer'],
            region: 'SA',
            notableEvents: ['VCT Masters 2022', 'VCT Challengers 2023'],
            tags: ['AAPI', 'Collegiate', 'FPS', 'FE/NB'],
            compensation: {
                type: 'hr',
                amount: 40,
                currency: 'usd'
            }
        },
        {
            id: '3',
            username: 'Brian S.',
            pronouns: ['he', 'him'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'AS',
            notableEvents: ['VCT LOCK//IN', 'Naraka 2022 Morus Cup'],
            tags: ['Flexible Schedule'],
            compensation: {
                type: 'hr',
                amount: 35,
                currency: 'usd'
            }
        },
        {
            id: '4',
            username: 'hemmys',
            pronouns: ['any', 'all'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'NA',
            notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
            tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 30,
                currency: 'usd'
            }
        },
        {
            id: '5',
            username: 'Jaay',
            pronouns: ['he', 'him'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'NA',
            notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
            tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 30,
                currency: 'usd'
            }
        },
        {
            id: '6',
            username: 'JoannaCasts',
            pronouns: ['they', 'them'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'NA',
            notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
            tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 30,
                currency: 'usd'
            }
        },
        {
            id: '7',
            username: 'Nixy',
            pronouns: ['he', 'they'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'NA',
            notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
            tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 30,
                currency: 'usd'
            }
        },
        {
            id: '8',
            username: 'powy',
            pronouns: ['she', 'her'],
            roles: ['observer', 'tournament admin', 'producer'],
            region: 'NA',
            notableEvents: ['VCT Game Changers Academy', 'Astral Clash', 'Calling All Heroes'],
            tags: ['FE/NB', 'Collegiate', 'Flexible Pay'],
            compensation: {
                type: 'hr',
                amount: 30,
                currency: 'usd'
            }
        },
    ]


    // const filteredUsers = parsedSubcategories ? tempDB.filter(user => {
    //     return user.roles.some(role => subcategories.includes(role));
    // }) : tempDB;


    // console.log(filteredUsers.length)


    res.status(200).json(tempDB)
}