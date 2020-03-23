function Calculator() {
    let state = 0;
 
    function getResult() {
        return state;
    }

    function reset() {
        state = 0;
    }

    function add(num) {
        if (isNumber(num)) {
            state = state + num;
        }
        return add;
    }

    function subtract(num) {
        if (isNumber(num)) {
            state = state - num;
        }
        return subtract;
    }

    function divide(num) {
        if (isNumber(num)) {
            state = state / num;
        }
        return divide;
    }

    function multiply(num) {
        if (isNumber(num)) {
            state = state * num;
        }
        return multiply;
    }

    function isNumber(num) {
        return typeof num === 'number';
    }

    return {
        getResult: getResult,
        reset: reset,
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply
    }
}
module.exports = new Calculator();

