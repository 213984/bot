const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args, storage, Status) => {
      if (storage.allowed.includes(message.author.id)) Status = "OK"
 if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
  let user = message.author;

  let timeout = storage.CD.beg
  let amount = 100

  let beg = await db.fetch(`beg_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.RichEmbed()
  .setColor("#f28da5")
    .setDescription(`You've already begged recently\n\nBeg again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.RichEmbed()
    .setColor("#f28da5")
  .setDescription(`You've begged and received ${amount} ${storage.c}`);
  message.channel.send(moneyEmbed)
  db.add(`money_${user.id}`, amount)
  db.set(`beg_${user.id}`, Date.now())
  }
};
}