var updateBtns = document.getElementsByClassName('update-cart');

// update cart items (quantity, newitems) 
for(i=0; i<updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function() {
        var productId = this.dataset.product
        var action = this.dataset.action
        //console.log('productId: ', productId, ' | Action: ', action)
        
        addCookieItem(productId, action)
    })
}

function addCookieItem(productId, action) {
    if(action == 'add') {
        if(cart[productId] == undefined) {
            cart[productId] = {'quantity': 1}
        }else {
            cart[productId]['quantity'] += 1
        }
        console.log('addCookieItem: ', cart)
    }
    if(action == 'remove') {
        console.log('addCookieItem- Action:REMOVE |ID: ', productId)
    }
    
}