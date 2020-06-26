const Discord = require("discord.js");
exports.run = async (client, message, args, storage, Status) => {
      if (storage.allowed.includes(message.author.id)) Status = "OK"
 if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
  
    let owner = client.users.get("574429626085015573")
    let bicon = client.user.displayAvatarURL
    let botembed = new Discord.RichEmbed()
 .setAuthor("Bot Information")
  .setColor("#f28da5")
   .addField("Bot Owner", `${owner}`)
    .addField("Created At", client.user.createdAt)
   .setFooter('Bot ID: 724342197427634177', client.user.displayAvatarURL)
    .addField('Version', 'v1.2.6')
    .addField("Total Guilds", `${client.guilds.size}`)
    .addField('Total  Users', `${client.users.size}`)
    .setColor('#f28da5')
    message.channel.send(botembed);
}
}