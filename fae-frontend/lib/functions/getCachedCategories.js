import { getSubcategories } from "../cms/getComponents/getSubcategories";
import { cacheValidation } from "./cacheValidation";

export async function getCachedCategories(name) {

    const cachedData = localStorage.getItem(`categories_${name}`);
    if (cachedData && !cacheValidation(cachedData.expires)) {
        return JSON.parse(cachedData).data;
    } else {
        const categories = await getSubcategories(name);
        const expirationTime = new Date().getTime() + 36000;
        localStorage.setItem(`categories_${name}`, JSON.stringify({ data: categories, expires: expirationTime }));
        return categories;
    }
}