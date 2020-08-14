const { MessageEmbed } = require("discord.js");
const beautify = require("beautify");
const colors = require("..//..//colors.json");

module.exports = {
    name: "eval",
    category: "Dev Commands Only",
    description: "",
    run: (client, message, args) => {
        if (message.author.id !== "710513913598312520") {
            return message.channel.send("**YOU CANNOT USE THIS COMMAND!**")
                .then(m => m.delete(5000));
        }

        if (!args[0]) {
            return message.channel.send("You need to evaluate _**SOMETHING**_, please!")
                .then(m => m.delete(5000));
        }

        try {
            if (args.join(" ").toLowerCase().includes("token")) {
                return;
            }

            const toEval = args.join(" ");
            const evaluated = eval(toEval);
            let embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL)
                .setTitle("Eval")
                .addField("To Evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
                .addField("Evaluated:", evaluated)
                .addField("Type:", typeof(evaluted));
                return message.channel.send(embed);
        } catch (e) {
            let embed = new MessageEmbed()
            .setColor(colors.red)
            .setTitle("\:x: Error!")
            .setDescription(e)
            .setFooter(client.user.username, client.user.displayAvatarURL);
            return message.channel.send(embed);
        }
    }
}