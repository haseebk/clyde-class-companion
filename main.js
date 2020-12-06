const Discord = require("discord.js"); // const Discord to communicate with node modules

const { prefix, token } = require('./config.json'); // token and prefix from config file

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
  const commandArgs = message.content.slice(prefix.length).split(/ +/);
  const command = commandArgs.shift().toLowerCase();

  /**
   * commands
   */
  if (command == "ping") {
    client.commands.get("ping").execute(message, commandArgs);
  } else if (command == "create") {
    client.commands.get("create").execute(message, commandArgs);
  } else if (command == "register") {
    client.commands.get("register").execute(message, commandArgs);
  } else if (command == "help") {
    client.commands.get("help").execute(message, commandArgs);
  } else if (command == "deadline") {
      client.commands.get("deadline").execute(message, commandArgs);
  }
});

client.login(token);
