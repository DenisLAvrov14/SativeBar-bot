module.exports = function(bot, addItemToOrder) {
    bot.action('tea', (ctx) => {
        ctx.reply('Please choose your tea:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Pu'er — 6 GEL", callback_data: 'pu_er' }],
                    [{ text: 'Oolong — 6 GEL', callback_data: 'oolong' }],
                    [{ text: 'Gaba — 6 GEL', callback_data: 'gaba' }],
                    [{ text: 'Hong Pao — 6 GEL', callback_data: 'hong_pao' }],
                    [{ text: 'Fireweed aka Ivan-chai (no caffeine) — 6 GEL', callback_data: 'fireweed' }],
                    [{ text: 'Matcha Latte — 13 GEL', callback_data: 'matcha_latte' }],
                    [{ text: 'Back', callback_data: 'back' }]
                ]
            }
        });
    });

    // Обработчик для выбора Pu'er Tea
    bot.action('pu_er', (ctx) => {
        addItemToOrder(ctx, "Pu'er Tea — 6 GEL");
        ctx.reply(`You have added: Pu'er Tea — 6 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Oolong Tea
    bot.action('oolong', (ctx) => {
        addItemToOrder(ctx, 'Oolong Tea — 6 GEL');
        ctx.reply(`You have added: Oolong Tea — 6 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Gaba Tea
    bot.action('gaba', (ctx) => {
        addItemToOrder(ctx, 'Gaba Tea — 6 GEL');
        ctx.reply(`You have added: Gaba Tea — 6 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Hong Pao Tea
    bot.action('hong_pao', (ctx) => {
        addItemToOrder(ctx, 'Hong Pao Tea — 6 GEL');
        ctx.reply(`You have added: Hong Pao Tea — 6 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Fireweed Tea aka Ivan-chai (no caffeine)
    bot.action('fireweed', (ctx) => {
        addItemToOrder(ctx, 'Fireweed Tea aka Ivan-chai (no caffeine) — 6 GEL');
        ctx.reply(`You have added: Fireweed Tea aka Ivan-chai (no caffeine) — 6 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Matcha Latte
    bot.action('matcha_latte', (ctx) => {
        addItemToOrder(ctx, 'Matcha Latte — 13 GEL');
        ctx.reply(`You have added: Matcha Latte — 13 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });
};