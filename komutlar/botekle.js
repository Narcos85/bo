const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../bot.js')
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = async(client, message, args) => {

  if(message.channel.id !== client.botlist.başvurukanal) return message.channel.send(`Sadece <#${client.botlist.başvurukanal}> Bu Kanalda Kullanılabilir.`).then(msg => {msg.delete({timeout: 400})})


let botid = args[0]
let prefix = args[1]
if(!botid) return message.channel.send(`Lütfen Eksik Kısımları Doldurun.\n**Doğru Kullanım**; \`\`${ayarlar.prefix}ekle <bot-id> <bot-prefix>\`\``).then(msg => {msg.delete({timeout: 400})})
if(!prefix) return message.channel.send(`Lütfen Eksik Kısımları Doldurun.\n**Doğru Kullanım**; \`\`${ayarlar.prefix}ekle <bot-id> <bot-prefix>\`\``).then(msg => {msg.delete({timeout: 400})})
message.delete()
  
message.reply(`Botun Başarıyla Başvuruya Alındı. Yapman Gereken Sabırla Onaylanmasını/Reddedilmesini Beklemek.`).then(msg => {msg.delete({timeout: 10000})})
  
  client.channels.cache.get(client.botlist.log).send(`<@&${client.botlist.yetkili}>`)
  
  let embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("Başvuru")
  .setDescription(`**Bot Sahibi**:\n${message.author}\n**Bot ID**:\n${botid}\n**Bot Prefix**:\n${prefix}\n**Davet Linkleri**:\n[Perm 0](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0) | [Perm 8](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)`)
  client.channels.cache.get(client.botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ekle"
}