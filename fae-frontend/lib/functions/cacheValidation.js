export function cacheValidation(expirationDate) {
    const currentTime = new Date().getTime()
    return currentTime > new Date(expirationDate).getTime()
}