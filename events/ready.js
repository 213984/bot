let prefix = "ac.";
exports.run = async (client, message, args, storage) => {
  client.user.setActivity(`AC v1.2.6`, { type: "playing" });
  console.log(client.guilds.map(g => `${g.name} (${g.id})`).join("\n"));
};