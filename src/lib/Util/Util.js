class Util {

    isClass(input) {
        return typeof input === "function" &&
            typeof input.constructor !== "undefined" &&
            typeof input.constructor.constructor.toString === "function" &&
            input.prototype.constructor.toString().substring(0, 5) === "class";
    }

}

module.exports = new Util();
