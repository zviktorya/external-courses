function filter(array, callback) {
    let newArray = [];
    array.forEach(function (item, i) {
        if (callback(item, i, array)) {
            newArray.push(item);
        }
    });
    return newArray;
}
module.exports = filter;