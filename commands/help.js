const {prefix} = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Show a list of commands or usage info about a command.',
    guildOnly: true,
    execute(message, args){
        const data = [];
        const {commands} = message.client;
        if (!args.length){
            data.push('List of all things Clyde can do:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nUse \`${prefix}help <command name>\` for more detailed information of a specific command.`);

            return message.channel.send(data, {split: true})

        };

        const name = args[0].toLowerCase();
        const command = commands.get(name);

        if (!command){
            return message.channel.send('That\'s not a valid command!');
        }
        data.push(`**${command.name}**: ${command.description}`);
        // if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** \`${prefix}${command.name} ${command.usage}\``);
        

        message.channel.send(data, {split: true});
    }
}