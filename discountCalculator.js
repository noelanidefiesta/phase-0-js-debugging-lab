debugger
function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}
console.log(calculateDiscountedPrice(5,10)); // Output: 50
console.log(calculateDiscountedPrice(10,10)); // Output: 90 (10%)


module.exports = calculateDiscountedPrice;