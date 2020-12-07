module.exports = {
    name: 'deadline',
    description: 'Add an upcoming deadline for a class.',
    args: true, 
    usage: '<course name + course num> <deadline type> <deadline date DD/MM>',
    guildOnly: true,
    execute(message, args){
        message.channel.send("Add a deadline for a class!");
    }
}