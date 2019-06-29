const Discord = require('discord.js');

const client = new Discord.Client();
const { token } = require('./config.json');

const fancam_link = require('./fancam.json');

client.commands = new Discord.Collection();

client.on('ready', () => {
    console.log('Coco is ready!');
});

client.on('message', message => {
    let reply = "";
    let myMessage = message.content.toLowerCase();
    
    // Prevent it reading itself
    if (message.author.bot) return;
    
    for (let member in fancam_link) {
        console.log(member);
        if ( myMessage.includes(member) ) {
            reply = reply + "STAN " + member.toUpperCase() + "\n";
            reply = reply + fancam_link[member][0];
            console.log(reply);
            return message.channel.send(reply);
        }
       
    }
    return;

});

client.login(token);
