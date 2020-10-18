const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  client.user.setActivity(`with ${client.users.cache.size} members`)
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




client.on('message',msg => {
if (message.content === '+say'){
 const args = message.content.split(' ');
        const command = args.shift().toLowerCase();
        message.delete();

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("You don't have the required permissions to use this command.").then(m => m.delete(5000));

        if (args.length < 0)
            return message.reply("Nothing to say?").then(m => m.delete(5000));

        

        if (args[0].toLowerCase() === "announce") {
            const embed = new MessageEmbed()
                .setTitle("Announcement ")
                .setDescription(`${args.slice(1).join(" ")}`)
                .setColor("#00ff00");

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
client.login(process.env.token);
