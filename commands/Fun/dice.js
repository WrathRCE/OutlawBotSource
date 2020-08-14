const Discord = require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);

module.exports = {
    name: "dice",
    description: "",
    category: "Fun",
    run: async (client, message, args) => {
        await message.channel.send("Rolling the dice...")
        .then(message => message.edit(`The dice rolled ${rand()}`));
    }
}