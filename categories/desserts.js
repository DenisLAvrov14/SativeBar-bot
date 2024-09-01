module.exports = function(bot, addItemToOrder) {
    bot.action('desserts', (ctx) => {
        ctx.reply('Please choose your desserts:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Lemon Cake — 7 GEL', callback_data: 'lemon_cake' }],
                    [{ text: 'Chocolate Cake with Cream Cheese — 9 GEL', callback_data: 'chocolate_cake' }],
                    [{ text: 'Banana Bread (vegan) — 9 GEL', callback_data: 'banana_bread' }],
                    [{ text: 'American Cookie — 4 GEL', callback_data: 'american_cookie' }],
                    [{ text: 'Power Cookie — 3 GEL', callback_data: 'power_cookie' }],
                    [{ text: 'Energy Ball (vegan, gluten-free, sugar-free) — 4 GEL', callback_data: 'energy_ball' }],
                    [{ text: 'Back', callback_data: 'back' }]
                ]
            }
        });
    });

     // Обработчик для выбора Lemon Cake
     bot.action('lemon_cake', (ctx) => {
        addItemToOrder(ctx, 'Lemon Cake — 7 GEL');
        ctx.reply(`You have added: Lemon Cake — 7 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Chocolate Cake with Cream Cheese
    bot.action('chocolate_cake', (ctx) => {
        addItemToOrder(ctx, 'Chocolate Cake with Cream Cheese — 9 GEL');
        ctx.reply(`You have added: Chocolate Cake with Cream Cheese — 9 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Banana Bread (vegan)
    bot.action('banana_bread', (ctx) => {
        addItemToOrder(ctx, 'Banana Bread (vegan) — 9 GEL');
        ctx.reply(`You have added: Banana Bread (vegan) — 9 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора American Cookie
    bot.action('american_cookie', (ctx) => {
        addItemToOrder(ctx, 'American Cookie — 4 GEL');
        ctx.reply(`You have added: American Cookie — 4 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Power Cookie
    bot.action('power_cookie', (ctx) => {
        addItemToOrder(ctx, 'Power Cookie — 3 GEL');
        ctx.reply(`You have added: Power Cookie — 3 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Energy Ball (vegan, gluten-free, sugar-free)
    bot.action('energy_ball', (ctx) => {
        addItemToOrder(ctx, 'Energy Ball (vegan, gluten-free, sugar-free) — 4 GEL');
        ctx.reply(`You have added: Energy Ball (vegan, gluten-free, sugar-free) — 4 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });
};