const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    const response = await fetch('https://randomfox.ca/floof/')
    const body = await response.json();
     console.log(body.image);
     console.log("Fox")
    let embed = new Discord.MessageEmbed()
        .setTitle("FLOOF")
        .setColor(3447003)
        .setImage(body.image)
        .setTimestamp()
        .setFooter(`Axolotl Bot`);
    await message.channel.send(embed);
};


    

module.exports.help = {
    name: "fox"
};