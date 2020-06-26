const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, storage, Status) => {
      if (storage.allowed.includes(message.author.id)) Status = "OK"
if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
    let timeout = storage.CD.daily // 24 hours in milliseconds, change if you'd like.
    let amount = 1000
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

    const cooldown = new Discord.RichEmbed()
.setTitle("Daily Cooldown")
.setDescription(`You already collected your daily reward, you can come back and collect it in ${time.hours}h ${time.minutes}m.`)
        .setColor("#f28da5")
        .setTimestamp()
        message.channel.send(cooldown)
      
      
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}'s Daily Reward`, message.author.displayAvatarURL)
    .setColor("#f28da5")
    .setDescription(`Collected ${amount} ${storage.c}`)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())
        
    }

}}