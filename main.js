const Discord = require("discord.js"),
  client = new Discord.Client(),
  fs = require("fs");
require(__dirname + "/request.js"),
  (client.commands = new Discord.Collection()),
  (client.aliases = new Discord.Collection()),
  (client.events = new Discord.Collection());
let bot = client;
fs.readdir("./commands/", (e, n) => {
  if (e) return console.log(e);
  n.forEach(e => {
    if (!e.endsWith(".js")) return;
    let n = require(`./commands/${e}`),
      i = e.split(".")[0];
    client.commands.set(i, n);
  });
}),
  fs.readdir("./events/", (e, n) => {
    e && console.log(e),
      n.forEach(e => {
        let n = require(`./events/${e}`),
          i = e.split(".")[0];
        client.on(i, (...e) => n.run(client, ...e));
      });
  }),
  client.login(process.env.TOKEN);
