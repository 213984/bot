const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, storage, Status) => {
  var content = message.content.split(' ').splice(1, 2).join(' ')
      if (storage.allowed.includes(message.author.id)) Status = "OK"
if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
if (content === "gamble"){
 var timeout = storage.CD.tokens.gamble
    let daily = await db.fetch(`gll_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

    const cooldown = new Discord.RichEmbed()
.setTitle("Token Cooldown")
.setDescription(`You already collected your daily gamble tokens, you can come back and collect it in ${time.hours}h ${time.minutes}m ${time.seconds}s`)
        .setColor("#f28da5")
        .setTimestamp()
        message.channel.send(cooldown)
      
      
    } else {
   db.set(`gll_${message.author.id}`, Date.now())
         db.set(`GL_${message.author.id}`, 60)
        message.channel.send("You have been given 60 Gamble Tokens | Use Them Wisely")
    }} else if (content === "crime"){
  var timeout = storage.CD.tokens.crime
    let daily = await db.fetch(`cll_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

    const cooldown = new Discord.RichEmbed()
.setTitle("Token Cooldown")
.setDescription(`You already collected your daily crime tokens, you can come back and collect it in ${time.hours}h ${time.minutes}m ${time.seconds}s`)
        .setColor("#f28da5")
        .setTimestamp()
        message.channel.send(cooldown)
      
      
    } else {
   db.set(`cll_${message.author.id}`, Date.now())
         db.set(`CL_${message.author.id}`, 60)
        message.channel.send("You have been given 60 Crime Tokens | Use Them Wisely")
    }} if (content === "slot"){
 var timeout = storage.CD.tokens.slot
    let daily = await db.fetch(`sll_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

    const cooldown = new Discord.RichEmbed()
.setTitle("Token Cooldown")
.setDescription(`You already collected your daily slot tokens, you can come back and collect it in ${time.hours}h ${time.minutes}m ${time.seconds}s`)
        .setColor("#f28da5")
        .setTimestamp()
        message.channel.send(cooldown)
      
      
    } else {
   db.set(`sll_${message.author.id}`, Date.now())
         db.set(`SL_${message.author.id}`, 15)
        message.channel.send("You have been given 15 Slot Tokens | Use Them Wisely")
    }
    
    } else {
       let user = message.mentions.members.first() || message.author;
  let User = client.users.find("id", user.id).username
  let GT = await db.fetch(`GL_${user.id}`)
  if (GT === null) GT = 0;
  let CT = await db.fetch(`CL_${user.id}`)
  if (CT === null) CT = 0;
      let ST = await db.fetch(`SL_${user.id}`)
  if (ST === null) ST = 0;
   let moneyEmbed = new Discord.RichEmbed()
     .setTitle(`${User}'s Tokens`)
    .addField(`Gamble Tokens: `, GT)
    .addField(`Crime Tokens: `, CT)
       .addField(`Slot Tokens: `, ST)
   .setColor("#f28da5")
   message.channel.send(moneyEmbed)
    }

}}