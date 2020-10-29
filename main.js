const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
		console.log(`${client.user.tag} is now active!`)
	  
		client.user.setActivity('GTP', ({type: "WATCHING"}))
	  })



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
          
         if(message.author.id !== "621217072541597696" && message.author.id !== "714033114355204106") return message.reply("You Are Not My Owner!");
          
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

let prefix = ("+");
client.on("message", async message => {
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  // which is set in the configuration file.
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
});

client.login(process.env.token);

