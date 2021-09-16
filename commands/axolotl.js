const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    const response = await fetch('https://axoltlapi.herokuapp.com/')
    const body = await response.json();
        // console.log(body.url);
        // console.log(body.facts)
    var bodyurl = body.url
    let embed = new Discord.MessageEmbed()
        .setTitle("axolotls are cool")
        .setColor(3447003)
        .setURL(body.url)
        .setImage(body.url)
        .setDescription(body.facts)
        .setTimestamp()
        .setFooter(`Axolotl Bot`);
    await message.channel.send(embed);
};

module.exports.help = {
    name: "axolotl"
};