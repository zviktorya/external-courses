function addNewProperty(string, obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key !== string) {
                obj[string] = 'new'; // eslint-disable-line no-param-reassign
            }
        }
    }
    return obj;
}
module.exports = addNewProperty;
