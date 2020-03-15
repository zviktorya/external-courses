function getRandomIntegerInclusive() {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * 101);
}
module.exports = getRandomIntegerInclusive;