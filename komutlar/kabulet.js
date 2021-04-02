const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../bot.js')

exports.run = async(client, message, args) => {
	if(!message.member.roles.cache.has(client.botlist.yetkili)) return message.channel.send('**Bot Kabul Etmek İçin `BotList Yetkili` Rolüne Sahip Olmalısın!**').then(msg => {msg.delete({timeout: 400})})
  if(message.channel.id !== client.botlist.kanalyetkili) return message.channel.send(`Sadece <#${client.botlist.kanalyetkili}> Bu Kanalda Kullanabilir.`).then(msg => {msg.delete({timeout: 400})})

let botid = args[0]
let sahip = args[1]
if(!botid) return message.channel.send(`Bir Bot ID Girmelisin.`).then(msg => {msg.delete({timeout: 400})})
if(!sahip) return message.channel.send(`Botun Sahibini Bilmeden Nasıl Başvurananın Botunu Onaylıyacağım?`).then(msg => {msg.delete({timeout: 400})})
message.delete()
  
message.channel.send(`<a:onaylanmak:820348822471311380> <@${botid}> İsimli Bot Başarıyla Onaylandı!`).then(msg => {msg.delete({timeout: 400})})
  
   message.guild.members.cache.get(botid).roles.add(client.botlist.botrol)
 message.guild.members.cache.get(sahip).roles.add(client.botlist.geliştirici)
  
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
.setDescription(`<a:onaylanmak:820348822471311380>  **|**  <@${botid}> Adlı Bot Onaylandı Bot Sahip : <@${sahip}>.`)
client.channels.cache.get(client.botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:['onayla'],
	permlevel: 0
};

exports.help = {
	name: "kabulet",
  description : ""
}