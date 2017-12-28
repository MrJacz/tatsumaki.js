const snekfetch = require("snekfetch");
const Util = require("./Util/Util");
const User = require("./structures/User");

/**
 * Tatsumaki API wrapper client used for interacting with Tatsumaki's api.
 */
class Client {

    /**
     * @param {String} key Api key for the Tatsumaki.js api
     */
    constructor(key) {
        if (!key) throw new Error(`The api key must be specified for the Tatsumaki.js API wrapper to work`);
        if (typeof key !== "string") throw new Error("The api key must be a String");
        /**
         * The apikey for the client
         * @type {String}
         */
        this.key = key;
        /**
         * Base url for the client
         * @type {String}
         * @private
         */
        this.baseUrl = `https://api.tatsumaki.xyz/`;
    }

    /**
     * Fetchs a user for the Tatsumaki API
     * @param {String} userid ID of the user
     * @returns {Promise<User>}
     */
    user(userid) {
        if (!userid) throw new Error(`userid must be specified`);
        return this._get(`users/${userid}`, User);
    }

    /**
     * Used for making get requests to the Tatsumaki api
     * @param {String} endpoint Endpoint to make request to
     * @param {Class} Classobj Class object
     * @returns {Promise<*>}
     * @private
     */
    _get(endpoint, Classobj) {
        return new Promise((resolve, reject) => {
            snekfetch.get(`${this.baseUrl}${endpoint}`)
                .set("Authorization", this.key)
                .then(res => {
                    if (res.status !== 200) return reject(res);
                    return resolve(Classobj && Util.isClass(Classobj) ? new Classobj(res.body) : res.body);
                }).catch(err => reject(err));
        });
    }

}

module.exports = Client;
