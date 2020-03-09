function searchProperty(property, obj) {
    return Object.getPrototypeOf(obj)[property];
}
module.exports = searchProperty;