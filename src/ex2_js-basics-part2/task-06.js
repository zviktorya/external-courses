function definePrimeNumber(number) {
    let isPrime = true;
    if (number > 1000 ||number <2) {
        return 'Данные неверны';
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        return 'Число ' + number + ' - простое число';
    }
    return 'Число ' + number + ' - составное число';
};
module.exports = definePrimeNumber;