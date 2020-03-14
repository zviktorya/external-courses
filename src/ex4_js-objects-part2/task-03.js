function deleteFirstLastSpaces(str) {
    function deleteFirstSpace(str) {
        let chars = str.split('');
        chars.splice(str.indexOf(' '), 1);
        return chars.join('');
    }

    function deleteLastSpace(str) {
        let chars = str.split('');
        chars.splice(str.lastIndexOf(' '), 1);
        return chars.join('');
    }
    let newStr = str;
    newStr = deleteFirstSpace(newStr);
    newStr = deleteLastSpace(newStr);
    return newStr;
}
module.exports = deleteFirstLastSpaces;