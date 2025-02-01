const { Client, MessageEmbed, Collection, Interaction, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');

const client = new Client({intents: 3276799});

const express = require('express')
const app = express()
app.listen(() => console.log("Project Is Started"))


client.on('ready', () => {
    client.user.setActivity({
        type: 'PLAYING',name: 'gg/mayor'})
      console.log(`Done Login : ${client.user.username}`);
      console.log(`Logged in as ────────────────────────────────────────────────────────────────────────────────────────────
─██████──────────██████─██████████████─████████──████████─██████████████─████████████████───
─██░░██████████████░░██─██░░░░░░░░░░██─██░░░░██──██░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░░░██───
─██░░░░░░░░░░░░░░░░░░██─██░░██████░░██─████░░██──██░░████─██░░██████░░██─██░░████████░░██───
─██░░██████░░██████░░██─██░░██──██░░██───██░░░░██░░░░██───██░░██──██░░██─██░░██────██░░██───
─██░░██──██░░██──██░░██─██░░██████░░██───████░░░░░░████───██░░██──██░░██─██░░████████░░██───
─██░░██──██░░██──██░░██─██░░░░░░░░░░██─────████░░████─────██░░██──██░░██─██░░░░░░░░░░░░██───
─██░░██──██████──██░░██─██░░██████░░██───────██░░██───────██░░██──██░░██─██░░██████░░████───
─██░░██──────────██░░██─██░░██──██░░██───────██░░██───────██░░██──██░░██─██░░██──██░░██─────
─██░░██──────────██░░██─██░░██──██░░██───────██░░██───────██░░██████░░██─██░░██──██░░██████─
─██░░██──────────██░░██─██░░██──██░░██───────██░░██───────██░░░░░░░░░░██─██░░██──██░░░░░░██─
─██████──────────██████─██████──██████───────██████───────██████████████─██████──██████████─
────────────────────────────────────────────────────────────────────────────────────────────`);
   console.log(`MAYOR SERVER : https://discord.gg/yBTBrffauG 💎`);
   console.log(`MAYOR YouTube : https://youtube.com/@3mran77?  🤍`);
})

let parentId = ''// ايدي الكاتيورجي او الكتلوق الي تفتح فيه التكتات
let supportId = '' // ايدي الرتبة الي تقدر تستلم
client.on('channelCreate', cc => {
    if (cc.parent.id == parentId) {
        const embed = new MessageEmbed()
        .setDescription('**اضغط على استلام لتصبح مسؤول التكت**')
            .setColor('#CCA66A')
        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('claimm')
                .setStyle('SUCCESS')
                .setLabel('استلام')
        )
        setTimeout(() => {
            cc.send({
                embeds: [embed],
                components: [row],
            })
        }, 2000);
    }
})

client.on('interactionCreate', async (intr) => {
    if (!intr.isButton()) return;
    const embedd = new MessageEmbed()
        .setDescription('**اِضغط على زر لتصبح مسؤول التكت**')
        .setColor('#CCA66A')
    const roww = new MessageActionRow().addComponents(
        new MessageButton()
            .setCustomId('claimm')
            .setStyle('SUCCESS')
            .setLabel('استلام'),
    )
    const rowww = new MessageActionRow().addComponents(
        new MessageButton()
            .setCustomId('unclaimm')
            .setStyle('DANGER')
            .setLabel('الغاء الاستلام'),
    )
    if (intr.customId === 'claimm') {
        if (!intr.member.roles.cache.has(supportId)) return intr.reply({
            content: 'لا يمكنك استعمال الزر!!',
            ephemeral: true
        })
        intr.message.delete().then(async (e) => {
            intr.channel.permissionOverwrites.edit(intr.guild.roles.cache.find(x => x.id == supportId), {
                'SEND_MESSAGES': false,
                'VIEW_CHANNEL': true
            }).then(async (e) => {
                intr.channel.permissionOverwrites.edit(intr.member, {
                    'VIEW_CHANNEL': true
                }).then(async (e) => {

                    const embed = new MessageEmbed()
                        .setDescription(`تم استلام التذكرة من قبل : ${intr.user}`)
                    await intr.channel.send({
                        embeds: [embed],
                        components: [rowww]
                    })
                })
            })
        })
    }
});
      client.on('interactionCreate', async (intr) => {
    if (!intr.isButton()) return;
    const embedd = new MessageEmbed()
        .setDescription('** gg/mayor اضغط على استلام لتصبح مسؤول التكت**')
        .setColor('#CCA66A')
    const roww = new MessageActionRow().addComponents(
        new MessageButton()
            .setCustomId('claimm')
            .setStyle('SUCCESS')
            .setLabel('استلام'),
    )
    const rowww = new MessageActionRow().addComponents(
        new MessageButton()
            .setCustomId('unclaimm')
            .setStyle('DANGER')
            .setLabel('الغاء الاستلام'),
    )
            if (intr.customId === 'unclaimm') {
        if (!intr.member.roles.cache.has(supportId)) return intr.reply({
            content: 'لا يمكنك استعمال الزر!!',
            ephemeral: true
        })
        intr.message.delete().then(async (e) => {
            intr.channel.permissionOverwrites.edit(intr.guild.roles.cache.find(x => x.id == supportId), {
                'SEND_MESSAGES': true,
                'VIEW_CHANNEL': true
            }).then(async (e) => {
                intr.channel.permissionOverwrites.edit(intr.member, {
                    'SEND_MESSAGES': null,
                }).then(async (e) => {

                    const embed = new MessageEmbed()
                        .setDescription(`تم ترك التذكرة يرجى انتظار اداري اخر لكي يستلم هذه التذكرة`)
                    await intr.channel.send({
                        content: `<@&${supportId}>`,
                        embeds: [embed],
                        components: [roww]
                    })
                })
            })
        })
    }
});

////////////////////

process.on("unhandledRejection", error => {
    return console.log(error)
});

///////////////////

client.login("توكن البوت")