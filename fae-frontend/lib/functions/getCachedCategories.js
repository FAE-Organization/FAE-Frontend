import { getSubcategories } from "../cms/getComponents/getSubcategories";
import { cacheValidation } from "./cacheValidation";

async function getCachedCategories(name) {

    const cachedData = localStorage.getItem(`categories_${name}`);
    if (cachedData) {

        return JSON.parse(cachedData);
    } else {
        const categories = await getSubcategories(name);
        const expirationTime = new Date().getTime() + 3600000; // 1 hour in milliseconds
        localStorage.setItem(`categories_${name}`, JSON.stringify({ data: categories, expires: expirationTime }));
        return categories;
    }
}

export async function fetchAndDisplayCategories(name) {
    const cachedData = await getCachedCategories(name);
    if (cacheValidation(cachedData.expires)) {
        // If cache has expired, fetch fresh data from CMS and update cache
        const categories = await getSubcategories(name);

        const expirationTime = new Date().getTime() + 3600000; // 1 hour in milliseconds
        localStorage.setItem(`categories_${name}`, JSON.stringify({ data: categories, expires: expirationTime }));

        console.log('Categories:', categories);
        return categories
    } else {
        console.log('Categories (cached):', cachedData.data);
        return cachedData.data
    }
}