const orderCalculator = require('./orderCalculator');
const { generateOrderNumber } = require('./orderNumberGenerator');
const countItems = require('./itemCounter'); // Импорт функции подсчета позиций

// Функция для экранирования символов в MarkdownV2
const escapeMarkdownV2 = (text) => {
    return text ? text.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, '\\$1') : '';
};

// Функция отправки заказа бариста
const sendOrderToBarista = (bot, username, order, orderNumber) => {
    const baristaChatId = process.env.BARISTA_CHAT_ID;

    // Экранируем имя пользователя
    const escapedUsername = escapeMarkdownV2(username || 'User');
    const userLink = `[${escapedUsername}](https://t.me/${escapedUsername})`;

    // Применяем функцию подсчета позиций
    const countedItems = countItems(order.split('\n')
        .filter(item => item.trim() !== '' && item !== 'undefined'));

    // Форматируем заказ и экранируем символы
    const formattedOrder = countedItems.map(item => `\\- ${escapeMarkdownV2(item)}`).join('\n');

    // Формируем строку с номером заказа
    const orderNumberString = `Order Number: ${orderNumber || 'Not Generated'}`;
    const escapedOrderNumber = escapeMarkdownV2(orderNumberString);

    // Рассчитываем общую сумму и количество позиций
    const { total, itemCount } = orderCalculator.calculateTotalPriceAndItems(order);

    // Формируем сообщение для отправки
    const messageContent = `*New order from ${userLink}:*\n\n${escapedOrderNumber}\n${formattedOrder}\n\nTotal: ${escapeMarkdownV2(total.toString())} GEL for ${itemCount} items`;

    // Логируем сообщение для проверки
    console.log('Message Content:', messageContent);

    // Отправляем сообщение
    bot.telegram.sendMessage(baristaChatId, messageContent, { parse_mode: 'MarkdownV2' });
};

// Экспортируем функцию отправки заказа
module.exports = {
    sendOrderToBarista
};
