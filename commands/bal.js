const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, storage, Status) => {
  const gt = await db.fetch(`GL_${message.author.id}`)
  const ct = await db.fetch(`CL_${message.author.id}`)
  if (storage.allowed.includes(message.author.id)) Status = "OK"
  if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
      var author = client.users.find("id", message.author.id).username;
    let user = message.mentions.members.first() || message.author;
  let User = client.users.find("id", user.id).username
  let money = await db.fetch(`money_${user.id}`)
  if (money === null) money = 0;
   var bank = await db.fetch(`Bank_${user.id}`)
   if (bank === null) bank = 0;
    var dim = db.fetch(`diamonds_${message.author.id}`)
    if (dim === null) dim = 0
  if (message.author.id === "461914901624127489" || message.author.id === "574429626085015573"){
    let Embed = new Discord.RichEmbed()
     .setTitle(`Lucky's Balance`)
.addField(`Money (${storage.c}):`,`𝕀ℕ𝔽𝕀ℕ𝕀𝕋𝕐`)
.addField(`Bank (${storage.c}):`,`𝕀ℕ𝔽𝕀ℕ𝕀𝕋𝕐`)
.addField(`Diamonds (${storage.dc}):`, `𝕀ℕ𝔽𝕀ℕ𝕀𝕋𝕐`)
   .setColor("#f28da5")
   message.channel.send(Embed)
  
  } else {

   
   let moneyEmbed = new Discord.RichEmbed()
     .setTitle(`${User}'s Balance`)
.addField(`Money (${storage.c}:`,`${money} ${storage.c}`)
.addField(`Bank (${storage.c}:`,`${bank} ${storage.c}`)
.addField(`Diamonds (${storage.dc}:`, `${dim} ${storage.dc}`)
   .setColor("#f28da5")
   message.channel.send(moneyEmbed)

}
}}
