const superagent = require('superagent');
const User = require('./structures/User');

/**
 * Tatsumaki API wrapper client used for interacting with Tatsumaki's api.
 */
class Client {

    /**
     * @param {String} key Api key for the Tatsumaki.js api
     */
    constructor(key) {
        if (!key) throw new Error(`The api key must be specified`);
        if (typeof key !== 'string') throw new Error('The api key must be a String');
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
     * Fetchs a user
     * @param {String} userid ID of the user
     * @returns {Promise<User>}
     */
    user(userid) {
        if (!userid) throw new Error(`userid must be specified`);
        return this._get(`users/${userid}`).then(data => new User(data));
    }

    /**
     * Fetchs guild leaderboard with specified guild id
     * @param {String} guildId Guild ID
     * @param {Number} limit Limit query string
     * @returns {Promise<Array>}
     */
    guildLeaderboard(guildId, limit = 10) {
        if (!guildId) throw new Error(`guildId must be specified`);
        return this._get(`guilds/${guildId}/leaderboard`, { limit: limit });
    }

    /**
     * Used for making get requests to the Tatsumaki api
     * @param {String} endpoint Endpoint to make request to
     * @param {Object} query query
     * @returns {Promise<any>}
     * @private
     */
    _get(endpoint, query) {
        return new Promise((resolve, reject) => {
            superagent.get(`${this.baseUrl}${endpoint}`)
                .set('Authorization', this.key)
                .query(query || {})
                .then(res => {
                    if (res.status !== 200) return reject(res);
                    return resolve(res.body);
                }).catch(err => reject(err));
        });
    }

}

module.exports = Client;
