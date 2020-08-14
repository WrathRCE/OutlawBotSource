const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    category: "Utility",
    description: "Answers an 8ball question.",
    run: (client, message, args) => {
        const user = message.mentions.users.first();
        if (!user) return message.reply('Please mention the user who you want the avatar from.');
        if (!user.avatarURL) return message.channel.send(`That user does not have an avatar`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`${user.username}'s Avatar`)
        .setColor("RANDOM")
        .setImage(user.avatarURL())
        return message.channel.send(embed);
    }
}