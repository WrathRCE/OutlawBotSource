const Discord = require('discord.js');
let days = 0;
let week = 0;

module.exports = {
    name: "info",
    description: "Returns bots info",
    category: "Info",
    run: async (client, message, args) => {
        let uptime = ``;
        let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let servers = client.guilds.cache.size;
        let users = client.users.cache.size;
        if(hours > 23){
        days = days + 1;
        hours = 0;
    }
        if(days == 7){
        days = 0;
        week = week + 1;
    }
        if(week > 0){
        uptime += `${week} week, `;
    }
        if(minutes > 60){
        minutes = 0;
    }
        uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        let serverembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Outlaw`, client.user.displayAvatarURL)
        .addField(`Version`,`1.1`, true)
        .addField(`Library`,`Discord.js` , true)
        .addField(`Developer`,`wrath#1234`, true)
        .addField(`Servers`, `${servers}`, true)
        .addField(`Users`, `${users}`, true)
        .addField(`Invite`, `[Invite Outlaw](https://discord.com/oauth2/authorize?client_id=734153736523350049&permissions=8&scope=bot)`, true)
        .addField(`Donate Via PayPal`, `[PayPal](https://www.paypal.com/paypalme/ExtortTheGod)`, true)
        .addField(`Donate Via Bitcoin`, `[Bitcoin](https://pastebin.com/raw/j8Fgjp0Y)`, true)
        .addField(`Donate Via Ethereum`, `[Ethereum](https://pastebin.com/raw/KSR5psNc)`, true)
        .addField(`Donate Via Bitcoin Cash`, `[Bitcoin Cash](https://pastebin.com/raw/TQF7gKds)`, true)
        .addField(`Donate Via Monero`, `[Monero](https://pastebin.com/raw/v6v1QBVu)`, true)
        .setFooter(`Uptime: ${uptime}`);
        message.channel.send(serverembed);
    }
}