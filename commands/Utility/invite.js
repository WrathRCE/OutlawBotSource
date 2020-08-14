module.exports = {
    name: "invite",
    category: "Utility",
    description: "Sends an inv link.",
    run: (client, message, args) => {
        return message.reply("https://discord.com/oauth2/authorize?client_id=734153736523350049&permissions=8&scope=bot");
    }
}