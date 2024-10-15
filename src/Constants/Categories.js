const CATEGORIES = {
    MUSIC: "music",
    SPORT_AND_LEISURE: "sport_and_leisure",
    FILM_AND_TV: "film_and_tv", 
    ARTS_AND_LITERATURE: "arts_and_literature",
    HISTORY: "history",
    SOCIETY_AND_CULTURE: "society_and_culture",
    SCIENCE: "science",
    GEOGRAPHY: "geography",
    FOOD_AND_DRINL: "food_and_drink",
    GENERAL_KNOWLEDGE: "general_knowledge",
    RANDOM: "random",
};

function extractRandomCategory() {
    const categories = Object.values(CATEGORIES).filter(category => category !== CATEGORIES.RANDOM);
    const randomIndex = generateRandomInteger(0, categories.length - 1);
    return categories[randomIndex];
}

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



export default CATEGORIES;
export {extractRandomCategory};