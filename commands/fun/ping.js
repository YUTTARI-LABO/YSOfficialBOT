module.exports = {
	name: 'ping',
	category: 'fun',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};