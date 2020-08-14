const superagent = require("snekfetch");
const Discord = require("discord.js");

module.exports = {
    name: "cum",
    description: "Sends some cum",
    category: "NSFW",
    run: async (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send("You can only use this command in an NSFW channel so create on....")
        superagent.get('https://nekos.life/api/v2/img/cum')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setTitle("Cum")
                .setImage(response.body.url)
                .setColor("RANDOM")
                .setFooter("Tags: cum")
                .setURL(response.body.url)
                return message.channel.send(embed);
            })
    }
}