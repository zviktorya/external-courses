function outputProperty(obj) {
    for (let key in obj) {
        console.log(key, obj[key]);
    };
    return undefined;
};
module.exports = outputProperty;