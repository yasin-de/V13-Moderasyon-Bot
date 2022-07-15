const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {



        const embed = new Discord.MessageEmbed()

        .setColor("BLUE")

        .setFooter( " Moderasyon", client.user.avatarURL())

       
        .setDescription(`
       
    
       
       ${client.commands
       
         .filter(cmds => cmds.kategori == "mod")
       
         .map(komut => ` <:880072774041878609:881951010057240626> **${ayarlar.prefix}${komut.name}** = ${komut.description || "**Açıklama Eklenmemiş**"}`)
       
         .join('\n')}
       
    
    `)
       .setTimestamp()
         
        
       
       message.channel.send({embeds: [embed]}) 
       

},

name: "yardım",
description: "",
aliases: [],
kategori: "",
usage: "",
}