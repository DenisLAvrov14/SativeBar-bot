module.exports = {
    calculateTotalPriceAndItems(order) {
        let total = 0;
        let itemCount = 0;

        // Regular expression to extract the price from the item string
        const pricePattern = /\— (\d+) GEL/;

        // Split the order by line breaks and process each item
        const items = order.split('\n').filter(item => item.trim() !== '' && !item.includes('Order Number'));
        
        items.forEach(item => {
            // Try to extract the price using the regular expression
            const match = item.match(pricePattern);
            if (match) {
                const price = parseInt(match[1], 10);
                total += price;
                itemCount += 1;
            }
        });

        return { total, itemCount };
    }
};
