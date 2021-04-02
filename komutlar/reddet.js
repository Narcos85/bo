const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../bot.js')
exports.run = async(client, message, args) => {
  
		if(!message.member.roles.cache.has(client.botlist.yetkili)) return message.channel.send("**Bot Kabul Etmek İçin `BotList Yetkili` Rolüne Sahip Olmalısın!**").then(msg => {msg.delete({timeout: 400})})
  if(message.channel.id !== client.botlist.kanalyetkili) return message.channel.send(` <#${client.botlist.kanalyetkili}> Bu Kanalda Kullanabilir.`).then(msg => {msg.delete({timeout: 400})})

let botid = args[0]
let sahip = args[1]
let sebep = args.slice(2).join(' ')
if(!botid) return message.channel.send("Bir Bot İd Gir.").then(msg => {msg.delete({timeout: 400})})
if(!sahip) return message.channel.send("Sahip İd Giriniz.").then(msg => {msg.delete({timeout: 400})})
  if(!sebep) return message.channel.send("Sebep Giriniz.").then(msg => {msg.delete({timeout: 400})})
message.delete()
  
message.channel.send("<a:onaylanmak:820348822471311380> **|** Başarıyla Botu Reddetiniz.").then(msg => {msg.delete({timeout: 400})})
  
 message.guild.members.cache.get(sahip).send(`<a:reddetmek:820348936027504680> **|** <@${botid}> Adlı Bot  Reddildi.`)
  
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
.setDescription(`<a:reddetmek:820348936027504680> **|**  <@${botid}> Adlı Bot  **${sebep}** Nedeniyle Reddedildi.`)
client.channels.cache.get(client.botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "reddet"
  
}