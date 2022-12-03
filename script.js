const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
});
const AutoFarm = require("auto-farm")

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
  })
  

AutoFarm({
Client: client, // Type Client
ChannelID: "1023894681186205696", // ID Text Channel
Time: 1, // Type Time With Second
OwO: false // This Option For OwO Put false Or true
})





client.login("OTYyNzcxMjU5NzY5Mzg5MDY2.GKGXCN.XZoawq58_gCoM7X7tZpoSQehLBBkH-rKVSnVDE") // Put Token Account

