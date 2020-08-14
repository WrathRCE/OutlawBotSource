const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const { get } = require("snekfetch");

module.exports = {
    name: "bdsm",
    description: "Sends some bdsm",
    category: "NSFW",
    run: async (client, message, args) => {
        if (!message.channel.nsfw) return message.reply("You can only use this command in an NSFW channel so create on....");
        var subreddits = [
            'bdsm',
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        randomPuppy(sub)
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setFooter(`Tags: bdsm`)
                    .setTitle("BDSM")
                    .setURL(url)
                    .setImage(url);
                message.channel.send({
                    embed
                });
            })
        }
    }