module.exports = {
	name: 'ban',
    category: 'management',
	description: 'BAN the specified member from the server.',
    usage: '<user> <reason>',
    permissions: 'BAN_MEMBERS',
	async execute(message, args) {

          const member = await message.mentions.members.first();//メンションの内容
          const id = member.user.id; //ユーザーID
          const msg = await message.channel.send({ //あとで編集などができるようにawait（非同期処理）をつける
            embed: {
              color: 16757683,
              description: "Please enter the reason within 60 seconds."
            }
          });
          const filter = message => message.author.id === message.author.id;
          const collected = await message.channel.awaitMessages(filter, {
            max: 1,
            time: 60000
          });
          const response = collected.first();
          if (!response)
            return msg.edit({
              embed: {
                description: "Time out..."
              }
            });
          msg.edit({
            embed: {
              description: "Executing BAN..."
            }
          });
          message.guild.members.ban(id, { reason: response.content });
          msg.edit({
            embed: {
              description: `Banned <@${id}>`
            }
        })
	}
};