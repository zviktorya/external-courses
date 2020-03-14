function convertFirstCharsToUpperCase(str) {
    const words = str.split(' ');
    const uppercaseWords = words.map(toUpperCaseFirstChar);
    return uppercaseWords.join(' ');

    function toUpperCaseFirstChar(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
module.exports = convertFirstCharsToUpperCase;