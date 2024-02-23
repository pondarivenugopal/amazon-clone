// const cart = [{
//     productName: 'WOKE Glow-More Volleyball Size 4',
//     quantity: 2,
// },{
//     productName: 'Samsung Galaxy S24 Ultra 5G',
//     quantity: 1,
// }];

const cart=[]





function addToCart(productName){
    /* matching items in cart */
    let matchingItem;

    cart.forEach((item) => {
        if(productName === item.productName)
        matchingItem=item;
    })

    if(matchingItem){
        matchingItem.quantity+=1;
    }
    else{
        cart.push({
            productName: productName,
            quantity:1
        });
    }
    // console.log(cart);
}