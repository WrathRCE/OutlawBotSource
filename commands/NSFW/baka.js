const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
    name: "baka",
    description: "",
    category: "NSFW",
    run: async (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send("You can only use this command in an NSFW channel so create on....")
        superagent.get('https://nekos.life/api/v2/img/baka')
        .end((err, response) => {
        const lewdembed = new Discord.MessageEmbed()
        .setTitle("BAKA")
        .setImage(response.body.url)
        .setColor("RANDOM")
        .setFooter("Tags: baka")
        .setURL(response.body.url);
        message.channel.send(lewdembed);
        })
    }
}