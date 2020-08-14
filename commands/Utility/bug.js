const Discord = require('discord.js');

module.exports = {
    name: "bug",
    description: "Sends a bug report",
    category: "Utility",
    run: async (client, message, args) => {
        const { config } = client;
        let bugText = args.join(" ");
        if (!bugText) return message.reply("I can't send an empty bug report!");
        message.reply("Thank you for submitting a bug, hopefully it won't require major surgery :grimacing:");
        const bug = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n\n"${bugText}"\n\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
        let embed = new Discord.MessageEmbed()
        .setTitle("Bug Report")
        .setDescription(bug)
        .setColor("RANDOM");

    client.channels.get(config.bugChannel).send(embed)
        .catch(console.error);
    }
}