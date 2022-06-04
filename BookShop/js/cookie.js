const cartProduct = document.querySelector('.mainPage__cart_products');
const cartMask = 'cartMask_';
const balanceMask = 'balanceMask';
const balance = document.querySelectorAll('[data-balance]');

function showTasks(){
    var lsLen = localStorage.length;
    if(lsLen > 0){
        for(var i = 0; i < lsLen; i++){
            var key = localStorage.key(i);
            if(key.indexOf(cartMask) == 0){
                cartProduct.insertAdjacentHTML('beforeend', localStorage.getItem(key));
                toggleCartStatus()
                calcCartPrice()
            } else if(key.indexOf(balanceMask) == 0){
                balance.forEach(element => {
                    element.innerText = localStorage.getItem(key);
                })
            }
        }
    }
}
function deleteTasks(){
    var lsLen = localStorage.length;
    var arrKeys = []
    if(lsLen > 0){
        for(var i = 0; i < lsLen; i++){
            var key = localStorage.key(i);
            if(key.indexOf(cartMask) == 0){
                arrKeys.push(key);
            }
        }
        var lenArr = arrKeys.length;
        for(var i = 0; i < lenArr; i++){
            
            localStorage.removeItem(arrKeys[i]);
        }
    }
}

window.onload = () => {
    if(localStorage.getItem('balanceMask') == null){
        localStorage.setItem('balanceMask', 10200);
        balance.forEach(element => {
            element.innerText = localStorage.getItem('balanceMask');
        });
    } else {
        showTasks();
    }
}