var discord = require("discord.js");
exports.run = async (client, message, args, storage, Status) => {
      if (storage.allowed.includes(message.author.id)) Status = "OK"
if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
    var embed = new discord.RichEmbed()
      .setAuthor("Commands")
      .setColor("#4682bf")
      .addField("Economy", `
${global.prefix}add <user> <amount> (Admin Only)
${global.prefix}bal <user/optional>
${global.prefix}balance <user/optional>
${global.prefix}beg
${global.prefix}crime
${global.prefix}daily
${global.prefix}dep <amount/all>
${global.prefix}deposit <amount/all>
${global.prefix}gamble <amount> (Limit: 500 ${storage.c})
${global.prefix}pay <user> <amount>
${global.prefix}redeem <code>
${global.prefix}remove <user> <amount> (Admin Only)
${global.prefix}slots <amount> (Limit: 2K ${storage.c})
${global.prefix}store <page>
${global.prefix}store buy <page> <id>
${global.prefix}tokens <crime/gamble/slot> (Claim each per day)
${global.prefix}with <amount>
${global.prefix}withdraw <amount>
${global.prefix}work <job/optional>
`)
      .addField("You", `
${global.prefix}av <user/optional>
${global.prefix}avatar <user/optional>
${global.prefix}profile <user/optional>
`)
      .addField("Utility", `
${global.prefix}botinfo
${global.prefix}clear <amount> (Admin Only)
${global.prefix}createrole <name> <color> (Admin Only)
${global.prefix}restart (Admin Only)
${global.prefix}serverInfo
${global.prefix}uptime
`)
      .addField("Other/Fun", `
${global.prefix}8ball <message>
${global.prefix}cf
`)
    message.channel.send(embed);
  }
};