const superagent = require("snekfetch");
const Discord = require("discord.js");

module.exports = {
    name: "bj",
    description: "Sends some blowjobs",
    category: "NSFW",
    run: async (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send("You can only use this command in an NSFW channel so create on....")
        superagent.get('https://nekos.life/api/v2/img/bj')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setTitle("BJ")
                .setImage(response.body.url)
                .setColor("RANDOM")
                .setFooter("Tags: bj")
                .setURL(response.body.url)
                return message.channel.send(embed);
            })
    }
}