const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "whois",
    aliases: ["who", "user", "info"],
    category: "Info",
    description: "Returns user information",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Please mention the user who you want info about.');
        var playing = ("[ " + user.presence.activities + " ]")
        const ihatekids = new Discord.MessageEmbed()
          .setTitle("Whois Information For: ", `${user.name}`)
          .addField("Full Username", `${user.tag}`)
          .addField("ID", user.id)
          .addField("Playing",playing, true)
          .addField("Status", `${user.presence.status}`, true)
          .addField("Joined Discord At", user.createdAt)
          .setColor("RANDOM")
          .setTimestamp()
          .setThumbnail(user.avatarURL())  
        message.channel.send(ihatekids)
    }
}