module.exports = {
    name: "setbotname",
    category: "Dev Commands Only",
    description: "",
    run: (client, message, args) => {
        if(message.author.id !== "710513913598312520") return;
        try{
            client.user.setUsername(newName[1])
                .then(user => message.channel.send(`My new username is **${user.username}**`))
                .catch(console.error);
        }
        catch(error){
            message.channel.send("I could not set my new username :sob:");
        }
    }
}