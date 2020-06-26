const discord = require('discord.js')
exports.run = async (client, message, args, storage) => {
  var allowed = storage.allowed
  if (allowed.includes(message.author.id)){
  var p11 = message.content.split(" ").splice(1, 2).join(" ")
  var p1 = p11.split(" ").splice(0, 1).join(" ")
  var p2 = message.content.split(" ").splice(2, 3).join(" ")
  if (args === ""){
    message.channel.send("Please enter a role name and color")
  } else {
    var guild = message.guild;
    guild.createRole({name: p1, color: p2})
    message.channel.send("Created Role")
    var fs = require('fs')
    var author = client.users.find("id", message.author.id).username;
fs.writeFileSync("./LOGS.txt", `LOGS ${__filename} \n ${author} has created a role: {name: ${p1}, color: ${p2}} \n ${Date.now()}`);
  }
} else {
  message.channel.send(global.ee2)
}
}