const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, storage, Status) => {
var limit = await db.fetch(`GL_${message.author.id}`)
if (limit === null) limit = 0
      if (storage.allowed.includes(message.author.id)) Status = "OK"
 if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
   let money = await db.fetch(`money_${message.author.id}`)
    if (money === null) money = 0
  if (message.author.id === "461914901624127489") money = 1000000000
  let timeout = storage.CD.gamble // 24 hours in milliseconds, change if you'd like.
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`Gamb_${message.author.id}`);
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

    let cooldown = new Discord.RichEmbed()
.setTitle("Gamble Cooldown")
.setDescription(`You already gambled recently try again in ${time.minutes}m ${time.seconds}s`)
        .setColor("#f28da5")
        .setTimestamp()
        message.channel.send(cooldown)
      
      
    } else {
      if (limit === 0){
        let cooldown = new Discord.RichEmbed()
.setTitle("Gamble Limit")
.setDescription(`You Have Reached 0 Gamble Tokens Please Check Back Tormorow and run *ac.tokens gamble* | If you have not already claimed your daily gamble tokens do so now!`)
        .setColor("#f28da5")
        .setTimestamp()
        message.channel.send(cooldown)
        return
      }
      
      var amount = message.content.split(' ').splice(1, 2).join(' ')
    if (amount === ""){
 message.channel.send(`Please enter an amount to gamble`)
      return
 }
if (money < amount){
 message.channel.send(`You don't have enough to gamble ${amount} ${storage.c}!`)
 return
} 
if (amount > 500){
 message.channel.send(`The limit is 500 ${storage.c}`)
  return
}
  if (message.content.includes('-')){
 message.channel.send(`the minimum is 1 ${storage.c}`)
    return
}
  if (amount === "0"){
 message.channel.send(`You can't Gamble 0 ${storage.c}`)
    return
}
      if (money > 0){
db.set(`Gamb_${message.author.id}`, Date.now())
let t = Math.floor(Math.random() * 2);
 gamble()
 function gamble(){
            db.subtract(`GL_${message.author.id}`, 1)
 if(t === 0){
             message.channel.send(`You Won ${amount} ${storage.c}!`)
         db.add(`money_${message.author.id}`, amount)
 }
 if(t === 1){
 db.subtract(`money_${message.author.id}`, args)
 message.channel.send(`You Lost ${args} ${storage.c}!`)
 }
    }} else {
 message.channel.send(`Your have 0 or lower ${storage.c}`)
}
    }}}