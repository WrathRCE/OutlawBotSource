const Discord = require("discord.js");
const customization = require("../../customization.json");

module.exports = {
    name: "about",
    category: "Info",
    description: "",
    run: (client, message, args) => {
        message.delete();
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("About Outlaw", `Outlaw is a discord bot created by ${customization.ownername}, Multi purpose discord bot written in Discord.js to see all the commands type ^help`)
        .setFooter(`Outlaw | Created by ${customization.ownername}`)
        return message.channel.send(embed);
    }
}