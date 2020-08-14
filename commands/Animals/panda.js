const Discord = require("discord.js");
const superagent = require("superagent");
const p = require('phin');

module.exports = {
    name: "panda",
    description: "Returns pandas",
    category: "Animals",
    run: async (client, message, args) => {
        const getResponse = async function() {
            let resp;
            const response = await p({
                url: `https://some-random-api.ml/animal/panda`,
                method: 'get'
            })
            resp = JSON.parse(response.body)
        }
        let Data = getResponse()
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Cute Panda!")
        .setImage(Data.image)
        .setFooter(`some-random-api.ml`);
        return message.channel.send(embed);
    }
}