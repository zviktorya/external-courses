function countEachSymbol(str) {
    let array = str.split(''), countEachElement = {};

    for (i = 0; i < array.length; i++) {
        if (countEachElement[array[i]]) {
            countEachElement[array[i]]++;
        } else {
            countEachElement[array[i]] = 1;
        }
    }
    for (let key in countEachElement) {
        if (countEachElement.hasOwnProperty(key)) {
            console.log(`${key}:${countEachSymbol[key]}`);
        }
    }
}
module.exports = countEachSymbol;