module.exports = function(bot, addItemToOrder) {
    bot.action('bowls', (ctx) => {
        ctx.reply('Please choose your bowls:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Chicken — 17 GEL', callback_data: 'bowl_chicken' }],
                    [{ text: 'Tofu (vegan) — 15 GEL', callback_data: 'bowl_tofu' }],
                    [{ text: 'Beetroot with Feta (vegetarian) — 15 GEL', callback_data: 'beetroot' }],
                    [{ text: 'Back', callback_data: 'back' }]
                ]
            }
        });
    });

    // Обработчик для выбора Chicken Bowl
    bot.action('bowl_chicken', (ctx) => {
        addItemToOrder(ctx, 'Chicken Bowl — 17 GEL');
        ctx.reply(`You have added: Chicken Bowl — 17 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Tofu Bowl (vegan)
    bot.action('bowl_tofu', (ctx) => {
        addItemToOrder(ctx, 'Tofu Bowl (vegan) — 15 GEL');
        ctx.reply(`You have added: Tofu Bowl (vegan) — 15 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Beetroot with Feta Bowl (vegetarian)
    bot.action('beetroot', (ctx) => {
        addItemToOrder(ctx, 'Beetroot with Feta Bowl (vegetarian) — 15 GEL');
        ctx.reply(`You have added: Beetroot with Feta Bowl (vegetarian) — 15 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });
};