const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require('ytdl-core');
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

var prefix = ".";
var token = "NTYzNjkzMTM1NjcxMzI4Nzc5.XKdECg.GuhTN3k_8VEnwfZGuLQa2RrpfCQ";



client.on("ready", () => {
  console.log(" Logged in!");
  client.user.setActivity(' azurePROXY.store', { type: 'WATCHING' });
});

client.on('ready', () => {
  console.log('azurePROXY is ready!');
});
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}\nMake sure to read #info`);
});
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

 
if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`azurePROXY's Commands`)
    .setColor(0x6FFF6F)
    .setDescription(`Hello! I'm a bot developed by nopeAZU to assist you.\nHere are my commands:`)
    .addField(`Https`, `[${prefix}https]() >Sends you a HQ Socks5 List`)
    .addField(`Socks4`, `[${prefix}socks4]() >Sends you a HQ Socks5 List`)
	.addField(`Socks5`, `[${prefix}socks5]() >Sends you a HQ Socks5 List`)
	.addField(`Invite`, `[${prefix}invite]() >Gives you an Invite for azurePROXY`)
    .addField(`About`, `[${prefix}about]() >Tells you something about me`)
    message.channel.send({ embed: embed });
}


 if (message.content.toLowerCase().startsWith(prefix + `about`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`About azurePROXY`)
    .setColor(0x6FFF6F)
    .setDescription(`Hello! I'm a bot developed by nopeAZU to assist you.`)
    message.channel.send({ embed: embed });
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `invite`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`azurePROXY on YOUR Server`)
    .setColor(0x6FFF6F)
    .setDescription(`The Invite has been sent you via DM`)
    message.channel.send({ embed: embed });
	message.author.send("https://discordapp.com/oauth2/authorize?client_id=563693135671328779&scope=bot&permissions=8");
  }

if (message.content.toLowerCase().startsWith(prefix + `https`)) {
	const embed = new Discord.RichEmbed()
    .setTitle(`azurePROXY AI`)
    .setDescription(`The HTTPS List has been sent you via DM`)
    .setColor(0x6FFF6F)
    message.channel.send({ embed: embed });
    message.author.send("Thanks for using azurePROXY! Here is your Https List. https://api.proxyscrape.com/?request=getproxies&proxytype=https");
}

if (message.content.toLowerCase().startsWith(prefix + `socks4`)) {
	const embed = new Discord.RichEmbed()
    .setTitle(`azurePROXY AI`)
    .setColor(0x6FFF6F)
    .setDescription(`The SOCKS4 List has been sent you via DM`)
    message.channel.send({ embed: embed });
    message.author.send("Thanks for using azurePROXY! Here is your Socks4 List. https://api.proxyscrape.com/?request=getproxies&proxytype=socks4");
}

if (message.content.toLowerCase().startsWith(prefix + `socks5`)) {
	const embed = new Discord.RichEmbed()
    .setTitle(`azurePROXY AI`)
    .setColor(0x6FFF6F)
    .setDescription(`The SOCKS5 List has been sent you via DM`)
    message.channel.send({ embed: embed });
    message.author.send("Thanks for using azurePROXY! Here is your Socks5 List. https://api.proxyscrape.com/?request=getproxies&proxytype=socks5");
}
});



client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
 
});

client.login('NTYzNjkzMTM1NjcxMzI4Nzc5.XKdECg.GuhTN3k_8VEnwfZGuLQa2RrpfCQ');
client.login(token);