function checkNumbOfStr(arg) {
    if (typeof arg === 'number' && !isNaN(arg)) {
        return 'It is number';
    } else if (typeof arg === 'string') {
        return 'It is string';
    }
}
modul.exports = checkNumbOfStr;