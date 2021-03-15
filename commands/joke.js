
module.exports = {
	name: 'joke',
	description: 'Joke',
	execute(message, args) {
		a = Math.random()*10;
		if(a<2) {
		message.channel.send('Did you hear about the mathematician who’s afraid of negative numbers?');
		message.channel.send('He’ll stop at nothing to avoid them.');
		}
		else if (a < 4 ) {
		message.channel.send('I was reading a book on helium. I couldn’t put it down.');
		}
		else if (a < 6 ) {
		message.channel.send('No.');
		setTimeout(() => {  message.channel.send('Just kidding ! .....haha ? '); }, 2000);
		}		
		else if (a < 8 ) {
		message.channel.send('Q: What was the name of the first Electricity Detective?');
		message.channel.send('A: Sherlock Ohms.');
		}
		else {
		message.channel.send('A neutron walks into a bar and asks how much for a drink');
		message.channel.send('Bartender says : for you , no charge !');
		}

		
	},
};