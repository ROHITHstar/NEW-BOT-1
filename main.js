const Discord = require('discord.js');

const client = new Discord.Client();

//guild members
 /*const guild = client.guilds.cache.get("762936518230278174");
   setInterval(function () {
      var memberCount = guild.memberCount();
      //var memberCountChannel = client.channels.get("");
       client.user.setActivity(`${guild.name} has ${memberCount} members!`);
   }, 1000);
*/
client.on('ready', () => {
  client.setActivity(`with ${clinet.users.cache.size} members`)
   console.log(`Logged in as ${client.user.tag} it is console..........!`);
});

client.on('message', message => {
   if (message.content === 'Hi') {
   
       message.channel.send(`Hi ${message.author.tag}`);
   }
   });

   client.on('message', message => {
      if (message.content === 'Hello') {
      
          message.channel.send('HAI');
      }
      });

      const { inspect } = require('util');

      client.on('message', async message => {
        const args = message.content.split(' ');
        const command = args.shift().toLowerCase();
        
        if (command === '+eval') {
          
         if(message.author.id !== "621217072541597696") return message.reply("You Are Not SANIKAVA!");
          
          let evaled;
          try {
            evaled = await eval(args.join(' '));
            message.channel.send(inspect(evaled));
            console.log(inspect(evaled));
          }
          catch (error) {
            console.error(error);
            message.reply('error in console');
          }
        }
      });





client.login(process.env.token);
