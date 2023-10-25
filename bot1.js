const Discord = require("discord.js");
require("discord-reply");
const client = new Discord.Client();
const bot = require("discord-chatbot");
const chatbot = new bot({ name: "bot1" });
const { channelId } = require("./config.json");
require("dotenv").config();


//test
client.on("ready", () => {
  console.log(`${client.user.tag} is ready !`);
  client.channels.cache.get(channelId).send("Heyyowww !");
});

client.on("message", async (message) => {
  if (
    message.author.bot &&
    message.channel.id === channelId &&
    message.author.id !== client.user.id
  ) {
    setTimeout(async () => {
      const text = await chatbot.chat(message.content);
      message.lineReply(text);
    }, 3000);
  }
});

client.login(process.env.TOKEN_BOT1);
