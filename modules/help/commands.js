/**
 * @file commands command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

exports.exec = async (Bastion, message, args) => {
  try {
    let modules = [ ...new Set(Bastion.commands.map(c => c.config.module)) ];
    if (args.modules) {
      args.modules = args.modules.filter(module => modules.includes(module));
      if (args.modules.length) {
        modules = args.modules;
      }
    }

    let fields = [], description;
    for (let i = 0; i < modules.length; i++) {
      let commands;
      description = 'To get the list of all the commands with details click [here](https://bastionbot.org/commands).';
      commands = Bastion.commands.filter(c => c.config.module === modules[i]).map(c => c.help.name);

      if (commands.length === 0) {
        continue;
      }

      fields.push({
        name: modules[i].replace('_', ' ').toTitleCase(),
        value: commands.join('\n'),
        inline: true
      });
    }

    let authorDMChannel = await message.author.createDM();
    authorDMChannel.send({
      embed: {
        color: Bastion.colors.GOLD,
        title: 'List of Commands',
        description: description,
        fields: fields,
        footer: {
          text: `Server Prefix: ${message.guild.prefix[0]} | Total Commands: ${Bastion.commands.size}`
        }
      }
    });

    message.channel.send({
      embed: {
        description: `${message.author} Check your DM from me, I've sent you the list of commands${args.modules && args.modules.length ? ` in ${args.modules.join(', ')} modules` : ''}.`
      }
    }).catch(e => {
      Bastion.log.error(e);
    });
  }
  catch (e) {
    if (e.code === 50007) {
      message.channel.send({
        embed: {
          color: Bastion.colors.RED,
          description: `${message.author} You need to allow Direct Message from your Privacy Settings so that I'll be able to DM you with the commands. If you still don't prefer to change your settings, you can view the commands in https://bastionbot.org/commands`
        }
      }).catch(e => {
        Bastion.log.error(e);
      });
    }
    else {
      Bastion.log.error(e);
    }
  }
};

exports.config = {
  aliases: [ 'cmds' ],
  enabled: true,
  argsDefinitions: [
    { name: 'modules', type: String, multiple: true, defaultOption: true }
  ]
};

exports.help = {
  name: 'commands',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'commands [module names] [--all]',
  example: [ 'commands', 'commands --all', 'commands administration moderation' ]
};
