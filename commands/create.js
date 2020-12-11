module.exports = {
  name: "create",
  description:
    "Create a course that users attend and the bot will track deadlines for",
  args: true,
  usage: "<course name + course num>",
  guildOnly: true,
  execute(message, args) {
    if (!message.guild.roles.cache.find((role) => role.name === `${args[0]}`)) {
      message.channel.send(`Course \`${args[0]}\` has been created!`);
      message.guild.roles.create({
        data: {
          name: `${args[0]}`,
          color: "0x7D70BA",
          //   permissions: ['CREATE_INSTANT_INVITE','READ_MESSAGES','SEND_MESSAGES','EMBED_LINKS','ATTACH_FILES','READ_MESSAGE_HISTORY','EXTERNAL_EMOJIS','MENTION_EVERYONE','CONNECT','SPEAK','CHANGE_NICKNAME']
        },
      });
    } else {
      message.channel.send(`Course \`${args[0]}\` already exists!`);
    }
  },
};
