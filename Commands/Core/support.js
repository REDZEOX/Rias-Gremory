module.exports = {
    name: "support",
    alias: ["supportgc"],
    desc: "Sends support group link.",
    cool:3,
    react: "๐",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        m.reply(`๐Check your DM *${pushName}* Senpai !\n\nโจI have sent you support group link personally.`)
        let botpic = botImage1
        let txt = `      ๐ *Support Group* ๐\n\n*${botName}* ๐ฐis an open source project, and we are always happy to help you.\n\n*Link:* ${suppL}\n\n*Note:*Please don't spam in the group, and don't message *Admins directly* without permission. Ask for help in *Group*.\n\n*Thanks for using Rias Gremory.*`
        await Miku.sendMessage(m.sender,{image:{url:botpic}, caption:txt},{quoted:m})
    }
}
