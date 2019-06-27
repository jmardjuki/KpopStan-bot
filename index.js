const Discord = require('discord.js');

const client = new Discord.Client();
const { token } = require('./config.json');

client.commands = new Discord.Collection();

client.on('ready', () => {
      console.log('Ready!');
});


client.login(token);
