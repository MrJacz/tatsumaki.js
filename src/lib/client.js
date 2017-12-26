const snekfetch = require("snekfetch");
const User = require("./structures/User");

class Client {

    constructor(key) {
        if (!key) throw new Error(`The api key must be specified for the Tatsumaki.js API wrapper to work`);
        if (typeof key !== "string") throw new Error("The api key must be a String");

        this.key = key;

        this.baseUrl = `https://api.tatsumaki.xyz/`;
    }

    user(userid) {
        if (!userid) throw new Error(`userid must be specified`);
        return new Promise((resolve, reject) => {
            snekfetch.get(`${this.baseUrl}users/${userid}`)
                .set("Authorization", this.key)
                .then(res => {
                    if (res.status !== 200) return reject(res);
                    return resolve(new User(res.body));
                }).catch(err => reject(err));
        });
    }

    _get(endpoint) {
        return new Promise((resolve, reject) => {
            snekfetch.get(`${this.baseUrl}${endpoint}`)
                .set("Authorization", this.key)
                .then(res => {
                    if (res.status !== 200) return reject(res);
                    return resolve(res.body);
                }).catch(err => reject(err));
        });
    }

}

module.exports = Client;
