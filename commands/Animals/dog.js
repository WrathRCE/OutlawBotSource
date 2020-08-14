const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");
module.exports = {
    name: "dog",
    description: "Returns dogs",
    category: "Animals",
    run: async (client, message, args) => {

        let {body} = await superagent
        .get(`https://random.dog/woof.json`);

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(":dog: Dog :dog:")
        .setImage(body.url)
        return message.channel.send(embed);
    }
}