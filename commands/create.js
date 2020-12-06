module.exports = {
    name: 'create',
    description: 'Create a course that users attend and the bot will track deadlines for',
    execute(message, args){
        message.channel.send("Create a course for me to track!");
    }
}