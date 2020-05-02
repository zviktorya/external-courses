function Calculator() {
    let state = 0;
 
    this.getResult = function getResult() {
        return state;
    }

    this.reset = function reset() {
        state = 0;
        return this;
    }

    this.add = function add(num) {
        if (isNumber(num)) {
            state = state + num;
        }
        return this;
    }

    this.subtract = function subtract(num) {
        if (isNumber(num)) {
            state = state - num;
        }
        return this;
    }

    this.divide = function divide(num) {
        if (isNumber(num)) {
            state = state / num;
        }
        return this;
    }

    this.multiply = function multiply(num) {
        if (isNumber(num)) {
            state = state * num;
        }
        return this;
    }   

    this.setState = function setState(num) {
        if (isNumber(num)) {
            state = num;
        }
        return this;
    }

    this.fetchData = function fetchData(cb) {
        cb(500);
        return this;
    }

    function isNumber(num) {
        return typeof num === 'number';
    }
    return this;
}
module.exports = new Calculator();

