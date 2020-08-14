const Discord = require("discord.js");
const fs = require("fs");
const customization = require("../../blacklist/blacklist.json");
// const customization = require("../../blacklist.json");

module.exports = {
    name: "blacklist",
    category: "",
    description: "",
    run: (client, message, args) => {
        if (!message.author.id === '710513913598312520') return message.reply("You don't have the permission to use this command...:facepalm:");
        //message.delete();
        let blacklist = JSON.parse(fs.readFileSync("../../blacklist/blacklist.json", "utf8"));
        let user = args[0];
        const amount = parseInt(user);
        if (isNaN(amount)) {
            return message.reply('Please enter a valid UserID');
        }
        if (!user) return message.reply('You need to imput a User ID');
        if (args[0] === '710513913598312520') return message.reply("You can't blacklist yourself, Dev:joy: That would be horrible.");
        if (!blacklist[user]) {
            blacklist[user] = {
              id: user,
              state: true
            }
            message.reply(`<@${user}> is now Blacklisted!`);    
            fs.writeFile("../../blacklist/blacklist.json", JSON.stringify(blacklist), err => {
                if(err) throw err;
              });
            client.guilds.forEach((guild) => {
            if(guild.ownerID === user) {
              message.guild.leave(guild.id)
            }
        })
        return;
        }
        if (blacklist[user].state === true) {
            message.reply("That user have already been blacklisted");
        return;
        };
    }
}