function toggleCartStatus(){
    const cart = document.querySelector('.mainPage__cart_products');
    const cartEmpty = document.querySelector('.mainPage__cart_empty');
    const orderForm = document.querySelector('.mainPage__cartToggle'); 
    const counterCart = document.querySelector('.counter_cart'); 

    if(cart.children.length > 1){
        cartEmpty.classList.add('show');
        orderForm.classList.remove('show');
        counterCart.classList.remove('show');
    } else {
        cartEmpty.classList.remove('show');
        orderForm.classList.add('show');
        counterCart.classList.add('show');
    }
}