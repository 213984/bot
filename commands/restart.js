var db = require('quick.db') 
exports.run = async (client, message, args, storage) => {
  if (storage.allowed.includes(message.author.id)) {
message.channel.send("Restarted").then(() => {
  process.exit(1)
})
} else {
        message.channel.send(global.ee2)
    }
  }