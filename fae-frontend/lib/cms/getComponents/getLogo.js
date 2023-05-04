import { client } from "../client";

export async function getLogo() {
    const data = (await client.getEntries({
        content_type: 'logo',
        include: 10,
        select: 'fields',
    })).items[0]

    return data.fields.logo
}