document.querySelectorAll('.add-to-cart-button')
.forEach((button) => {
    button.addEventListener('click', () =>  {
        // console.log("add");
        // console.log(button.dataset.productName); 
        const productName= button.dataset.productName;
        addToCart(productName);
        /* quantity dynamic */
        let cartQuantity=0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        })

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        // console.log(cartQuantity);
    });
});