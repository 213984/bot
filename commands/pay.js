const discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args, storage, Status) => {
      if (storage.allowed.includes(message.author.id)) Status = "OK"
 if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
   if (message.content.includes('-')){
 message.channel.send(`the minimum is 1 ${storage.c}`)
} else {
  var amount = message.content.split(' ').splice(2, 3).join(' ')
  var money = await db.fetch(`money_${message.author.id}`)
    if (message.author.id === "461914901624127489" || message.author.id === "574429626085015573") money = 1000000000000000;
  if (money < amount){
    message.channel.send(`You don't have ${amount} ${storage.c}`)
  } else {
  if (amount === ""){
    message.channel.send(":octagonal_sign: Proper usage: ac.pay <@user> <amount>")
  } else {
    var user = message.mentions.members.first()
    var content = message.content.split(' ').splice(2, 3).join(' ')

    if (user.id === message.author.id) return
      if (money < content) return
    if (user.id === "636500662997483521"){
      message.channel.send("You Can't Pay Levi!")
      return
    }
    if (user.id === "461914901624127489"){
      message.channel.send("You Can't Pay Lucky!")
      return
    }
  db.add(`money_${user.id}`, content)
  db.subtract(`money_${message.author.id}`, content)
  message.channel.send(`successfully paid ${user} ${content} ${storage.c}`)
  
}
}}}}