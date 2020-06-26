const Discord = require('discord.js');

module.exports.run = async (bot, msg, arg, storage, Status) => {
      if (storage.allowed.includes(msg.author.id)) Status = "OK"
  if (Status === 0){
msg.channel.send(global.ee1)
} else if (Status === 2){
msg.channel.send(global.ee3)
} else {
  let taggedUser = msg.mentions.users.first() || msg.author;
  
  let embed = new Discord.RichEmbed()
  .setColor('#f28da5')
  .setImage(taggedUser.displayAvatarURL)
  .setTitle(`${taggedUser.tag}'s Avatar`)
  
  msg.channel.send(embed);  
  }
}