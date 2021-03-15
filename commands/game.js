module.exports = {
	name: 'game',
	description: 'Let\'s play a game',
	execute(message, args) {
		message.channel.send('React to me !');
		client.on('messageReactionAdd', (reaction, user) => {
        let message = reaction.message, emoji = reaction.emoji;
        user.send('Noice !');
        // Remove the user's reaction
        reaction.remove(user);
});



	},
};