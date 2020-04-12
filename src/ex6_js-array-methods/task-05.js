function map(array, callback) {
    let newArray = [];
    array.forEach(function (item, i) {        
        newArray.push(callback(item, i, array));
    });
    
    return newArray;
}
module.exports = map;
