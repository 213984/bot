var discord = require("discord.js");
var db = require("quick.db");
exports.run = async (client, message, args, storage, Status) => {
      if (storage.allowed.includes(message.author.id)) Status = "OK"
if (Status === 0){
message.channel.send(global.ee1)
} else if (Status === 2){
message.channel.send(global.ee3)
} else {
    var e1 = await db.fetch(`SI1_${message.author.id}`);
    var e2 = await db.fetch(`SI2_${message.author.id}`);
    var e3 = await db.fetch(`SI3_${message.author.id}`);
    var e4 = await db.fetch(`SI4_${message.author.id}`);
    var e5 = await db.fetch(`SI5_${message.author.id}`);
    var e6 = await db.fetch(`SI6_${message.author.id}`);
    var e7 = await db.fetch(`SI7_${message.author.id}`);
    var e8 = await db.fetch(`SI8_${message.author.id}`);
    var e9 = await db.fetch(`SI9_${message.author.id}`);
    var e10 = await db.fetch(`SI10_${message.author.id}`);
    if (e1 === null) e1 = 0;
    if (e2 === null) e2 = 0;
    if (e3 === null) e3 = 0;
    if (e4 === null) e4 = 0;
    if (e5 === null) e5 = 0;
    if (e6 === null) e6 = 0;
    if (e7 === null) e7 = 0;
    if (e8 === null) e8 = 0;
    if (e9 === null) e9 = 0;
    if (e10 === null) e10 = 0;
    let money = await db.fetch(`money_${message.author.id}`);
    if (money === null) money = 0;
    let dim = await db.fetch(`dim_${message.author.id}`);
    if (dim === null) dim = 0;
    if (message.author.id === "461914901624127489") money = "Unlimited";
    if (args === "1") {
      var embed1 = new discord.RichEmbed()
        .setAuthor("Store (Page 1)")
        .setDescription(`Roles/Ranks:`)
        .addField(
          storage.Store.Data.Page1.Items.Item6.Name,
          `price: ${storage.Store.Data.Page1.Items.Item6.EPrice} ${storage.c}, ID: ${storage.Store.Data.Page1.Items.Item6.ID}`
        )
        .addField(
          storage.Store.Data.Page1.Items.Item4.Name,
          `price: ${storage.Store.Data.Page1.Items.Item4.EPrice} ${storage.c}, ID: ${storage.Store.Data.Page1.Items.Item4.ID}`
        )
        .addField(
          storage.Store.Data.Page1.Items.Item5.Name,
          `price: ${storage.Store.Data.Page1.Items.Item5.EPrice} ${storage.c}, ID: ${storage.Store.Data.Page1.Items.Item5.ID}`
        )
        .addField(
          storage.Store.Data.Page1.Items.Item3.Name,
          `price: ${storage.Store.Data.Page1.Items.Item3.EPrice} ${storage.c}, ID: ${storage.Store.Data.Page1.Items.Item3.ID}`
        )
        .addField(
          storage.Store.Data.Page1.Items.Item2.Name,
          `price: ${storage.Store.Data.Page1.Items.Item2.EPrice} ${storage.c}, ID: ${storage.Store.Data.Page1.Items.Item2.ID}`
        )
        .addField(
          storage.Store.Data.Page1.Items.Item7.Name,
          `price: ${storage.Store.Data.Page1.Items.Item7.EPrice} ${storage.c}, ID: ${storage.Store.Data.Page1.Items.Item7.ID}`
        )
        .addField(
          storage.Store.Data.Page1.Items.Item8.Name,
          `price: ${storage.Store.Data.Page1.Items.Item8.EPrice} ${storage.c}, ID: ${storage.Store.Data.Page1.Items.Item8.ID}`
        )
        .addField(
          storage.Store.Data.Page1.Items.Item10.Name,
          `price: ${storage.Store.Data.Page1.Items.Item10.EPrice} ${storage.c}, ID: ${storage.Store.Data.Page1.Items.Item10.ID}`
        )
        .addField(
          storage.Store.Data.Page1.Items.Item9.Name,
          `price: ${storage.Store.Data.Page1.Items.Item9.EPrice} ${storage.c}, ID: ${storage.Store.Data.Page1.Items.Item9.ID}`
        )
        .addField(
          storage.Store.Data.Page1.Items.Item1.Name,
          `price: ${storage.Store.Data.Page1.Items.Item1.EPrice} ${storage.c}, ID: ${storage.Store.Data.Page1.Items.Item1.ID}`
        )
        .setColor("#4682bf")
        .setFooter(
          `use ${global.prefix}store buy <Page> <ID> to buy something (Page 1/?)`
        );
      message.channel.send(embed1);
    }
    if (message.content === `${global.prefix}store`) {
      var embed0 = new discord.RichEmbed()
        .setAuthor("Store Pages")
        .addField("Page 1", "`ac.store 1` | Ranks/Roles")
        .setFooter(`use ${global.prefix}store <page> to select a page`);
      message.channel.send(embed0);
    }
    if (
      message.content ===
      `${global.prefix}store buy 1 ${storage.Store.Data.Page1.Items.Item1.ID}`
    ) {
      if (e1 === 1) {
        message.channel.send(`Store\nYou've already bought this item!`);
      } else {
        if (money > storage.Store.Data.Page1.Items.Item1.Price) {
          message.channel.send(
            `successfully bought ${storage.Store.Data.Page1.Items.Item1.Name}`
          );
          let GuildMember = message.member;
          let role = message.guild.roles.find(
            "name",
            storage.Store.Data.Page1.Items.Item1.Name
          );
          GuildMember.addRole(role);
          db.set(`SI1_${message.author.id}`, 1);
          db.subtract(
            `money_${message.author.id}`,
            storage.Store.Data.Page1.Items.Item1.Price
          );
        } else {
          message.channel.send(
            `you don\'t have enough money to purchase ${storage.Store.Data.Page1.Items.Item1.Name}`
          );
        }
      }
    }
    if (
      message.content ===
      `${global.prefix}store buy 1 ${storage.Store.Data.Page1.Items.Item2.ID}`
    ) {
      if (e1 === 2) {
        message.channel.send(`Store\nYou've already bought this item!`);
      } else {
        if (money > storage.Store.Data.Page1.Items.Item2.Price) {
          message.channel.send(
            `Successfully bought ${storage.Store.Data.Page1.Items.Item2.Name}`
          );
          let GuildMember = message.member;
          let role = message.guild.roles.find(
            "name",
            storage.Store.Data.Page1.Items.Item2.Name
          );
          GuildMember.addRole(role);
          db.set(`SI2_${message.author.id}`, 1);
          db.subtract(
            `money_${message.author.id}`,
            storage.Store.Data.Page1.Items.Item2.Price
          );
        } else {
          message.channel.send(
            `you don\'t have enough money to purchase ${storage.Store.Data.Page1.Items.Item2.Name}`
          );
        }
      }
    }
    if (
      message.content ===
      `${global.prefix}store buy 1 ${storage.Store.Data.Page1.Items.Item3.ID}`
    ) {
      if (e3 === 1) {
        message.channel.send(`Store\nYou've already bought this item!`);
      } else {
        if (money > storage.Store.Data.Page1.Items.Item3.Price) {
          message.channel.send(
            `Successfully bought ${storage.Store.Data.Page1.Items.Item3.Name}`
          );
          let GuildMember = message.member;
          let role = message.guild.roles.find(
            "name",
            storage.Store.Data.Page1.Items.Item3.Name
          );
          GuildMember.addRole(role);
          db.set(`SI3_${message.author.id}`, 1);
          db.subtract(
            `money_${message.author.id}`,
            storage.Store.Data.Page1.Items.Item3.Price
          );
        } else {
          message.channel.send(
            `you don\'t have enough money to purchase ${storage.Store.Data.Page1.Items.Item3.Name}`
          );
        }
      }
    }
    if (
      message.content ===
      `${global.prefix}store buy 1 ${storage.Store.Data.Page1.Items.Item4.ID}`
    ) {
      if (e4 === 1) {
        message.channel.send(`Store\nYou've already bought this item!`);
      } else {
        if (money > storage.Store.Data.Page1.Items.Item4.Price) {
          message.channel.send(
            `Successfully bought ${storage.Store.Data.Page1.Items.Item4.Name}`
          );
          let GuildMember = message.member;
          let role = message.guild.roles.find(
            "name",
            storage.Store.Data.Page1.Items.Item4.Name
          );
          GuildMember.addRole(role);
          db.set(`SI4_${message.author.id}`, 1);
          db.subtract(
            `money_${message.author.id}`,
            storage.Store.Data.Page1.Items.Item4.Price
          );
        } else {
          message.channel.send(
            `you don\'t have enough money to purchase ${storage.Store.Data.Page1.Items.Item4.Name}`
          );
        }
      }
    }
    if (
      message.content ===
      `${global.prefix}store buy 1 ${storage.Store.Data.Page1.Items.Item5.ID}`
    ) {
      if (e5 === 1) {
        message.channel.send(`Store\nYou've already bought this item!`);
      } else {
        if (money > storage.Store.Data.Page1.Items.Item5.Price) {
          message.channel.send(
            `Successfully bought ${storage.Store.Data.Page1.Items.Item5.Name}`
          );
          let GuildMember = message.member;
          let role = message.guild.roles.find(
            "name",
            storage.Store.Data.Page1.Items.Item5.Name
          );
          GuildMember.addRole(role);
          db.set(`SI5_${message.author.id}`, 1);
          db.subtract(
            `money_${message.author.id}`,
            storage.Store.Data.Page1.Items.Item5.Price
          );
        } else {
          message.channel.send(
            `you don\'t have enough money to purchase ${storage.Store.Data.Page1.Items.Item5.Name}`
          );
        }
      }
    }
    if (
      message.content ===
      `${global.prefix}store buy 1 ${storage.Store.Data.Page1.Items.Item6.ID}`
    ) {
      if (e6 === 1) {
        message.channel.send(`Store\nYou've already bought this item!`);
      } else {
        if (money > storage.Store.Data.Page1.Items.Item6.Price) {
          message.channel.send(
            `Successfully bought ${storage.Store.Data.Page1.Items.Item6.Name}`
          );
          let GuildMember = message.member;
          let role = message.guild.roles.find(
            "name",
            storage.Store.Data.Page1.Items.Item6.Name
          );
          GuildMember.addRole(role);
          db.set(`SI6_${message.author.id}`, 1);
          db.subtract(
            `money_${message.author.id}`,
            storage.Store.Data.Page1.Items.Item6.Price
          );
        } else {
          message.channel.send(
            `you don\'t have enough money to purchase ${storage.Store.Data.Page1.Items.Item6.Name}`
          );
        }
      }
    }
    if (
      message.content ===
      `${global.prefix}store buy 1 ${storage.Store.Data.Page1.Items.Item7.ID}`
    ) {
      if (e7 === 1) {
        message.channel.send(`Store\nYou've already bought this item!`);
      } else {
        if (money > storage.Store.Data.Page1.Items.Item7.Price) {
          message.channel.send(
            `Successfully bought ${storage.Store.Data.Page1.Items.Item7.Name}`
          );
          let GuildMember = message.member;
          let role = message.guild.roles.find(
            "name",
            storage.Store.Data.Page1.Items.Item7.Name
          );
          GuildMember.addRole(role);
          db.set(`SI7_${message.author.id}`, 1);
          db.subtract(
            `money_${message.author.id}`,
            storage.Store.Data.Page1.Items.Item7.Price
          );
        } else {
          message.channel.send(
            `you don\'t have enough money to purchase ${storage.Store.Data.Page1.Items.Item7.Name}`
          );
        }
      }
    }
    if (
      message.content ===
      `${global.prefix}store buy 1 ${storage.Store.Data.Page1.Items.Item8.ID}`
    ) {
      if (e8 === 1) {
        message.channel.send(`Store\nYou've already bought this item!`);
      } else {
        if (money > storage.Store.Data.Page1.Items.Item8.Price) {
          message.channel.send(
            `Successfully bought ${storage.Store.Data.Page1.Items.Item8.Name}`
          );
          let GuildMember = message.member;
          let role = message.guild.roles.find(
            "name",
            storage.Store.Data.Page1.Items.Item8.Name
          );
          GuildMember.addRole(role);
          db.set(`SI8_${message.author.id}`, 1);
          db.subtract(
            `money_${message.author.id}`,
            storage.Store.Data.Page1.Items.Item8.Price
          );
        } else {
          message.channel.send(
            `you don\'t have enough money to purchase ${storage.Store.Data.Page1.Items.Item8.Name}`
          );
        }
      }
    }
    if (
      message.content ===
      `${global.prefix}store buy 1 ${storage.Store.Data.Page1.Items.Item9.ID}`
    ) {
      if (e9 === 1) {
        message.channel.send(`Store\nYou've already bought this item!`);
      } else {
        if (money > storage.Store.Data.Page1.Items.Item9.Price) {
          message.channel.send(
            `Successfully bought ${storage.Store.Data.Page1.Items.Item9.Name}`
          );
          let GuildMember = message.member;
          let role = message.guild.roles.find(
            "name",
            storage.Store.Data.Page1.Items.Item9.Name
          );
          GuildMember.addRole(role);
          db.set(`SI9_${message.author.id}`, 1);
          db.subtract(
            `money_${message.author.id}`,
            storage.Store.Data.Page1.Items.Item9.Price
          );
        } else {
          message.channel.send(
            `you don\'t have enough money to purchase ${storage.Store.Data.Page1.Items.Item9.Name}`
          );
        }
      }
    }
    if (
      message.content ===
      `${global.prefix}store buy 1 ${storage.Store.Data.Page1.Items.Item10.ID}`
    ) {
      if (e10 === 1) {
        message.channel.send(`Store\nYou've already bought this item!`);
      } else {
        if (money > storage.Store.Data.Page1.Items.Item10.Price) {
          message.channel.send(
            `Successfully bought ${storage.Store.Data.Page1.Items.Item10.Name}`
          );
          let GuildMember = message.member;
          let role = message.guild.roles.find(
            "name",
            storage.Store.Data.Page1.Items.Item10.Name
          );
          GuildMember.addRole(role);
          db.set(`SI10_${message.author.id}`, 1);
          db.subtract(
            `money_${message.author.id}`,
            storage.Store.Data.Page1.Items.Item10.Price
          );
        } else {
          message.channel.send(
            `you don\'t have enough money to purchase ${storage.Store.Data.Page1.Items.Item10.Name}`
          );
        }
      }
    }
  }
};
