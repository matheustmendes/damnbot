const Discord = require('discord.js');

const { Configuration, OpenAIApi } = require('openai');

module.exports = {
  name: 'ask',
  description: 'Ask something to me.',
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'question',
      description: 'What is your question?',
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const { options } = interaction;
    const string = options.getString('question');
    const configuration = new Configuration({

      apiKey: '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',
    });

    const openai = new OpenAIApi(configuration);

    const getGPTResponse = async (clientText) => {
      const option = {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: clientText },
        ],
        temperature: 1,
        max_tokens: 500,
      };

      try {
        const getResponse = await openai.createChatCompletion(option);

        const response = getResponse.data.choices[0].message.content;

        return `My answer 🤖\n\n \`${response.trim()}\``;
      } catch (e) {
        return `❌ Error... I can't answer that. Sorry. (${e.getResponse?.data?.error?.message})`;
      }
    };

    const embed = new Discord.EmbedBuilder()
      .setDescription(`Hi, here is my answer to you. ${getGPTResponse()}`)
      .setColor('DarkButNotBlack')
      .setTitle('damnAnswer');

    getGPTResponse(options.getString('question'))
      .then(async (response) => {
        await interaction.deferReply();
        interaction.editReply(response);
      })
      .catch((e) => {
        console.log(e);
      });
  },

};
