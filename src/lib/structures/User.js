/**
 * Tatsumaki User
 */
class User {

    /**
     * @param {Object} data Data from the api
     */
    constructor(data) {
        /**
         * Title box
         * @type {String}
         */
        this.title = data.title;
        /**
         * Credits that you use to purchase things from Tatsumaki bot.
         * @type {Number}
         */
        this.credits = data.credits;
        /**
         * The user's equipped background name
         * @type {String}
         */
        this.background = data.background;
        /**
         * The user's username
         * @type {String}
         */
        this.name = data.name;
        /**
         * Array of badges the user has equipped
         * @type {Array<String|null>}
         */
        this.badges = data.badgeSlots;
        /**
         * Global rank
         * @type {Number}
         */
        this.rank = data.rank;
        /**
         * Global level
         * @type {Number}
         */
        this.level = data.level;
        /**
         * Array of currentXp and level till next level up
         * @type {Array<Number>}
         */
        this.xp = data.xp;
        /**
         * The user's current xp
         * @type {Number}
         */
        this.currentXp = data.xp[0]; // eslint-disable-line
        /**
         * The xp till the user's next level up
         * @type {Number}
         */
        this.nextLevelUpXp = data.xp[1]; // eslint-disable-line
        /**
         * The user's global total xp
         * @type {Number}
         */
        this.totalxp = data.total_xp;
        /**
         * The number of reputation points the user has
         * @type {Number}
         */
        this.reputation = data.reputation;
        /**
         * The user's info box
         * @type {String}
         */
        this.info = data.info_box;
        /**
         * The user's avatar from discord
         * @type {String}
         */
        this.avatar = data.avatar_url;

        Object.defineProperty(this, 'rawData', { value: data });
    }

}

module.exports = User;
