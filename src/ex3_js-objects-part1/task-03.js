function checkObjectProperty(string, obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === string) {
                return true;
            }
            return false;
        }
    };
    return undefined;
}
module.exports = checkObjectProperty; 