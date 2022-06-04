// Отслеживание клика "Добавить в корзину"
window.addEventListener('click', function(event){
    // Нажатие по "В корзину"
    if(event.target.hasAttribute('data-cart')){
        // Ищем карточку книги
        const card = event.target.closest('.book__card');
        // Собираем данные о книге
        const productInfo = {
            'id': card.dataset.id,
            'imageSrc': card.querySelector('.book__card_image').getAttribute('src'),
            'title': card.querySelector('.book__card_body_name').innerText,
            'price': card.querySelector('.book__card_body_price').innerText,
            'counter': 1
        }

        // Поиск похожих книг
        const itemInCart = cartProduct.querySelector(`[data-id="${productInfo.id}"]`);
        const cartMask = 'cartMask_';
        let cartItemHTML = `<div class = "cart-item" data-id="${productInfo.id}">
            <div class = "card__body">
                <div class="cart-item__title">${productInfo.title}</div>
                <div data-counter class="cart-item__quantity">${productInfo.counter} шт.</div>
                <div data-price class="cart-item__price">${productInfo.price}</div>
            </div>
            <div data-deleteItem class = "cart-item__delete__conteiner">
                <span data-deleteItem class = "cart-item__delete"></span>
            </div>
            </div>`;

        if(itemInCart){
            const counterElement = itemInCart.querySelector('.cart-item__quantity');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter) + ' шт.';
            cartItemHTML = `<div class = "cart-item" data-id="${productInfo.id}">
            <div class = "card__body">
                <div class="cart-item__title">${productInfo.title}</div>
                <div data-counter class="cart-item__quantity">${parseInt(counterElement.innerText)} шт.</div>
                <div data-price class="cart-item__price">${productInfo.price}</div>
            </div>
            <div data-deleteItem class = "cart-item__delete__conteiner">
                <span data-deleteItem class = "cart-item__delete"></span>
            </div>
            </div>`;
        } else {
            cartItemHTML = `<div class = "cart-item" data-id="${productInfo.id}">
            <div class = "card__body">
                <div class="cart-item__title">${productInfo.title}</div>
                <div data-counter class="cart-item__quantity">${productInfo.counter} шт.</div>
                <div data-price class="cart-item__price">${productInfo.price}</div>
            </div>
            <div data-deleteItem class = "cart-item__delete__conteiner">
                <span data-deleteItem class = "cart-item__delete"></span>
            </div>
            </div>`;

            cartProduct.insertAdjacentHTML('beforeend', cartItemHTML);
        }
        // Сохранение на клиент
        localStorage.setItem(cartMask+productInfo.id, cartItemHTML);
        
        // Смена статуса корзины
        toggleCartStatus()

        //Подсчет стоимости корзины
        calcCartPrice()
    }

    // "Удалить из корзины"
    if(event.target.hasAttribute('data-deleteItem')){
        event.target.closest('.cart-item').remove();
    //Подсчет стоимости корзины
    calcCartPrice()
    // Отображение статуса корзины (Пустая/полная)
    toggleCartStatus()
    }
    
    // "Купить"
    if(event.target.hasAttribute('data-btn-buy')){
        const balance = document.querySelectorAll('[data-balance]');
        const totalPrice = document.querySelector('.mainPage__cart_buy_price');
        const balanceMask = 'balanceMask';
        if(parseInt(totalPrice.innerText) > document.querySelector('[data-balance]').innerText){
            document.querySelector('.conteiner__banner_mainInf').innerText = 'У Вас недостаточно средств для совершения покупки.';
            document.body.style.overflow = 'hidden';
            document.querySelector('.conteiner__banner_bg').classList.remove('show');
        } else {
            localStorage.setItem(balanceMask, parseInt(document.querySelector('[data-balance]').innerText) - parseInt(totalPrice.innerText))
            balance.forEach(element => {
                element.innerText = parseInt(element.innerText) - parseInt(totalPrice.innerText);
            })
            const allCartProduct = document.querySelectorAll('.cart-item')
            allCartProduct.forEach(element => {
                element.remove()
            })
            calcCartPrice()
            toggleCartStatus()
            document.body.style.overflow = 'hidden';
            document.querySelector('.conteiner__banner_mainInf').innerText = 'Покупка прошла успешно.';
            document.querySelector('.conteiner__banner_bg').classList.remove('show');
            deleteTasks();
        }
    }

    // Закрытие баннера о покупке
    if (event.target.hasAttribute('data-btn-close')){
        document.querySelector('.conteiner__banner_bg').classList.add('show');
        document.body.style.overflow = '';
    }
    // Открытие скрытого элемента на телефонах
    if(window.outerWidth < 1160){
        const cart = document.querySelector('.mainPage__cart');
        const card = document.querySelector('.book__card');
        const balance = document.querySelector('header_balance');
        
        if (event.target.hasAttribute('data-cart-open')){
            cart.classList.add('mainPage__cart_open');
            card.style.width = '100%'
        }else if(!(event.target.hasAttribute('data-cart'))){
            console.log(event.target)
            cart.classList.remove('mainPage__cart_open');
            card.style.width = '50%'
        }
    }
    
});
