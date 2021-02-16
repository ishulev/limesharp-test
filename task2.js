// Stolen from https://dev.to/haakonhr/capitalize-first-letter-in-javascript-38f7
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function reformat(str) {
    const lowerCasedStr = str.toLowerCase();
    // Regex stolen from https://stackoverflow.com/a/44474755/5396280
    const vowelLessStr = lowerCasedStr.replace(/[aeiou]/ig, "");
    return capitalizeFirstLetter(vowelLessStr);
}

console.log(reformat("liMeSHArp DeveLoper TEST"));