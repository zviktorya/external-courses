function addSubstringToStringAfterIndex(str, subStr, index) {
    let words = str.split(' ');
    words.splice(index + 1, 0, subStr);
    return words.join(' ');
}

module.exports = addSubstringToStringAfterIndex;