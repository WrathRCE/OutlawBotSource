module.exports = {
    name: "kick",
    category: "Moderation",
    description: "",
    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!message.member.hasPermission("KICK_MEMBERS")){
        message.channel.send("You don't have the permissions to use this command!");
    }
    else{
        if(!member)
            return message.channel.send("Please mention a valid member of this server");
        if(!member.kickable) 
            return message.channel.send("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
        let reason = args.slice(1).join(' ');
        if(!reason) 
            reason = "No reason provided";
        member.kick(reason)
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    }
}
}