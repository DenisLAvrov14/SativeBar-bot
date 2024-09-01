module.exports = function(bot, addItemToOrder) {
    // Обработчик выбора категории "Coffee"
    bot.action('coffee', (ctx) => {
        ctx.reply('Please choose your coffee:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Espresso — 7 GEL', callback_data: 'espresso' }],
                    [{ text: 'Americano — 7 GEL', callback_data: 'americano' }],
                    [{ text: 'Filter — 7 GEL', callback_data: 'filter' }],
                    [{ text: 'Cappuccino (250 ml) — 9 GEL', callback_data: 'cappuccino_250' }],
                    [{ text: 'Cappuccino (330 ml) — 11 GEL', callback_data: 'cappuccino_330' }],
                    [{ text: 'Flat White — 9 GEL', callback_data: 'flat_white' }],
                    [{ text: 'Latte — 12 GEL', callback_data: 'latte' }],
                    [{ text: 'Espresso Tonic — 10 GEL', callback_data: 'espresso_tonic' }],
                    [{ text: 'Cold Black — 10 GEL', callback_data: 'cold_black' }],
                    [{ text: 'Ice Latte — 12 GEL', callback_data: 'ice_latte' }],
                    [{ text: 'Back', callback_data: 'back' }]
                ]
            }
        });
    });

  // Обработчик для выбора Espresso
  bot.action('espresso', (ctx) => {
    addItemToOrder(ctx, 'Espresso — 7 GEL');
    ctx.reply(`You have added: Espresso — 7 GEL. Would you like to order anything else?`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Yes', callback_data: 'yes_continue' }],
                [{ text: 'No, finish order', callback_data: 'finish_order' }]
            ]
        }
    });
});

// Обработчик для выбора Americano
bot.action('americano', (ctx) => {
    addItemToOrder(ctx, 'Americano — 7 GEL');
    ctx.reply(`You have added: Americano — 7 GEL. Would you like to order anything else?`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Yes', callback_data: 'yes_continue' }],
                [{ text: 'No, finish order', callback_data: 'finish_order' }]
            ]
        }
    });
});

// Обработчик для выбора Filter
bot.action('filter', (ctx) => {
    addItemToOrder(ctx, 'Filter — 7 GEL');
    ctx.reply(`You have added: Filter — 7 GEL. Would you like to order anything else?`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Yes', callback_data: 'yes_continue' }],
                [{ text: 'No, finish order', callback_data: 'finish_order' }]
            ]
        }
    });
});

// Обработчик для выбора Cappuccino (250 ml)
bot.action('cappuccino_250', (ctx) => {
    if (!ctx.session) {
        ctx.session = {};  
    }
    ctx.session.selectedCoffee = 'Cappuccino (250 ml) — 9 GEL';
    ctx.reply(`You have selected: Cappuccino (250 ml) — 9 GEL. Please choose your milk:`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Regular Milk', callback_data: 'regular_milk' }],
                [{ text: 'Oat Milk', callback_data: 'oatMilk' }],
                [{ text: 'Back', callback_data: 'coffee' }]
            ]
        }
    });
});

// Обработчик для выбора Cappuccino (330 ml)
bot.action('cappuccino_330', (ctx) => {
    if (!ctx.session) {
        ctx.session = {};  
    }
    ctx.session.selectedCoffee = 'Cappuccino (330 ml) — 11 GEL';
    ctx.reply(`You have selected: Cappuccino (330 ml) — 11 GEL. Please choose your milk:`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Regular Milk', callback_data: 'regular_milk' }],
                [{ text: 'Oat Milk', callback_data: 'oatMilk' }],
                [{ text: 'Back', callback_data: 'coffee' }]
            ]
        }
    });
});

// Обработчик для выбора Flat White
bot.action('flat_white', (ctx) => {
    addItemToOrder(ctx, 'Flat White — 9 GEL');
    ctx.reply(`You have added: Flat White — 9 GEL. Would you like to order anything else?`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Yes', callback_data: 'yes_continue' }],
                [{ text: 'No, finish order', callback_data: 'finish_order' }]
            ]
        }
    });
});

// Обработчик для выбора Latte
bot.action('latte', (ctx) => {
    if (!ctx.session) {
        ctx.session = {};  
    }
    ctx.session.selectedCoffee = 'Latte — 12 GEL';
    ctx.reply(`You have selected: Latte — 12 GEL. Please choose your milk:`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Regular Milk', callback_data: 'regular_milk' }],
                [{ text: 'Oat Milk', callback_data: 'oatMilk' }],
                [{ text: 'Back', callback_data: 'coffee' }]
            ]
        }
    });
});

// Обработчик для выбора Espresso Tonic
bot.action('espresso_tonic', (ctx) => {
    addItemToOrder(ctx, 'Espresso Tonic — 10 GEL');
    ctx.reply(`You have added: Espresso Tonic — 10 GEL. Would you like to order anything else?`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Yes', callback_data: 'yes_continue' }],
                [{ text: 'No, finish order', callback_data: 'finish_order' }]
            ]
        }
    });
});

// Обработчик для выбора Cold Black
bot.action('cold_black', (ctx) => {
    addItemToOrder(ctx, 'Cold Black — 10 GEL');
    ctx.reply(`You have added: Cold Black — 10 GEL. Would you like to order anything else?`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Yes', callback_data: 'yes_continue' }],
                [{ text: 'No, finish order', callback_data: 'finish_order' }]
            ]
        }
    });
});

// Обработчик для выбора Ice Latte
bot.action('ice_latte', (ctx) => {
    if (!ctx.session) {
        ctx.session = {};  
    }
    ctx.session.selectedCoffee = 'Ice Latte — 12 GEL';
    ctx.reply(`You have selected: Ice Latte — 12 GEL. Please choose your milk:`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Regular Milk', callback_data: 'regular_milk' }],
                [{ text: 'Oat Milk', callback_data: 'oatMilk' }],
                [{ text: 'Back', callback_data: 'coffee' }]
            ]
        }
    });
});

// Обработчик для выбора молока
bot.action(/regular_milk|oatMilk/, (ctx) => {
    const milk = ctx.callbackQuery.data.replace('_', ' ');
    addItemToOrder(ctx, `${ctx.session.selectedCoffee} with ${milk}`);
    ctx.reply(`You have added: ${ctx.session.selectedCoffee} with ${milk}. Would you like to order anything else?`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Yes', callback_data: 'yes_continue' }],
                [{ text: 'No, finish order', callback_data: 'finish_order' }]
            ]
        }
    });

    delete ctx.session.selectedCoffee;
});
};
