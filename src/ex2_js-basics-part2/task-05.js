function getMaxElement(array) {
    let maxElement = array[0];
    for (i = 1; i < array.length; i++) {
        if (maxElement < array[i]) {
            maxElement = array[i];
        }
    }
    return maxElement;
};
module.exports = getMaxElement;