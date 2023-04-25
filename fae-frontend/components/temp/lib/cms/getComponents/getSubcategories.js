import { client } from "../client";

export async function getSubcategories(name) {
    const rawData = (await client.getEntries({
        content_type: 'directoryCards',
        include: 10,
        select: 'fields',
        'fields.title': `${decodeURIComponent(name)}`
    })).items

    // const data = rawData.map(entry => {
    //     return {
    //         title: entry.fields.title,
    //         description: entry.fields.description,
    //         image: {
    //             src: 'https:' + entry.fields.image.fields.image.fields.file.url,
    //             alt: 'temp alt, please add to cms'
    //         },
    //         subcategories: [...entry.fields.subcategories]
    //     }
    // })

    return rawData
}