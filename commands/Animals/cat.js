const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");
module.exports = {
    name: "cat",
    description: "Returns cats",
    category: "Animals",
    run: async (client, message, args) => {

        let {body} = await superagent
        .get(`http://aws.random.cat/meow`);

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(":cat: Cat :cat:")
        .setImage(body.file)
        return message.channel.send(embed);
    }
}