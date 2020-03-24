function every(array, callback) {
    let result = true;
    array.forEach(function (item, i) {
        if (!callback(item, i, array)) {
            result = false;
        }
    });
    return result;
}
module.exports = every;