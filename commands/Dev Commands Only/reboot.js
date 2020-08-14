const Discord = require('discord.js');

module.exports = {
    name: "reboot",
    category: "Dev Commands Only",
    description: "",
    run: (client, message, args) => {
        if(message.author.id !== "710513913598312520") return;
        message.channel.send("**Rebooting bot...**").then(m => {
            setTimeout(() => {
                m.edit("**Rebooting...**").then(ms => {
                    setTimeout(() => {
                        ms.edit("**Done Rebooting.**")
                    }, 1000)
                })
            }, 1000)
        })
        .then(message => process.exit())
        .then(() => client.login(process.env.TOKEN))
    }
}