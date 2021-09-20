const client = require('../../niyuki')
const prefix = client.prefix;
const { Collection, MessageEmbed } = require('discord.js');
const Timeout = new Collection();
const ms = require('ms')
const config = require('../../setting.json')
const afkschema = require('../../models/afkschema')

client.on('message', async message =>{
    if(message.author.bot) return;
    const member = message.mentions.members.first()
    if(config.mongopath) {
        await afkschema({ guild: message.guild.id, user: message.author.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                afkschema.findOneAndDelete({ guild: message.guild.id, user: message.author.id })
                message.reply(`Your afk status have been removed (${data.reason})`)
            } else {
                if(member) {
                    await afkschema({ guild: message.guild.id, user: member.id }, async(err, data) => { 
                     if(data) return message.channel.send(`${member.tag} is currently afk. Please stop mentioning him or go ahead and message him via dms \n Reason: ${data.reason}`)
                    })
                } else {
                if(!message.content.startsWith(prefix)) return;
        if(!message.guild) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if(cmd.length == 0 ) return;
        let command = client.commands.get(cmd)
        if(!command) command = client.commands.get(client.aliases.get(cmd));
        if (command) {
            if(!message.member.permissions.has(command.userPermissions || [])) return message.channel.send(await client.translate("You do not have permission to use this command!", message));
            if(!message.guild.me.permissions.has(command.botPermissions || [])) return message.channel.send(await client.translate("I do not have permission to use this command!", message))
            if(command.cooldown) {
                if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(await client.translate(`You are on cooldown of \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\` .`),message)
                command.run(client, message, args)
                Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
                setTimeout(() => {
                    Timeout.delete(`${command.name}${message.author.id}`)
                }, command.cooldown)
            } else 
                command.run(client, message, args)
                client.channels.cache.get(config.CommandLog).send(new MessageEmbed()
                    .setTitle(`${await client.translate(`Used Command: `, message)} ${command.name}`)
                    .setDescription(` ${message.author.tag} ${await client.translate(` user used the command ${command.name}! Command was used in this channel: ${message.channel.name}`,message)}`)
                    .setColor('#fff5ee')
                    .setFooter('🔥 Niyuki On Fire 🔥'))
            }
            }}
        })
    } else {
        if(!message.content.startsWith(prefix)) return;
        if(!message.guild) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if(cmd.length == 0 ) return;
        let command = client.commands.get(cmd)
        if(!command) command = client.commands.get(client.aliases.get(cmd));
        if (command) {
            if(!message.member.permissions.has(command.userPermissions || [])) return message.channel.send(await client.translate("You do not have permission to use this command!", message));
            if(!message.guild.me.permissions.has(command.botPermissions || [])) return message.channel.send(await client.translate("I do not have permission to use this command!", message))
            if(command.cooldown) {
                if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(await client.translate(`You are on cooldown of \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\` .`),message)
                command.run(client, message, args)
                Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
                setTimeout(() => {
                    Timeout.delete(`${command.name}${message.author.id}`)
                }, command.cooldown)
            } else 
                command.run(client, message, args)
                client.channels.cache.get(config.CommandLog).send(new MessageEmbed()
                    .setTitle(`${await client.translate(`Used Command: `, message)} ${command.name}`)
                    .setDescription(` ${message.author.tag} ${await client.translate(` user used the command ${command.name}! Command was used in this channel: ${message.channel.name}`,message)}`)
                    .setColor('#fff5ee')
                    .setFooter('🔥 Niyuki On Fire 🔥'))
            }
            
    }
});