function calcCartPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.mainPage__cart_buy_price')
    const counterCart = document.querySelector('.counter_cart'); 

    let countAmountEl = 0;
    let totalPrice = 0;

    cartItems.forEach(function(item) {
        const amountEl = item.querySelector('.cart-item__quantity');
        const priceEl = item.querySelector('.cart-item__price');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
        countAmountEl += parseInt(amountEl.innerText);
        totalPrice += currentPrice;
    });

    counterCart.innerText = countAmountEl;
    totalPriceEl.innerHTML = `<b>${totalPrice}</b> руб.`
    
}