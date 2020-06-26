const discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args, storage) => {
  var allowed = storage.allowed
  if (allowed.includes(message.author.id)){
    var amount = message.content.split(' ').splice(2, 3).join(' ')
    if (amount === "") {
      message.channel.send(`:octagonal_sign: Proper usage: ac.add <@user> <amount>`)
      return
    }
  var user = message.mentions.members.first()
  var User = client.users.find("id", user.id).username;
  db.add(`Bank_${user.id}`, `${amount}`)
    message.channel.send(`successfully added ${amount} ${storage.c} to ${user}'s bank`)
    var fs = require('fs')
    var author = client.users.find("id", message.author.id).username;
    fs.appendFileSync('./LOGS.txt', `\nUsername: ${author}\nID: ${message.author.id}\nDate: ${new Date()}\nContent: ${author} added ${amount} ${storage.c} to ${User}'s Bank\n`)
  } else {
  message.channel.send(global.ee2)
       }
}