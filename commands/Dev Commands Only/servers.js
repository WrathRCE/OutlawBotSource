const Discord = require('discord.js');

module.exports = {
    name: "servers",
    category: "Dev Commands Only",
    description: "",
    run: (client, message, args) => {
        if(message.author.id !== "710513913598312520") return;
        let bicon = client.user.displayAvatarURL;
        let string = '';
        client.guilds.cache.forEach(guild => {
        string += guild.name + '\n';})
        let bt = client.user.username;
        let botembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("The bot is currently in these servers", string)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL);
        message.channel.send(botembed);
    }
}