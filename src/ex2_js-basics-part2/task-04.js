function areElementSame(array) {
    const firstElement = array[0];
    let result = true;

    for (let i = 1; i < array.length; i++) {
        if (firstElement !== array[i]) {
            result = false;
        }
    }
    return result;
}
module.exports = areElementSame;