import { Select } from "@chakra-ui/react"
import { getCachedCategories } from "@/lib/functions/getCachedCategories"

export default function SelectTest({
    setCurrentCategory,
    handleChange,
    handleChangeFields,
    setTypes,
    currentCategory,
    allCategories
}) {
    const {
        subcategories,
        game,
        location,
        siteType,
        salary,
        experience
    } = handleChangeFields

    return (
        <Select
            onChange={(event) => {
                setCurrentCategory(event.target.value)
                handleChange({
                    subcategories: subcategories,
                    game: game,
                    location: location,
                    siteType: siteType,
                    salary: salary,
                    experience: experience
                })
                const getSubCategoryOnChange = async (event) => {
                    const data = await getCachedCategories(encodeURIComponent(event.target.value))
                    setTypes(data)
                }
                getSubCategoryOnChange(event)
            }}
            value={currentCategory}
        >
            {allCategories.map((entry, index) => (
                <option
                    key={index}
                    value={entry}
                >
                    {entry}
                </option>
            ))}
        </Select>
    )
}