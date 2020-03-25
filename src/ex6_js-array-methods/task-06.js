function reduce(array, callback, initialValue) {
    let previousValue;
    let startIndex;
    
    if (initialValue) {
        previousValue = initialValue;
        startIndex = 0;
    } else {
        previousValue = array[0];
        startIndex = 1;
    }

    for (let i = startIndex;i< array.length;i++) {
        previousValue = callback(previousValue, array[i], i, array);
    }

    return previousValue;
}
module.exports = reduce;