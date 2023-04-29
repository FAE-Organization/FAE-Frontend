import { getSubcategories } from "../cms/getComponents/getSubcategories";
import { cacheValidation } from "./cacheValidation";

export async function getCachedCategories(name) {

    const cachedData = localStorage.getItem(`categories_${name}`);
    if (cachedData && !cacheValidation(cachedData.expires)) {
        console.log('Categories (cached):', JSON.parse(cachedData).data);
        return JSON.parse(cachedData).data;
    } else {
        const categories = await getSubcategories(name);
        const expirationTime = new Date().getTime() + 3600000; // 1 hour in milliseconds
        localStorage.setItem(`categories_${name}`, JSON.stringify({ data: categories, expires: expirationTime }));
        console.log('Categories:', categories);
        return categories;
    }
}