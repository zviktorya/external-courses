function checkObjectProperty(string, obj) {
    for (let key in obj) {
        if (key === string) {
            return true;
        }
        return false;
    };
    return undefined;
}
module.exports = checkObjectProperty; 