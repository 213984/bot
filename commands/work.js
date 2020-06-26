const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

exports.run = async (client, message, args, storage, Status) => {
      if (storage.allowed.includes(message.author.id)) Status = "OK"
 if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
    let user = message.author;
    let author = await db.fetch(`work_${user.id}`)

    let timeout = storage.CD.work
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
        let timeEmbed = new Discord.RichEmbed()
        .setColor("#f28da5")
        .setDescription(`You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic']
         var amount = Math.floor(Math.random() * 300) + 1;
        let result = Math.floor((Math.random() * replies.length));
      
        let embed1 = new Discord.RichEmbed()
        .setColor("#f28da5")
        .setDescription(`You worked as a ${replies[result]} and earned ${amount} ${storage.c}`);
        message.channel.send(embed1)
        
        db.add(`money_${user.id}`, amount)
        db.set(`work_${user.id}`, Date.now())
        
    };
}}