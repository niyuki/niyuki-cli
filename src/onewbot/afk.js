const { Client, Message, MessageEmbed } = require('discord.js');
const config = require('../../setting.json')
const afkschema = require('../../models/afkschema')


module.exports = {
    name: 'afk',
    aliases: [''],
    description: 'Get AFK',
    userPermissions: ["SEND_MESSAGES"],
    botPermissions: ["EMBED_LINKS"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(config.mongopath) {
            const content = args.join(" ");
        let embed = new MessageEmbed()
            .setColor(message.member.displayColor)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        await afkschema.findOne({ guild: message.guild.id, user: message.author.id }, async(err, data) => {
            if(err) throw err;
            if(!data) {
                let newafk = new afkschema({
                    guild: message.guild.id,
                    user: message.author.id,
                    reason: content
                });
                newafk.save();
                message.channel.send(embed.setDescription(await client.translate(`You have been set to afk\n\n`, message)+` **__Reason__:** \n \`${content}\` `))
            } else {
                afkschema.findOneAndDelete({ guild: message.guild.id, user: message.author.id })
                let newafk = new afkschema({
                    guild: message.guild.id,
                    user: message.author.id,
                    reason: content
                });
                newafk.save();
                message.channel.send(embed.setDescription(await client.translate(`Your afk status has been updated!\n\n`, message)+` **__Reason__:** \n \`${content}\` `))

            }
        })
        } else {
            message.reply('Please enter mongopath to use afk mode!')
        }
        
    }
}