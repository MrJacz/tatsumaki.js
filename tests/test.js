const { Client } = require("../src/index");
const client = new Client("");
client.user("272689325521502208").then(data => console.log(data)).catch(err => console.error(err));
