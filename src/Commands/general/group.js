module.exports = {
    name: 'repo',
    aliases: ['script'],
    category: 'general',
    exp: 100,
    description: 'Get the base repo of the bot',
    async execute(client, flag, arg, M) {
        const image = await client.utils.getBuffer('https://i.pinimg.com/564x/3b/d8/bb/3bd8bb87812f4af49d6a52b7a2394c6d.jpg')
        const result = await client.utils.fetch(
            'https://api.github.com/repos/Debanjan-San/krypton-WhatsappBot'
        )
        let caption = 'Our official Group Chat link :- https://chat.whatsapp.com/CNZuzvItDaDERDQgGqSz4M'
        await client.sendMessage(M.from, { image, caption }, { quoted: M })
    }
}
