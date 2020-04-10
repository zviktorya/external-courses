function slice(array, begin, end) {
    let result = [];
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
        result.push(array[i]);
    }
    return result;
}
module.exports = slice;