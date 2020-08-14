const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api("4637c68e4839ba68b83f4750d3c78d061e11122f" , {
    notFoundAsError: true,
    completeScores: false 
})

module.exports = {
    name: "osu",
    category: "Game Trackers",
    description: "",
    run: (client, message, args) => {
        let username = args[0]
        if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (osu!)')
        api.getUser({u: username}).then(user => {
        const embed = new Discord.MessageEmbed()
        .setTitle('User Osu Search System')
        .setDescription(`Using with node-osu module`)
        .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
        .setColor("RANDOM")
        .addField('Nickname', user.name, true)
        .addField('PP', Math.round(user.pp.raw), true)
        .addField('Rank', user.pp.rank, true)
        .addField('Level', Math.round(user.level), true)
        .addBlankField()
        .addField('Country', user.country, true)
        .addField('Country Rank', user.pp.countryRank, true)
        .addField('Playcount', user.counts.plays, true)
        .addField('Accuracy', `${user.accuracyFormatted}`, true)
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send(embed)
})
    }
}