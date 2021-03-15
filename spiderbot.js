'use strict';
const { SSL_OP_TLS_ROLLBACK_BUG } = require('constants');
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

const fs = require('fs');
const prefix = '!' ;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}





client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'ping') {
    client.commands.get('ping').execute(message, args); }
  else if (command === 'joke') {
    client.commands.get('joke').execute(message, args); }
  else if (command === 'j') {
    client.commands.get('chjoin').execute(message, args, client); }
  else if (command === 'game') {
     message.channel.send('React to me !'); }
});


// Log our bot in using the token from https://discord.com/developers/applications
client.login('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
