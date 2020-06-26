var db = require("quick.db")
var d=require("discord.js")
exports.run = async (client, message, args, storage, Status) => {
      if (storage.allowed.includes(message.author.id)) Status = "OK"
  if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
  var t1 = args.split(" ").splice(0, 1).join(" ")
    if (t1 === "T61W36"){
      let e1 = db.fetch(`REDEEM_CODE_T61W36_${message.author.id}`)
      if (e1 === null) e1 = 0
      if (e1 === 0){
        message.channel.send(`Redeemed 20k ${storage.c}!`)
        db.add(`Bank_${message.author.id}`, 20000)
        db.set(`REDEEM_CODE_T61W36_${message.author.id}`, 1)
      } else if (e1 === 1){
        message.channel.send("Already Redeemed This Code!")
      }
  } else if (t1 === "8Y7U3W"){
      let e1 = db.fetch(`REDEEM_CODE_8Y7U3W_${message.author.id}`)
      if (e1 === null) e1 = 0
      if (e1 === 0){
        message.channel.send(`Redeemed 10 ${storage.dc}!`)
        db.add(`diamonds_${message.author.id}`, 10)
        db.set(`REDEEM_CODE_8Y7U3W_${message.author.id}`, 1)
      } else if (e1 === 1){
        message.channel.send("Already Redeemed This Code!")
      }
  } else if (t1 === "61W3E5"){
      let e1 = db.fetch(`REDEEM_CODE_61W3E5_${message.author.id}`)
      if (e1 === null) e1 = 0
      if (e1 === 0){
        message.channel.send(`Redeemed 13 ${storage.dc}!`)
        db.add(`diamonds_${message.author.id}`, 13)
        db.set(`REDEEM_CODE_61W3E5_${message.author.id}`, 1)
      } else if (e1 === 1){
        message.channel.send("Already Redeemed This Code!")
      }
  } else if (t1 === ""){
    let e1 = db.fetch(`REDEEM_CODE_T61W36_${message.author.id}`)
      if (e1 === null) e1 = 0
    if (e1 === 0) e1 = "__NOT__ REDEEMED"
    if (e1 === 1) e1 = "REDEEMED"
    let e2 = db.fetch(`REDEEM_CODE_8Y7U3W_${message.author.id}`)
      if (e2 === null) e2 = 0
    if (e2 === 0) e2 = "__NOT__ REDEEMED"
    if (e2 === 1) e2 = "REDEEMED"
    let e3 = db.fetch(`REDEEM_CODE_61W3E5_${message.author.id}`)
    if (e3 === null) e3 = 0
    if (e3 === 0) e3 = "__NOT__ REDEEMED"
    if (e3 === 1) e3 = "REDEEMED"
    
    var em = new d.RichEmbed()
    .setAuthor("Redeem")
    .addField("Available Codes", `T61W36: ${e1}\n8Y7U3W: ${e2}\n61W3E5: ${e3}`)
    .setFooter(`Use ${global.prefix}redeem <code> to redeem codes`)
    message.channel.send(em)
  } else {
    message.channel.send("Invalid Code!")
  }
}
  }