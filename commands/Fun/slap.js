const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "slap",
    description: "",
    category: "Fun",
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to slap!');
          superagent.get('https://nekos.life/api/v2/img/slap')
              .end((err, response) => {
        const lewdembed = new Discord.MessageEmbed()
        .setTitle(user.username + " Just got slapped by " + message.author.username)
        .setImage(response.body.url)
        .setColor(`RANDOM`)
        .setDescription((user.toString() + " Got slapped by " + message.author.toString()))
        .setFooter(`RIP`)
        .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
          }
          };