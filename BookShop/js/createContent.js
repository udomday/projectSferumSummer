// Создание категорий
const sortList = document.querySelector('.select__list');
sendRequest('GET', 'http://45.8.249.57/bookstore-api/books/categories').then((data) => {
    data.forEach(element => {
        const categoryItemHTML = `<li data-idCategory = "${element.id}">${element.name}</li>`;
        sortList.insertAdjacentHTML('beforeend', categoryItemHTML);
    });
}).catch(err => console.log(err))

// Создание катлога
const booksAssortment = document.querySelector('.mainPage__books_assortment');
function createCatalog(filter = null, priceUpDown = null){
    sendRequest('POST', 'http://45.8.249.57/bookstore-api/books', body).then((data) => { 
    if (filter == null){
        if (priceUpDown == null){
        data.forEach(element => {
            const bookItemHTML = `<div data-id = ${data.indexOf(element)} data-categoryId = "${element.categoryId}" class = "book__card">
            <img class = "book__card_image" src = "http://45.8.249.57${element.coverUrl}" alt = "/"></img>
            <div class = "book__card_body_row">
            <div class = "book__card_body_name">${element.name}</div>
            <div class = "book__card_body_row_two">
            <div class = "book__card_body_price"><b>${element.price}</b> руб.</div>
            <div class = "book__card_body_btn"><input value = "В корзину" data-cart type = "button"/></div>
            </div>
            </div>
            </div>`;
        booksAssortment.insertAdjacentHTML('beforeend', bookItemHTML);
        });
    } else if (priceUpDown == 2){
        dataReverse = data.reverse()
        dataReverse.forEach(element => {
            const bookItemHTML = `<div data-id = ${data.indexOf(element)} data-categoryId = "${element.categoryId}" class = "book__card">
            <img class = "book__card_image" src = "http://45.8.249.57${element.coverUrl}" alt = "/"></img>
            <div class = "book__card_body_row">
            <div class = "book__card_body_name">${element.name}</div>
            <div class = "book__card_body_row_two">
            <div class = "book__card_body_price"><b>${element.price}</b> руб.</div>
            <div class = "book__card_body_btn"><input value = "В корзину" data-cart type = "button"/></div>
            </div>
            </div>
            </div>`;
        booksAssortment.insertAdjacentHTML('beforeend', bookItemHTML);
        });
    }else if (priceUpDown == 1){
        dataSort = data.sort()
        dataSort.forEach(element => {
            const bookItemHTML = `<div data-id = ${data.indexOf(element)} data-categoryId = "${element.categoryId}" class = "book__card">
            <img class = "book__card_image" src = "http://45.8.249.57${element.coverUrl}" alt = "/"></img>
            <div class = "book__card_body_row">
            <div class = "book__card_body_name">${element.name}</div>
            <div class = "book__card_body_row_two">
            <div class = "book__card_body_price"><b>${element.price}</b> руб.</div>
            <div class = "book__card_body_btn"><input value = "В корзину" data-cart type = "button"/></div>
            </div>
            </div>
            </div>`;
        booksAssortment.insertAdjacentHTML('beforeend', bookItemHTML);
        });
    }} else if (priceUpDown == null){
        data.forEach(element => { 
            if (element.categoryId == filter){
            const bookItemHTML = `<div data-id = ${data.indexOf(element)} data-categoryId = "${element.categoryId}" class = "book__card">
            <img class = "book__card_image" src = "http://45.8.249.57${element.coverUrl}" alt = "/"></img>
            <div class = "book__card_body_row">
            <div class = "book__card_body_name">${element.name}</div>
            <div class = "book__card_body_row_two">
            <div class = "book__card_body_price"><b>${element.price}</b> руб.</div>
            <div class = "book__card_body_btn"><input value = "В корзину" data-cart type = "button"/></div>
            </div>
            </div>
            </div>`;
        booksAssortment.insertAdjacentHTML('beforeend', bookItemHTML);
            }
        });
    } else {
        if (priceUpDown == 1){
            dataSort = data.sort()
            dataSort.forEach(element => {
                if (element.categoryId == filter){
                const bookItemHTML = `<div data-id = ${data.indexOf(element)} data-categoryId = "${element.categoryId}" class = "book__card">
                <img class = "book__card_image" src = "http://45.8.249.57${element.coverUrl}" alt = "/"></img>
                <div class = "book__card_body_row">
                <div class = "book__card_body_name">${element.name}</div>
                <div class = "book__card_body_row_two">
                <div class = "book__card_body_price"><b>${element.price}</b> руб.</div>
                <div class = "book__card_body_btn"><input value = "В корзину" data-cart type = "button"/></div>
                </div>
                </div>
                </div>`;
            booksAssortment.insertAdjacentHTML('beforeend', bookItemHTML);
            }});
        } else {
            dataReverse = data.reverse()
            dataReverse.forEach(element => {
                if (element.categoryId == filter){
                const bookItemHTML = `<div data-id = ${data.indexOf(element)} data-categoryId = "${element.categoryId}" class = "book__card">
                <img class = "book__card_image" src = "http://45.8.249.57${element.coverUrl}" alt = "/"></img>
                <div class = "book__card_body_row">
                <div class = "book__card_body_name">${element.name}</div>
                <div class = "book__card_body_row_two">
                <div class = "book__card_body_price"><b>${element.price}</b> руб.</div>
                <div class = "book__card_body_btn"><input value = "В корзину" data-cart type = "button"/></div>
                </div>
                </div>
                </div>`;
            booksAssortment.insertAdjacentHTML('beforeend', bookItemHTML);
            }});
        }
    }
}).catch(err => console.log(err))
}

window.onload = createCatalog()
// Фильрация каталога
