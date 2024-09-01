module.exports = function(bot, addItemToOrder) {
    bot.action('sandwiches', (ctx) => {
        ctx.reply('Please choose your sandwiches:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Chicken — 13 GEL', callback_data: 'chicken_sandwich' }],
                    [{ text: 'Tofu (vegan) — 11 GEL', callback_data: 'tofu_sandwich' }],
                    [{ text: 'Back', callback_data: 'back' }]
                ]
            }
        });
    });

    // Обработчик для выбора Chicken Sandwich
    bot.action('chicken_sandwich', (ctx) => {
        ctx.session.selectedSandwich = 'Chicken Sandwich — 13 GEL';
        ctx.reply('Please choose a sauce for your sandwich:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'With Pesto', callback_data: 'with_pesto' }],
                    [{ text: 'With Mustard Sauce', callback_data: 'with_mustard_sauce' }],
                    [{ text: 'No Sauce', callback_data: 'no_sauce' }],
                    [{ text: 'Back', callback_data: 'sandwiches' }]
                ]
            }
        });
    });

    // Обработчик для выбора Tofu Sandwich (vegan)
    bot.action('tofu_sandwich', (ctx) => {
        ctx.session.selectedSandwich = 'Tofu Sandwich (vegan) — 11 GEL';
        ctx.reply('Please choose a sauce for your sandwich:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'With Pesto', callback_data: 'with_pesto' }],
                    [{ text: 'With Mustard Sauce', callback_data: 'with_mustard_sauce' }],
                    [{ text: 'No Sauce', callback_data: 'no_sauce' }],
                    [{ text: 'Back', callback_data: 'sandwiches' }]
                ]
            }
        });
    });

    // Обработчик для выбора соуса
    bot.action(/with_pesto|with_mustard_sauce|no_sauce/, (ctx) => {
        const sauce = ctx.callbackQuery.data.replace('_', ' ').replace('with ', '');
        const orderItem = `${ctx.session.selectedSandwich} with ${sauce}`;
        addItemToOrder(ctx, orderItem);

        ctx.reply(`You have added: ${orderItem}. Would you like to order anything else?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', callback_data: 'yes_continue' }],
                    [{ text: 'No, finish order', callback_data: 'finish_order' }]
                ]
            }
        });

        delete ctx.session.selectedSandwich;
    });
};
