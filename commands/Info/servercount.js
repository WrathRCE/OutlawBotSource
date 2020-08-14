module.exports = {
    name: "servercount",
    description: "Returns how many servers the bot is in.",
    category: "Info",
    run: async (client, message, args) => {
        return message.channel.send(`Server count: ${client.guilds.cache.size}`);
        }
    }