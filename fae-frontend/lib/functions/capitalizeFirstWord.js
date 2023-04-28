export const capitalizeFirstWord = (text) => {
    const words = text.split(" "); // Split the string into words
    const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first character of each word
    });
    const capitalizedText = capitalizedWords.join(" "); // Join the words back into a string
    return capitalizedText;
};