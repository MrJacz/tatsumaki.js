/**
 * Tatsumaki User
 */
class User {

    constructor(data) {
        this.title = data.title;
        this.credits = data.credits;
        this.background = data.background;
        this.name = data.name;
        this.badges = data.badgeSlots;
        this.rank = data.rank;
        this.level = data.level;
        this.xp = data.xp;
        this.currentXp = data.xp[0]; // eslint-disable-line
        this.nextLevelUpXp = data.xp[1]; // eslint-disable-line
        this.totalxp = data.total_xp;
        this.reputation = data.reputation;
        this.info = data.info_box;
        this.avatar = data.avatar_url;

        Object.defineProperty(this, "rawData", { value: data });
    }

}

module.exports = User;
