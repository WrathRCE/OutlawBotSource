const superagent = require("snekfetch");
const Discord = require("discord.js");

module.exports = {
    name: "4k",
    description: "",
    category: "NSFW",
    run: async (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send("You can only use this command in an NSFW channel so create on....")
        superagent.get('https://boob.bot/api/v2/img/4k')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setTitle("4k")
                .setImage(response.file.url)
                .setColor("RANDOM")
                .setFooter("Free nudes thanks to boobbot & tom <3")
                .setURL(response.file.url)
                return message.channel.send(embed);
            })
    }
}