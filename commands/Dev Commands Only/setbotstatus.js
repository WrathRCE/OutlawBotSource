module.exports = {
    name: "setbotstatus",
    category: "Dev Commands Only",
    description: "",
    run: (client, message, args) => {
        if(message.author.id !== "710513913598312520") return;
        else if(setStatus[1] === 'idle'){
            client.user.setStatus('idle')
                .then(message.channel.send("My status has been set to: "+setStatus[1]))
                .catch(console.error);
        } 
        else if(setStatus[1] === 'online'){
            client.user.setStatus('online')
                .then(message.channel.send("My status has been set to: "+ setStatus[1]))
                .catch(console.error);
        }
        else if(setStatus[1] === 'invisible'){
            client.user.setStatus('invisible')
                .then(message.channel.send("My status has been set to: "+ setStatus[1]))
                .catch(console.error);
        }
        else if(setStatus[1] === 'dnd'){
            client.user.setStatus('invisible')
                .then(message.channel.send("My status has been set to: "+ setStatus[1] + "(do not disturb)"))
                .catch(console.error);
        }
        else{
            return message.channel.send("I could not set my status please type one of the following status: idle, online, invisible, dnd (do not disturb)");
        }
    }
}