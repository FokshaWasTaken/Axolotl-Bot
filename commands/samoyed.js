const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    const response = await fetch('https://dog.ceo/api/breed/samoyed/images/random')
    const body = await response.json();
    const resp = await fetch('https://dog-api.kinduff.com/api/facts')
    const pp = await resp.json();
    let embed = new Discord.MessageEmbed()
        .setTitle("so cute ong.")
        .setColor(3447003)
        .setDescription(pp.facts)
        .setImage(body.message)
        .setTimestamp()
        .setFooter(`Axolotl Bot`);
    await message.channel.send(embed);
};


    

module.exports.help = {
    name: "samoyed"
};