let currentOrderNumber = 0;
let lastGeneratedDate = '';

const generateOrderNumber = () => {
    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    if (currentDate !== lastGeneratedDate) {
        lastGeneratedDate = currentDate;
        currentOrderNumber = 1;
    } else {
        currentOrderNumber += 1;
    }
    return `${currentDate}-${currentOrderNumber.toString().padStart(4, '0')}`;
};

module.exports = { generateOrderNumber };
