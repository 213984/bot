const Discord = require('discord.js');

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
exports.run = async (client, message, args, storage, Status) => {
      if (storage.allowed.includes(message.author.id)) Status = "OK"
if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    
    var emojis;
    if (message.guild.emojis.size === 0) {
        emojis = 'None';
    } else {
        emojis = message.guild.emojis.size;
    }

    const embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL)
  .setThumbnail(message.guild.iconURL)
  .setTimestamp()
  .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("ID", message.guild.id, true)
  .addField("Created", `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true)
  .addField("Region", message.guild.region, true)
  .addField("Roles", message.guild.roles.size, true)
  .addField("Channels", message.guild.channels.size, true)
  .addField("User Count", message.guild.memberCount, true)
  .addField("Member Count", message.guild.members.filter(m => !m.user.bot).size, true)
  .addField("Bot Count", message.guild.members.filter(m => m.user.bot).size, true)
  .addField("Emojis", `${emojis}/100`, true)
  .addField("AFK Timeout", message.guild.afkTimeout / 60 + ' minutes', true)
  .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
  .setColor('#f28da5')
  message.channel.send(embed);
}}