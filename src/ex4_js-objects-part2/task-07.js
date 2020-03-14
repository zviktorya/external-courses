function truncateLongString(str, number) {
    const strTransformArray = str.split('');
    strTransformArray.splice(number - 1);
    return strTransformArray.join('') + '…';
}
module.exports = truncateLongString;