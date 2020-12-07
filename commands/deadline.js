module.exports = {
    name: 'deadline',
    description: 'Add an upcoming deadline for a class.',
    execute(message, args){
        message.channel.send("Add a deadline for a class!");
    }
}