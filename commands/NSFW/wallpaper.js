const superagent = require("snekfetch");
const Discord = require("discord.js");

module.exports = {
    name: "wallpaper",
    description: "Sends some wallpapers",
    category: "NSFW",
    run: async (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send("You can only use this command in an NSFW channel so create on....")
        superagent.get('https://nekos.life/api/v2/img/wallpaper')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setTitle("Hentai")
                .setImage(response.body.url)
                .setColor("RANDOM")
                .setFooter("Tags: wallpaper")
                .setURL(response.body.url)
                return message.channel.send(embed);
            })
    }
}