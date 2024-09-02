module.exports = function countItems(items) {
    const itemMap = new Map();

    items.forEach(item => {
        if (itemMap.has(item)) {
            itemMap.set(item, itemMap.get(item) + 1);
        } else {
            itemMap.set(item, 1);
        }
    });

    return Array.from(itemMap.entries()).map(([item, count]) => {
        return count > 1 ? `${item} x${count}` : item;
    });
};
