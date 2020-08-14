const superagent = require("snekfetch");
const Discord = require("discord.js");

module.exports = {
    name: "kiss",
    category: "NSFW",
    description: "",
    run: (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send("You can only use this command in an NSFW channel so create on....")
        superagent.get("https://nekos.life/api/kiss")
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} kissed ${message.mentions.users.first().username}`)
                .setImage(response.body.url)
                .setColor("RANDOM")
                .setFooter("Tags: kiss")
                .setURL(response.body.url)
                return message.channel.send(embed);
            })
        }
        }