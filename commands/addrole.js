exports.run = (client, message, args, storage) => {
  var allowed = storage.allowed
  if (allowed.includes(message.author.id)){
  var user = message.mentions.members.first()
  var content = message.content.split(' ').splice(2, 3).join(' ')
  if (!user) {
    message.channel.send("Please Mention A User")
    return
  }
  if (!content) {
    message.channel.send("Please Enter A Role Name")
    return
  }
  try {
    var role = message.guild.roles.find('name', content)
    user.addRole(role)
    var fs = require('fs')
    var author = client.users.find("id", message.author.id).username;
    var User = client.users.find("id", user.id).username;
    fs.appendFileSync('./LOGS.txt', `\nUsername: ${author}\nID: ${message.author.id}\nDate: ${new Date()}\nContent: ${author} added role ${content} to ${User}\n`)
  } catch(e){
    message.channel.send("Unable To Change Roles For That User")
  }
} else {
  message.channel.send(global.ee2)
}
}