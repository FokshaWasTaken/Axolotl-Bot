const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    const response = await fetch('https://random-d.uk/api/random')
    const body = await response.json();
     console.log(body.url);
     console.log("Duck Command")
    let embed = new Discord.MessageEmbed()
        .setTitle("DUCK")
        .setColor(3447003)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`Axolotl Bot`);
    await message.channel.send(embed);
};


    

module.exports.help = {
    name: "duck"
};