const Discord = require("discord.js"); // const Discord to communicate with node modules

const { prefix, token } = require("./config.json"); // token and prefix from config file

const client = new Discord.Client(); // bot instance - Clyde

const fs = require("fs"); // file system

client.commands = new Discord.Collection(); // collection of commands

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js")); // read .js files in commands folder

/**
 * read all command files in folder and add to collection
 */
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

/**
 * run Clyde bot
 */
client.once("ready", () => {
  console.log("Clyde is online.");
});

/**
 * respond to message command
 */
client.on("message", (message) => {
  /**
   * check if message is a command. if not, do nothing.
   */
  if (!message.content.startsWith(prefix)) {
    return;
  }

  /**
   * check if message author is Clyde itself. if so, do nothing.
   */
  if (message.author.bot) {
    return;
  }

  /**
   * decipher command and store it in command const
   */
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  /**
   * commands
   */
  if (!client.commands.has(commandName)) return; // if user entered command does not exist in collection, do nothing.

  const command = client.commands.get(commandName);

  if (command.args && !args.length) {
    let reply = `No arguments were provided!`;

    if (command.usage) {
      reply += `\nExpected command usage is: \`${prefix}${command.name} ${command.usage}\``;
    }
    return message.channel.send(reply);
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply(
      `An error has occurred while trying to execute that command! Please ensure proper comman usage using \`${prefix}help ${command.name}\``
    );
  }
});

client.login(token);
