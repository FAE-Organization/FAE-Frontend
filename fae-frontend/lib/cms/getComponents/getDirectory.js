import { client } from "../client";

export async function getDirectory() {
    const rawData = (await client.getEntries({
        content_type: 'directory',
        include: 10,
        select: 'fields'
    })).items[0].fields.directoryCards

    const data = rawData.map(entry => {
        return {
            title: entry.fields.title,
            description: entry.fields.description,
            image: {
                src: 'https:' + entry.fields.image.fields.image.fields.file.url,
                alt: 'temp alt, please add to cms'
            },
            subcategories: [...entry.fields.subcategories]
        }
    })

    return data
}