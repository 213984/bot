const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, storage, Status) => {
var limit = await db.fetch(`CL_${message.author.id}`)
if (limit === null) limit = 0
      if (storage.allowed.includes(message.author.id)) Status = "OK"
  if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
   let money = await db.fetch(`money_${message.author.id}`)
     if (message.author.id === "461914901624127489") money = "Unlimited"
  let timeout = storage.CD.crime // 24 hours in milliseconds, change if you'd like.
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`Crime_${message.author.id}`);
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

    let cooldown = new Discord.RichEmbed()
.setTitle("Crime Cooldown")
.setDescription(`You already comited a crime recently try again in ${time.minutes}m ${time.seconds}s`)
        .setColor("#f28da5")
        .setTimestamp()
        message.channel.send(cooldown)
      
      
    } else {
      if (limit === 0){
        let cooldown = new Discord.RichEmbed()
.setTitle("Crime Limit")
.setDescription(`You Have Reached 0 Crime Tokens Please Check Back Tormorow and run *ac.tokens crime* | If you have not already claimed your daily crime tokens do so now!`)
        .setColor("#f28da5")
        .setTimestamp()
        message.channel.send(cooldown)
        return
      }
if (money < 150){
  message.channel.send(`You Don't Have Enough ${storage.c}`)
  return
}
      if (money < 0){
        message.channel.send(`You have 0 ${storage.c}`)
        return
      }
      var perk0 = db.fetch(`Perks_${storage.Store.Data.Page2.Items.Item2.ID}_${message.author.id}`)
      if (perk0 === null) perk0 = 0
      var amount = 150
       if (perk0 === 1){
           var j0 = Math.floor(150 * 1.20)
           amount = j0
       }
      db.subtract(`CL_${message.author.id}`, 1)
      db.set(`Crime_${message.author.id}`, Date.now())
      var t = Math.floor(Math.random() * 1)
      if (t === 0){
        if (perk0 === 1){
          message.channel.send(`You Got Away With ${amount} ${storage.c}`)
        db.add(`money_${message.author.id}`, amount)
        } else {
        message.channel.send(`You Got Away With 150 ${storage.c}`)
        db.add(`money_${message.author.id}`, 150)
      }
      }
       if (t === 1){
        message.channel.send(`You Got Caught And Had To Pay 150 ${storage.c}`)
        db.subtract(`money_${message.author.id}`, 150)
      }
      
    
    }}}