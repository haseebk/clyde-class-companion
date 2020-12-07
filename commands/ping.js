module.exports = {
    name: 'ping',
    description: 'ping command that expects bot to return pong',
    guildOnly: true,
    execute(message, args){
        message.channel.send('Pong!');
    }
}