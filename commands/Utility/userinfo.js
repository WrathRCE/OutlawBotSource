const Discord = require("discord.js");

module.exports = {
    name: "userinfo",
    aliases: ["who", "user", "info"],
    category: "",
    description: "Returns user information",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        var mention = message.guild.member(message.mentions.users.first());
        if(!mention) return message.channel.send("Please mention someone to get their user info.")
        const userlol = new Discord.MessageEmbed()
        .setThumbnail(mention.user.avatarURL)
        .setColor("RANDOM")
        .addField(`${mention.user.username}\'s ID`, mention.id)
        .addField("Account created at", `${mention.user.createdAt}`)
        .addField("Joined at", `${mention.joinedAt}`)
        message.channel.send(userlol)
        console.log(`USERINFO command from ${message.author.username} USER ID= ${message.author}`)
    }
}