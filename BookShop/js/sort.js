const selectList = document.querySelector('.select__list')
const selectIcon = document.querySelector('.select__head__icon')
const booksAssortmentForSort = document.querySelector('.mainPage__books_assortment');
const sortPrice = document.querySelector('.mainPage__books_sort_price_icon');

let filter = null
let priceUpDown = null

window.addEventListener('click', function(event){
    // Открыть меню с выбором категории
    if (event.target.hasAttribute('data-category')){
        if (selectList.classList.contains('show')){
            selectIcon.classList.add('select__icon_rotate');
            selectList.classList.remove('show');
        } else{
            selectIcon.classList.remove('select__icon_rotate');
            selectList.classList.add('show');
        }
    } else {
        selectIcon.classList.remove('select__icon_rotate');
        selectList.classList.add('show');
    }

    // Выбрать категорию
    if (event.target.hasAttribute('data-idCategory')){
        const categoryId = event.target;
        filter = categoryId.getAttribute('data-idcategory');
        document.querySelector('.change_category_name').innerText = categoryId.innerText;
        const allBooks = document.querySelectorAll('.book__card')
        allBooks.forEach(element => {
            element.remove()
        })
        createCatalog(filter, priceUpDown)
        document.querySelector('.mainPafe__books_reloadSettings').classList.remove('show');
    }


    // Cортировать по цене
    if (event.target.hasAttribute('data-sort-price')){
        if (sortPrice.classList.contains('mainPage__books_sort_price_icon_rotate')){
            sortPrice.classList.remove('mainPage__books_sort_price_icon_rotate');
            const allBooks = document.querySelectorAll('.book__card')
            allBooks.forEach(element => {
                element.remove()
            })
            priceUpDown = 1
            createCatalog(filter, priceUpDown)
        } else {
            sortPrice.classList.add('mainPage__books_sort_price_icon_rotate');
            const allBooks = document.querySelectorAll('.book__card')
            allBooks.forEach(element => {
                element.remove()
            })
            priceUpDown = 2
            createCatalog(filter, priceUpDown)
        }
        document.querySelector('.mainPafe__books_reloadSettings').classList.remove('show');
    }

    //Сортировка по строке
    document.querySelector('.searchBooks').oninput = () =>{
        let val = document.querySelector('.searchBooks').value.trim().toLowerCase();
        let allBooks = document.querySelectorAll('.book__card');
        if (val != ''){
            allBooks.forEach(element => {
               if(element.querySelector('.book__card_body_name').innerText.toLowerCase().search(val) == -1){  
                element.style.display = 'none';
               } else {
                element.style.display = '';
               }
            });
        } else {
            allBooks.forEach(element => {
                element.style.display = '';
             });
        }
    }

    // Отчистка сортировки
    if (event.target.hasAttribute('data-clear')){
        const allBooks = document.querySelectorAll('.book__card');
        // Отчистка строки
        document.querySelector('.searchBooks').value = '';

         // Отчиска категорий и цены
         filter = null, priceUpDown = null;
        allBooks.forEach(element => {
            element.remove();
        })
        createCatalog(filter, priceUpDown);

        event.target.classList.add('show');
    }
})