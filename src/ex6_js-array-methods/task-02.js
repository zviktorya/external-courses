function some(array, callback) {
    let result = false;
    array.forEach(function (item, i) {
        if (callback(item, i, array)) {
            result = true;
        }
    });
    return result;
}
module.exports = some;