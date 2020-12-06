module.exports = {
    name: 'ping',
    description: 'ping command that expects bot to return pong',
    execute(message, args){
        message.channel.send('Pong!');
    }
}