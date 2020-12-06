module.exports = {
    name: 'help',
    description: 'Show a list of commands.',
    execute(message, args){
        message.channel.send("Display a list of available commands!");
    }
}