module.exports = function(bot, addItemToOrder) {
    // Обработчик для выбора завтрака
    bot.action('breakfast', (ctx) => {
        ctx.reply('Please choose your breakfast:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Syrniki (2 pieces) — 12 GEL', callback_data: 'syrniki_2' }],
                    [{ text: 'Syrniki (3 pieces) — 18 GEL', callback_data: 'syrniki_3' }],
                    [{ text: 'Oats with Berries and Pumpkin Seeds — 10 GEL', callback_data: 'oats' }],
                    [{ text: 'Homemade Granola with Yogurt — 9 GEL', callback_data: 'granola' }],
                    [{ text: 'Back', callback_data: 'back_to_categories' }]
                ]
            }
        });
    });

     // Обработчик для выбора Syrniki (2 pieces)
     bot.action('syrniki_2', (ctx) => {
        addItemToOrder(ctx, 'Syrniki (2 pieces) — 12 GEL');
        ctx.reply(`You have added: Syrniki (2 pieces) — 12 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора Syrniki (3 pieces)
    bot.action('syrniki_3', (ctx) => {
        addItemToOrder(ctx, 'Syrniki (3 pieces) — 18 GEL');
        ctx.reply(`You have added: Syrniki (3 pieces) — 18 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора овсянки и предложений молока/воды
    bot.action('oats', (ctx) => {
        if (!ctx.session) {
            ctx.session = {};  
        }
        ctx.session.selectedBreakfast = 'Oats with Berries and Pumpkin Seeds — 10 GEL';

        ctx.reply(`You have selected: ${ctx.session.selectedBreakfast}. Please choose your milk or water:`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Soy Milk', callback_data: 'soy_milk' }],
                    [{ text: 'Oat Milk', callback_data: 'oat_milk' }],
                    [{ text: 'Water', callback_data: 'water' }],
                    [{ text: 'Back', callback_data: 'breakfast' }]
                ]
            }
        });
    });

    // Обработчик для выбора Homemade Granola with Yogurt
    bot.action('granola', (ctx) => {
        addItemToOrder(ctx, 'Homemade Granola with Yogurt — 9 GEL');
        ctx.reply(`You have added: Homemade Granola with Yogurt — 9 GEL. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });
    });

    // Обработчик для выбора молока/воды к овсянке
    bot.action(/soy_milk|oat_milk|water/, (ctx) => {
        const liquid = ctx.callbackQuery.data.replace('_', ' ');
        addItemToOrder(ctx, `${ctx.session.selectedBreakfast} with ${liquid}`);

        ctx.reply(`You have added: ${ctx.session.selectedBreakfast} with ${liquid}. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });

        delete ctx.session.selectedBreakfast;
    });
};