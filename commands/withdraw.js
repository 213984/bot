const d = require('discord.js')
const db = require('quick.db')
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
 message.channel.send("Please Enter An Amount To Withdraw")
 return
 }
 if (message.content.includes('-')){
 message.channel.send("Please Enter A Positive Amount To Withdraw")
 return
 }
 if (content === "0"){
 message.channel.send("Please Enter A Valid Amount To Withdraw")
 return
 }
 if (bank < content){
 message.channel.send(`You Don't Have ${content} ${storage.c} In Your Bank`)
 return
 }
  var fs = require('fs')
      var author = client.users.find("id", message.author.id).username;
if (content === "all"){
  
 fs.appendFileSync('./LOGS.txt', `\nUsername: ${author}\nID: ${message.author.id}\nDate: ${new Date()}\nContent: ${author} withdrawn all from there bank\n`)
             message.channel.send("successfully withdrawn __ALL__")
              db.add(`money_${message.author.id}`, bank)
 db.subtract(`Bank_${message.author.id}`, bank)
  return      
}
 fs.appendFileSync('./LOGS.txt', `\nUsername: ${author}\nID: ${message.author.id}\nDate: ${new Date()}\nContent: ${author} withdrawn ${content} from there bank\n`)
  db.add(`money_${message.author.id}`, content)
 db.subtract(`Bank_${message.author.id}`, content)
message.channel.send(`successfully withdrawn ${content} ${storage.c}`)
       
        
 
}}