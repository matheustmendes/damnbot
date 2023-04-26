const Discord = require('discord.js');

module.exports = {

  name: 'help',
  description: 'List all bot commands.',
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const embedPanel = new Discord.EmbedBuilder()
      .setColor('DarkBlue')
      .setAuthor(
        {
          name: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        },
      )
      .setDescription(`Hi, ${interaction.user}, see all my commands. `);
    const embedAdmin = new Discord.EmbedBuilder()
      .setColor('DarkerGrey')
      .setAuthor(
        {
          name: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        },
      )
      .setDescription(`Hi, ${interaction.user}, see my **Admin** commands. `)
      .setFields(
        {
          name: '🔨 \`ban\`', value: '> *Ban a user.*',
        },
        {
          name: '🔨 \`unban\`', value: '> *Unban a user.*',
        },
        {
          name: '🔨 \`kick\`', value: '> *Kick a user.*',
        },
        {
          name: '🔨 \`lock\`', value: '> *Lock the current channel.*',
        },
        {
          name: '🔨 \`unlock\`', value: '> *Unlock the current channel.*',
        },
        {
          name: '🔨 \`clear\`', value: '> *Clear messages in the channel.*',
        },

      );

    const embedGames = new Discord.EmbedBuilder()
      .setColor('DarkerGrey')
      .setAuthor(
        {
          name: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        },
      )
      .setDescription(`Hi, ${interaction.user}, see my **Games** commands. `)
      .setFields(
        {
          name: '🎮 \`rockpscissors\`', value: '> *Play Rock, Paper, Scissors.*',
        },
      );
    const embedUser = new Discord.EmbedBuilder()
      .setColor('DarkerGrey')
      .setAuthor(
        {
          name: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        },
      )
      .setDescription(`Hi, ${interaction.user}, see my **User** commands. `)
      .setFields(
        {
          name: '👤 \`password\`', value: '> *Generate a random password.*',
        },
        {
          name: '👤 \`say\`', value: '> *Tell something to bot say.*',
        },
        {
          name: '👤 \`suggestion\`', value: '> *Do a suggestion.*',
        },
      );

    const embedUtils = new Discord.EmbedBuilder()
      .setColor('DarkerGrey')
      .setAuthor(
        {
          name: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        },
      )
      .setDescription(`Hi, ${interaction.user}, see my **Utils** commands. `)
      .addFields(
        {
          name: '✨ \`botinfo\`', value: '> *See all bot information.*',
        },
        {
          name: '✨ \`infomember\`', value: '> *See the info about mentioned user.*',
        },
        {
          name: '✨ \`infoserver\`', value: '> *See the info about server.*',
        },
        {
          name: '✨ \`ping\`', value: '> *See bot ping.*',
        },
      );

    const panel = new Discord.ActionRowBuilder().addComponents(
      new Discord.StringSelectMenuBuilder()
        .setCustomId('helpPanel')
        .setPlaceholder('Click Here!')
        .addOptions(
          {
            label: 'Start Panel',
            emoji: '📖',
            value: 'panel',
          },
          {
            label: 'Admin',
            emoji: '🔨',
            value: 'admin',
          },
          {
            label: 'Utilities',
            emoji: '✨',
            value: 'utils',
          },
          {
            label: 'Games',
            emoji: '🎮',
            value: 'games',
          },
          {
            label: 'User',
            emoji: '👤',
            value: 'user',
          },
        ),
    );

    interaction.reply({ embeds: [embedPanel], components: [panel], ephemeral: true }).then(() => {
      interaction.channel.createMessageComponentCollector().on('collect', (c) => {
        const value = c.values[0];

        if (value === 'panel') {
          c.deferUpdate();
          interaction.editReply({ embeds: [embedPanel] });
        } else if (value === 'admin') {
          c.deferUpdate();
          interaction.editReply({ embeds: [embedAdmin] });
        } else if (value === 'utils') {
          c.deferUpdate();
          interaction.editReply({ embeds: [embedUtils] });
        } else if (value === 'games') {
          c.deferUpdate();
          interaction.editReply({ embeds: [embedGames] });
        } else if (value === 'user') {
          c.deferUpdate();
          interaction.editReply({ embeds: [embedUser] });
        }
      });
    });
  },

};
