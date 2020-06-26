const d = require('discord.js')
const db = require(`quick.db`) 
exports.run = async (client, message, args, storage, Status) => {
  var content = message.content.split(' ').splice(1, 2).join(' ')
  var money = await db.fetch(`money_${message.author.id}`)
  var bank = await db.fetch(`Bank_${message.author.id}`)
      if (storage.allowed.includes(message.author.id)) Status = "OK"
  if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
  if (content === ""){
 message.channel.send("Please Enter An Amount To Deposit")
 return
 }
 if (message.content.includes('-')){
 message.channel.send("Please Enter A Positive Amount To Deposit")
 return
 }
 if (content === "0"){
 message.channel.send("Please Enter A Valid Amount To Deposit")
 return
 }
 if (money < content){
 message.channel.send(`You Don't Have ${content} ${storage.c} In Your Balance`)
 return
 }
      var author = client.users.find("id", message.author.id).username;
     var fs = require('fs')
if (content === "all"){

             message.channel.send("successfully deposited __ALL__")
        db.add(`Bank_${message.author.id}`, money)
 db.subtract(`money_${message.author.id}`, money)
 fs.appendFileSync('./LOGS.txt', `\nUsername: ${author}\nID: ${message.author.id}\nDate: ${new Date()}\nContent: ${author} deposited all to there bank\n`)
  return
 } 
 fs.appendFileSync('./LOGS.txt', `\nUsername: ${author}\nID: ${message.author.id}\nDate: ${new Date()}\nContent: ${author} deposited ${content} to there bank\n`)
  db.add(`Bank_${message.author.id}`, content)
 db.subtract(`money_${message.author.id}`, content)
message.channel.send(`successfully deposited ${content} ${storage.c}`)
      
 }
  }