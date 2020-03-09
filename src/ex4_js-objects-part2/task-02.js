function createEmptyObject() {
    return Object.setPrototypeOf({}, null)
}
module.exports = createEmptyObject;