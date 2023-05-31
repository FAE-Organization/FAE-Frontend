export async function fetchSearch(data) {

    const result = await (await fetch(
        `https://fae-backend.onrender.com/api/filter/search?category=${data.category.toLowerCase()}&value=${data.input.toLowerCase()}`
    )).json()

    return result

}