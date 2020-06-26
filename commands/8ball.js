const Discord = require("discord.js")

module.exports.run = async (bot, message, args, storage, Status) => {
    if (storage.allowed.includes(message.author.id)) Status = "OK"
  if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {

 if (args === "") {
   message.channel.send("Please Enter Some Text!")
   return
 }

      let replies = ['Yes', 'No', 'Ask again later', 'Maybe', 'Probably', 'Probably not'];
    let result = Math.floor((Math.random() * replies.length))
    if (replies[result] === 'Yes') {message.channel.send("Yes")}
    if (replies[result] === 'No') {message.channel.send("No")}
    if (replies[result] === 'Ask again later') {message.channel.send("Maybe")}
    if (replies[result] === 'Maybe') {message.channel.send("Probably")}
    if (replies[result] === 'Probably') {message.channel.send("Probobly Not")}
    if (replies[result] === 'Probably not') {message.channel.send("Not Sure")}

}}