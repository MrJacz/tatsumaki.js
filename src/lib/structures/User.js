class User {

    constructor(data) {
        this.title = data.title;
        this.credits = data.credits;
        this.background = data.background;
        this.name = data.name;
        this.badges = new Map();
        for (let i = 0; i < data.badgeSlots.length; i++) this.badges.set(i + 1, data.badgeSlots[i]);
        this.rank = data.rank;
        this.level = data.level;
        this.xp = data.xp;
        this.totalXp = data.total_xp;
        this.reputation = data.reputation;
        this.info = data.info_box;
        this.avatar = data.avatar_url;

        this.rawData = data;
    }

}

module.exports = User;
