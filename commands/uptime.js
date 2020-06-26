const discord = require('discord.js')
exports.run = async (client, message, args, storage, Status) =>  {
      if (storage.allowed.includes(message.author.id)) Status = "OK"
 if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
  var milliseconds = parseInt((client.uptime % 1000) / 100),
    seconds = parseInt((client.uptime / 1000) % 60),
    minutes = parseInt((client.uptime / (1000 * 60)) % 60),
    hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  message.channel.send(
    ":chart_with_upwards_trend: I've been running for** " +
      hours +
      " **hours, **" +
      minutes +
      "** minutes and **" +
      seconds +
      "." +
      milliseconds +
      "** seconds!"
  );
};}