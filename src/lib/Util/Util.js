class Util {

    constructor() {
        throw new Error("This class may not be initiated with new");
    }
    /**
	 * Verify if the input is a class constructor.
	 * @param {Function} input The function to verify
	 * @returns {Boolean}
	 */
    static isClass(input) {
        return typeof input === "function" &&
			typeof input.constructor !== "undefined" &&
			typeof input.constructor.constructor.toString === "function" &&
			input.prototype.constructor.toString().substring(0, 5) === "class";
    }

}

module.exports = Util;
