import { client } from "../client";

export async function getSubcategories(name) {
    const data = (await client.getEntries({
        content_type: 'directoryCards',
        include: 10,
        select: 'fields',
        'fields.title': `${decodeURIComponent(name)}`
    })).items[0].fields.subcategories

    return data
}