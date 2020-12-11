module.exports = {
  name: "register",
  description:
    "Register for an existing course and be reminded of deadlines and class times",
  args: true,
  usage: "<course name + course num>",
  guildOnly: true,
  execute(message, args) {
    let role = message.guild.roles.cache.find(
      (role) => role.name === `${args[0]}`
    );
    let registered = message.member.roles.cache.has(role.id);

    if (role) {
      if (!registered) {
        message.member.roles.add(role);
        message.channel.send(
          `You have successfully registered for course \`${args[0]}\`!`
        );
      } else {
        message.channel.send(
          `You have already registered for course \`${args[0]}\`!`
        );
      }
    } else {
      message.channel.send(`Course \`${args[0]}\` does not exist!`);
    }
  },
};
