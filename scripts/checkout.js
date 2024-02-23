cart.forEach((item) => {
    
    const productName = item.productName;

    let matchingProduct;
    cart.forEach((productName) =>{
        if(cart.productName === productName){
          matchingProduct = productName;  
        } 
    });
    console.log(matchingProduct);
    `
    <div class="cart-item-container">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="images/products/volly-ball_.jpg">

      <div class="cart-item-details">
        <div class="product-name">
          WOKE Glow-More Volleyball Size 4
        </div>
        <div class="product-price">
         &#8377 999
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">2</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-1">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-1">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              &#8377 20 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-1">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              &#8377 50 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="cart-item-container">
    <div class="delivery-date">
      Delivery date: Wednesday, June 15
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="images/products/galaxy-s24_.jpg">

      <div class="cart-item-details">
        <div class="product-name">
          Samsung Galaxy S24 Ultra 5G
        </div>
        <div class="product-price">
          &#8377 1,29,300
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">1</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>

        <div class="delivery-option">
          <input type="radio" class="delivery-option-input"
            name="delivery-option-2">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio" checked class="delivery-option-input"
            name="delivery-option-2">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              &#8377 20 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio" class="delivery-option-input"
            name="delivery-option-2">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              &#8377 50 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
})