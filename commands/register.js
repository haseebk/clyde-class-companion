module.exports = {
    name: 'register',
    description: 'Register for an existing course and be reminded of deadlines and class times',
    execute(message, args){
        message.channel.send("Register for an existing class to receive reminders!");
    }
}