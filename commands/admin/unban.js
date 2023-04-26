const Discord = require('discord.js');

module.exports = {
  name: 'unban',
  description: 'Unban a user.',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'user',
      description: 'Mention the user to be unbanned.',
      type: Discord.ApplicationCommandOptionType.User,
      required: true,
    },
    {
      name: 'reason',
      description: 'Tell the reason for unban the user.',
      type: Discord.ApplicationCommandOptionType.String,
      required: false,
    },
  ],

  run: async (client, interaction) => {
    if (
      !interaction.member.permissions.has(
        Discord.PermissionFlagsBits.BanMembers,
      )
    ) {
      interaction.reply("❌ You don't have permission to unban a member.");
    } else {
      const user = interaction.options.getUser('user');
      const reason = interaction.options.getString('reason');

      const embed = new Discord.EmbedBuilder()
        .setColor('Random')
        .setDescription(`❗ The user ${user} (\`${user.id}\`) has been unbanned.`);

      const embedError = new Discord.EmbedBuilder()
        .setColor('Red')
        .setDescription('❌ Oops.. Something went wrong!');

      interaction.guild.members
        .unban(user.id, reason)
        .then(() => {
          interaction.reply({ embeds: [embed] });
        })
        .catch((err) => {
          interaction.reply({ embeds: [embedError] });
        });
    }
  },
};
