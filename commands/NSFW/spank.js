const superagent = require("snekfetch");
const Discord = require("discord.js");

module.exports = {
    name: "spank",
    category: "NSFW",
    description: "",
    run: (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send("You can only use this command in an NSFW channel so create on....")
        superagent.get("https://nekos.life/api/v2/img/spank")
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setTitle(`${message.mentions.users.first().username}, You got spanked by: ${message.author.username} <3`)
                .setImage(response.body.url)
                .setColor("RANDOM")
                .setFooter("Tags: spank")
                .setURL(response.body.url)
                return message.channel.send(embed);
            })
        }
        }