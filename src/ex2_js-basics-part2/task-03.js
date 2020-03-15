function getCountElement(array) {
    let sumEven = 0, sumZero = 0, sumOdd = 0;

    for (let j = 0; j < array.length; j++) {
        if (typeof array[j] === 'number') {
            if (array[j] === 0) {
                sumZero = sumZero + 1;

            } else if (array[j] % 2 === 0) {
                sumEven++;
            } else {
                sumOdd++;
            }
        }
    };
    return [sumEven, sumOdd, sumZero];
};
module.exports = getCountElement;