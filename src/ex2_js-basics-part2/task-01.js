function checkNumbOrStr(arg) {
    if (typeof arg === 'number' && !isNaN(arg)) {
        return 'number';
    } else if (typeof arg === 'string') {
        return 'string';
    }
    return undefined;
}
module.exports = checkNumbOrStr;