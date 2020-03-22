function createDeepCopyObject(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    let result;
    if (obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = createDeepCopyObject(obj[key]);
        }
    }
    return result;
}
module.exports = createDeepCopyObject;