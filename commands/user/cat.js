const apiKey = ''; // your api here
const Discord = require('discord.js');

module.exports = {
  name: 'cat',
  description: 'Get a random cat photo (Only first 4 letters, example: Aegean = aege)',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'breed',
      description: 'Type the breed of the cat (if compound name, follow the example: Australian Mist = amis)',
      type: Discord.ApplicationCommandOptionType.String,
      required: false,
    },
  ],

  run: async (client, interaction) => {
    const { options } = interaction;
    const breed = options.getString('breed') || '';
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breed}`, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    const json = await response.json();
    const image = json[0].url;

    const embed = new Discord.EmbedBuilder()
      .setColor('Random')
      .setTitle('Random cat image!')
      .setImage(image)
      .setTimestamp(new Date());

    interaction.reply({ embeds: [embed] });
  },
};
