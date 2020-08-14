const superagent = require("snekfetch");
const Discord = require("discord.js");

module.exports = {
    name: "girlsolo",
    description: "Sends some solo girls",
    category: "NSFW",
    run: async (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send("You can only use this command in an NSFW channel so create on....")
        superagent.get('https://nekos.life/api/v2/img/solog')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setTitle("Girl Solo (Hentai)")
                .setImage(response.body.url)
                .setColor("RANDOM")
                .setURL(response.body.url)
                return message.channel.send(embed);
            })
        }
    }