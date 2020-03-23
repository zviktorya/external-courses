function slice(array, begin, end) {
    let newArray = [];
    let endIndex = end;
    let beginIndex = begin;

    if (begin === undefined) {
        beginIndex = 0;
    }
    if (end === undefined) {
        endIndex = array.length;
    }
    if (begin < 0) {
        beginIndex = array.length + begin;
    }
    if (end < 0) {
        endIndex = array.length + end;
    }
    for (let i = beginIndex; i < endIndex; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}
module.exports = slice;