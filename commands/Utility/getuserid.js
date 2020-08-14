const Discord = require("discord.js");

module.exports = {
    name: "getuserid",
    description: "Gets the User's ID",
    category: "Utility",
    run: async (client, message, args) => {
        var mention = message.guild.member(message.mentions.users.first());
        if(!mention) return message.channel.send("Mention a user to get their ID")
        const lolid = new Discord.MessageEmbed()
        .setThumbnail(mention.user.avatarURL)
        .setColor("RANDOM")
        .addField('Here is ' + `${mention.user.username}\'s ID`, mention.id)
        message.channel.send(lolid)  
    }
}