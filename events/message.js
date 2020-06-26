const fs = require("fs");
fs.readFile("./data.json", (err, data) => {
  if (err) throw err;
  let t = JSON.parse(data);
  global.prefix = t.prefix;
  let prefix = global.prefix;
  const Discord = require("discord.js");
  global.ee1 = new Discord.RichEmbed()
    .setAuthor("Error")
    .setTitle("AC Bot is currently under maintenance")
    .setFooter("Please check back later.")
    .setColor("RED");
  global.ee2 = new Discord.RichEmbed()
    .setAuthor("Error")
    .setTitle("You do not have permission to use this command!")
    .setFooter("Please contact an administrator for help.")
    .setColor("RED");
  global.ee3 = new Discord.RichEmbed()
    .setAuthor("Error")
    .setTitle("Invalid Request was sen't")
    .setFooter("Please check back later.")
    .setColor("RED");
  exports.run = async (client, message) => {
    global.storage = t;
    let storage = global.storage;
    var db = require("quick.db");
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
      let messageArray = message.content.split(" ");
      var cmd = messageArray[0];
      let args = messageArray.slice(1).join(" ");
      // 0: Updating //
      // 1: Online //
      // 2: Unavailable //
      let Status = 1;
      let commandfile = client.commands.get(cmd.slice(prefix.length));
      if (!commandfile) return;
      commandfile.run(client, message, args, storage, Status);
    }
  };
});
