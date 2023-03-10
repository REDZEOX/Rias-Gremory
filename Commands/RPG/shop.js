const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);
const fs = require("fs");


module.exports = {
    name: "shop",
    desc: "To view the list of items available in the shop",
    alias: ["store"],
    category: "RPG",
    usage: "shop",
    react: "π",
    start: async (Miku, m, { text, prefix, botName}) => {
        Miku.sendMessage(m.from, { text: `ποΈ π ${global.botName} STORE π ποΈ

        π Hi there! π€ Welcome to the ${global.botName} Store.πΌ Here's what you can purchase using Gold π°:
        
#1
π‘ Item: Wooden-Axe
π° Cost: 250 Gold
π» Usage: ${prefix}buy woodenaxe
π¬ Description: Chop down those trees for some juicy loot! π³
        
#2
π‘ Item: Stone-Pickaxe
π° Cost: 500 Gold
π» Usage: ${prefix}buy stonepickaxe
π¬ Description: Mine to your heart's content with this pickaxe! π
        
#3
π‘ Item: Iron-Pickaxe
π° Cost: 2000 Gold
π» Usage: ${prefix}buy ironpickaxe
π¬ Description: Mine like a pro with this top-notch pickaxe! π¨
        
#4
π‘ Item: Diamond-Pickaxe
π° Cost: 5000 Gold
π» Usage: ${prefix}buy diamondpickaxe
π¬ Description: The ultimate mining experience awaits!\nUsing this axe you can get a *πGoldenAppleπ*(very rare) ππ°

#5
π‘ Item: 100k GOLD
π° Cost: 1 GOLDEN APPLE
π» Usage: ${prefix}buy gold
π¬ Description: Only few can get hands on a *πGoldenAppleπ*(very rare)` }, { quoted: m });
    }
}