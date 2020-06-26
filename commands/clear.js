const Discord = require('discord.js')
exports.run = async (client, message, args, storage) => {
 
  var allowed = storage.allowed
  if(allowed.includes(message.author.id)){
  if (args === ""){
    message.channel.send("please specify a number of messages to delete")
  } else {
message.channel.fetchMessages({limit: args}).then(collected => { //collected is a Collection
  collected.forEach(msg => {
    msg.delete();
  });
});
}
} else {
  message.channel.send(global.ee2)
}
}