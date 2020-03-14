function transformStringToCamelCase(str) {
    const words = str.split(' ');
    const camelCaseWords = words.map(toUpperCase);
    return camelCaseWords.join('');

    function toUpperCase(word, index) {
        if (index === 0) {
            return word[0].toLowerCase() + word.slice(1).toLowerCase();
        } 
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
}
module.exports = transformStringToCamelCase;