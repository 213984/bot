exports.run = async (client, message, args, storage, Status) => {
  if (storage.allowed.includes(message.author.id)) Status = "OK";
  if (Status === 0) {
    message.channel.send(global.ee1);
  } else if (Status === 2) {
    message.channel.send(global.ee3);
  } else {
    let rn = Math.floor(Math.random() * 2);
    if (rn === 0) {
      message.channel.send("Heads");
      rn = Math.floor(Math.random() * 2);
    }
    if (rn === 1) {
      message.channel.send("Tails");
      rn = Math.floor(Math.random() * 2);
    }
  }
};
