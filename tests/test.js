const { Client } = require('../src/index');
const client = new Client();
// client.user("272689325521502208").then(data => console.log(data)).catch(err => console.error(err));
client.guildLeaderboard('303195322514014210').then(data => {
    const sorted = data.filter(d => d).sort((a, b) => b.score - a.score);
    console.log(sorted);
}).catch(err => console.error(err));
