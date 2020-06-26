const discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args, storage) => {
  var allowed = storage.allowed
  if (allowed.includes(message.author.id)){
    var amount = message.content.split(' ').splice(2, 3).join(' ')
    if (amount === "") {
      message.channel.send(`:octagonal_sign: Proper usage: ac.remove <@user> <amount>`)
      return
    }
    
   if (message.content.endsWith("all")){
     let user = message.mentions.members.first()
       var bank = await db.fetch(`Bank_{user.id}`)
  db.add(`Bank_${user.id}`, bank)
    message.channel.send(`successfully removed ALL ${storage.c} from ${user}'s bank`)
   }
  let user = message.mentions.members.first()
  db.subtract(`Bank_${user.id}`, amount)
    message.channel.send(`successfully removed ${amount} ${storage.c} from ${user}'s bank`)
    var fs = require('fs')
    var author = client.users.find("id", message.author.id).username;
    var User = client.users.find("id", user.id).username;
  fs.appendFileSync('./LOGS.txt', `\nUsername: ${author}\nID: ${message.author.id}\nDate: ${new Date()}\nContent: ${author} removed ${amount} ${storage.c} from ${User}'s Bank\n`)

  } else {
  message.channel.send(global.ee2)
  }
}