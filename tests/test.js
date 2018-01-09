const { Client } = require('../src/index');
const client = new Client('331aa61c92b78d7a86fd3796ead9cfc1-4961141586f5d7-3a96b95d26f0fb8e4c1080080ccf94fe');
// client.user("272689325521502208").then(data => console.log(data)).catch(err => console.error(err));
client.guildLeaderboard('303195322514014210').then(data => {
    const sorted = data.filter(d => d).sort((a, b) => b.score - a.score);
    console.log(sorted);
}).catch(err => console.error(err));
