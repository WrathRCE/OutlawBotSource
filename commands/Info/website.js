const Discord = require("discord.js");

module.exports = {
    name: "website",
    category: "Info",
    run: (client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("Website: Coming Soon!")
        .setFooter("Outlaw bot by: wrath");
        return message.channel.send(embed);
    }
}