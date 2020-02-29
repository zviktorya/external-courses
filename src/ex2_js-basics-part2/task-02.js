function outputOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('Element: ' + array[i]); 
    }
    console.log('Total number of elements: ' + array.length);
    return undefined;
}
module.exports = outputOfArray;