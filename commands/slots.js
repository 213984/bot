const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, storage, Status) => {
var limit = await db.fetch(`SL_${message.author.id}`)
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
  let timeout = 15000


    let daily = await db.fetch(`Slots_${message.author.id}`);
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

    let cooldown = new Discord.RichEmbed()
.setTitle("Slots Cooldown")
.setDescription(`You already Used Slots recently try again in ${time.minutes}m ${time.seconds}s`)
        .setColor("#f28da5")
        .setTimestamp()
        message.channel.send(cooldown)
      
      
    } else {
      if (limit === 0){
        let cooldown = new Discord.RichEmbed()
.setTitle("Slots Limit")
.setDescription(`You Have Reached 0 Slot Tokens Please Check Back Tormorow and run *ac.tokens slot* | If you have not already claimed your daily slot tokens do so now!`)
        .setColor("#f28da5")
        .setTimestamp()
        message.channel.send(cooldown)
        return
      }
      
      var amount = message.content.split(' ').splice(1, 2).join(' ')
    if (amount === ""){
 message.channel.send(`Slots\nTEST YOUR LUCK!`)
      return
 }
if (money < amount){
 message.channel.send(`You don't have enough to Slot ${amount} ${storage.c}!`)
 return
} 
if (amount > 2000){
 message.channel.send(`The limit is 2K ${storage.c}`)
  return
}
  if (message.content.includes('-')){
 message.channel.send(`the minimum is 1 ${storage.c}`)
    return
}
  if (amount === "0"){
 message.channel.send(`You can't Slot 0 ${storage.c}`)
    return
}
  var s1 = Math.floor(Math.random() * 2)
  var s2 = Math.floor(Math.random() * 2)
  var s3 = Math.floor(Math.random() * 2)
  var s4 = Math.floor(Math.random() * 2)
  var tt = 0
  if (tt === 1){
    s1 = 1
    s2 = 1
    s3 = 1
    s4 = 1
  }
      if (s1 === 0) s1 = "𝟢"
      if (s2 === 0) s2 = "𝟢"
      if (s3 === 0) s3 = "𝟢"
      if (s4 === 0) s4 = "𝟢"
      if (s1 === 1) s1 = "𝟣"
      if (s2 === 1) s2 = "𝟣"
      if (s3 === 1) s3 = "𝟣"
      if (s4 === 1) s4 = "𝟣"
db.subtract(`money_${message.author.id}`, amount)
db.set(`Slots_${message.author.id}`, Date.now())
db.subtract(`SL_${message.author.id}`, 1)
var embed = new Discord.RichEmbed()
.setAuthor("𝕊𝕃𝕆𝕋 𝕄𝔸ℂℍ𝕀ℕ𝔼")
.setDescription(``)
var embed2 = new Discord.RichEmbed()
.setAuthor("𝕊𝕃𝕆𝕋 𝕄𝔸ℂℍ𝕀ℕ𝔼")
.setDescription(`${s1}`)
var embed3 = new Discord.RichEmbed()
.setAuthor("𝕊𝕃𝕆𝕋 𝕄𝔸ℂℍ𝕀ℕ𝔼")
.setDescription(`${s1}       ${s2}`)
var embed4 = new Discord.RichEmbed()
.setAuthor("𝕊𝕃𝕆𝕋 𝕄𝔸ℂℍ𝕀ℕ𝔼")
.setDescription(`${s1}       ${s2}       ${s3}`)
var embed5 = new Discord.RichEmbed()
.setAuthor("𝕊𝕃𝕆𝕋 𝕄𝔸ℂℍ𝕀ℕ𝔼")
.setDescription(`${s1}       ${s2}       ${s3}       ${s4}`)
var a = Math.floor(amount * 1.50) + " " + storage.c
var aa = Math.floor(amount * 1.75) + " " + storage.c
var aaa = Math.floor(amount * 3) + " " + storage.c
var a_ = Math.floor(amount * 1.50)
var aa_ = Math.floor(amount * 1.75)
var aaa_ = Math.floor(amount * 3)
var e0 = new Discord.RichEmbed()
.setAuthor("𝕊𝕃𝕆𝕋 𝕄𝔸ℂℍ𝕀ℕ𝔼")
.setDescription(`𝕐𝕆𝕌 𝕃𝕆𝕊𝕋!`)
.setFooter(`𝕐𝕠𝕦 𝕃𝕠𝕤𝕥 𝕀𝕥 𝕒𝕝𝕝!`)
var e1 = new Discord.RichEmbed()
.setAuthor("𝕊𝕃𝕆𝕋 𝕄𝔸ℂℍ𝕀ℕ𝔼")
.setDescription(`𝕐𝕆𝕌 𝕎𝕆ℕ`)
.setFooter(`𝕐𝕠𝕦 𝕎𝕠𝕟 𝕩𝟙.𝟝𝟘 ${a}`)
var e2 = new Discord.RichEmbed()
.setAuthor("𝕊𝕃𝕆𝕋 𝕄𝔸ℂℍ𝕀ℕ𝔼")
.setDescription(`𝕐𝕆𝕌 𝕎𝕆ℕ`)
.setFooter(`𝕐𝕠𝕦 𝕎𝕠𝕟 𝕩𝟙.𝟟𝟝 ${aa}`)
var e3 = new Discord.RichEmbed()
.setAuthor("𝕊𝕃𝕆𝕋 𝕄𝔸ℂℍ𝕀ℕ𝔼")
.setDescription(`𝕁𝔸ℂ𝕂ℙ𝕆𝕋`)
.setFooter(`𝕐𝕠𝕦 𝕎𝕠𝕟 𝕩𝟛 ${aaa}`)
message.channel.send(embed).then((msg)=>{
  setTimeout(function(){
  msg.edit(embed2)
}, 1000)
setTimeout(function(){
  msg.edit(embed3)
}, 3000)
  setTimeout(function(){
  msg.edit(embed4)
}, 4000)
  setTimeout(function(){
  msg.edit(embed5)
}, 5000)
  setTimeout(function(){
    function w0(){
      try {
      msg.edit(e0) 
      } catch(e){
console.log(e)
      }
    }
    function w1(){
      try {
msg.edit(e1) 
      db.add(`money_${message.author.id}`, a_)
      } catch(e){
        console.log(e)
      }
    }
    function w2(){
      try {
       msg.edit(e2) 
          db.add(`money_${message.author.id}`, aa_)
        } catch(e){
        console.log(e)
      }
    }
    function w3(){
    
          msg.edit(e3)
    db.add(`money_${message.author.id}`, aaa_)
    }
  if (s1 === "𝟣" && s2 === "𝟣" && s3 === "𝟣" && s4 === "𝟣"){
w3()
  } else
    if (s1 === "𝟣" && s2 === "𝟣" && s3 === "𝟣"){
      w2()
    } else
    if (s1 === "𝟣" && s2 === "𝟣" && s4 === "𝟣"){
       w2()
    } else
    if (s1 === "𝟣" && s3 === "𝟣" && s4 === "𝟣"){
    w2()
    } else
      if (s2 === "𝟣" && s3 === "𝟣" && s4 === "𝟣"){
        w2()
      } else
    if (s1 === "𝟣" && s2 === "𝟣"){
     w1()
    } else
    if (s1 === "𝟣" && s3 === "𝟣"){
     w1()
    } else
    if (s1 === "𝟣" && s4 === "𝟣"){
      w1()
    } else
    if (s2 === "𝟣" && s3 === "𝟣"){
      w1()
    } else
    if (s2 === "𝟣" && s4 === "𝟣"){
      w1()
    } else
    if (s3 === "𝟣" && s4 === "𝟣"){
    w1()
    } else {
       w0()
      }
}, 7000)
}
)
}
}
}