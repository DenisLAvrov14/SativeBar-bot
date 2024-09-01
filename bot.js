const { Telegraf, session, MemorySessionStore } = require('telegraf');
const { sendOrderToBarista } = require('./messageService');
const { generateOrderNumber } = require('./orderNumberGenerator');
const breakfastHandler = require('./categories/breakfast');
const sandwichesHandler = require('./categories/sandwiches');
const bowlsHandler = require('./categories/bowls');
const dessertsHandler = require('./categories/desserts');
const coffeeHandler = require('./categories/coffee');
const teaHandler = require('./categories/tea');
require('dotenv').config();

const botToken = process.env.BOT_TOKEN;

const store = new MemorySessionStore();
const bot = new Telegraf(botToken);
bot.use(session({ store }));

// Устанавливаем команды, которые будут видны пользователям
bot.telegram.setMyCommands([
    { command: 'viewmenu', description: 'View Detailed Menu' },
    { command: 'placeorder', description: 'Place an Order' }
]);

const resetOrder = (ctx) => {
    if (!ctx.session) {
        ctx.session = {};  
    }
    ctx.session.order = '';
};

const addItemToOrder = (ctx, item) => {
    if (!ctx.session) {
        ctx.session = {};  
    }
    ctx.session.order += `\n${item}`;
};

const showCategories = (ctx) => {
    ctx.reply('Please choose a category:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Sandwiches', callback_data: 'sandwiches' }],
                [{ text: 'Bowls', callback_data: 'bowls' }],
                [{ text: 'Breakfast', callback_data: 'breakfast' }],
                [{ text: 'Desserts & Cookies', callback_data: 'desserts' }],
                [{ text: 'Coffee', callback_data: 'coffee' }],
                [{ text: 'Tea', callback_data: 'tea' }],
                [{ text: 'Back', callback_data: 'back_to_start' }]
            ]
        }
    });
};

const showStartMenu = (ctx) => {
    ctx.reply('Welcome to Sative Cafe! Please choose an action:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'View Detailed Menu', callback_data: 'view_menu' }],
                [{ text: 'Place an Order', callback_data: 'place_order' }]
            ]
        }
    });
};

// Обработчик для показа стартового меню
bot.start((ctx) => {
    resetOrder(ctx);
    showStartMenu(ctx);
});

// Обработчик команды "View Detailed Menu"
bot.command('viewmenu', (ctx) => {
    ctx.reply('Please click the link to view our detailed menu:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Link: Sative Cafe Menu', url: 'https://swamp-ski-bfc.notion.site/sative-caf-menu-2b6862fe494a45eba9a93150670e27d3' }],
                [{ text: 'Back', callback_data: 'back_to_start' }]
            ]
        }
    });
});

// Обработчик команды "Place an Order"
bot.command('placeorder', (ctx) => {
    showCategories(ctx);
});

// Обработчик для показа детализированного меню
bot.action('view_menu', (ctx) => {
    ctx.reply('Please click the link to view our detailed menu:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Link: Sative Cafe Menu', url: 'https://swamp-ski-bfc.notion.site/sative-caf-menu-2b6862fe494a45eba9a93150670e27d3' }],
                [{ text: 'Back', callback_data: 'back_to_start' }]
            ]
        }
    });
});

// Обработчик для возврата к стартовому меню
bot.action('back_to_start', (ctx) => {
    showStartMenu(ctx);
});

// Обработчик для перехода к выбору категорий
bot.action('place_order', (ctx) => {
    showCategories(ctx);
});

// Подключаем обработчики для различных категорий
breakfastHandler(bot, addItemToOrder);
sandwichesHandler(bot, addItemToOrder);
bowlsHandler(bot, addItemToOrder);
dessertsHandler(bot, addItemToOrder);
coffeeHandler(bot, addItemToOrder);
teaHandler(bot, addItemToOrder);

// Обработка кнопки "Yes"
bot.action('yes_continue', (ctx) => {
    showCategories(ctx);  
});

// Обработка завершения заказа
bot.action('finish_order', (ctx) => {
    if (!ctx.session) {
        ctx.session = {};
    }

    const order = ctx.session.order || '';
    const username = ctx.from.username || ctx.from.first_name;
    const orderNumber = generateOrderNumber(); // Генерация номера заказа

    if (order.trim()) {
        ctx.reply(`Thank you! Your order #${orderNumber} has been received.\nPreparation will take about 15 minutes. If you have any questions, message us here @sativebtbilisi.`);
        sendOrderToBarista(bot, username, `Order Number: ${orderNumber}\n${order}`, orderNumber);
    } else {
        ctx.reply('Your order is empty. Please select items to order.');
    }
    
    resetOrder(ctx);
});

bot.launch();

console.log('Bot is running...');
