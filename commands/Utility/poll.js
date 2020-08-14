const Discord = require('discord.js')

module.exports = {
    name: "poll",
    description: "",
    category: "Utility",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.some("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
            message.channel.send('Invalid permissions.');
            return;
        }
        if (!args[0]) return message.channel.send('Proper usage: poll <question>');
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM") //To change color do .setcolor("#fffff")
            .setTitle('React to Vote.')
            .setDescription(args.join(' '))
            .setFooter(`Poll Created By ${message.author.username}`); 
        let msg = await message.channel.send(embed)
            .then(function (msg) {
                msg.react("👍");
                msg.react("👎"); // You can only add two reacts
                message.delete({timeout: 1000});
                }).catch(function(error) {
                console.log(error);
            });
    },
}