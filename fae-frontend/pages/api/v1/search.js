export default async function Search() {
    const data = await fetch(`${process.env.BACKEND_BASE_URI}`)

    const dataJSON = await data.json()
    return dataJSON
}