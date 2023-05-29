const products = document.querySelectorAll('.product');
function handleQuantityChange(event) {
  const button = event.target;
  const product = button.closest('.product');
  const quantityValue = product.querySelector('.product__quantity-value');
  let quantity = parseInt(quantityValue.textContent);
  if (button.classList.contains('product__quantity-control_dec')) {
    if (quantity > 1) {
      quantity--;
    }
  } else if (button.classList.contains('product__quantity-control_inc')) {
    quantity++;
  }
  quantityValue.textContent = quantity.toString();
}
function handleAddToCart(event) {
  const product = event.target.closest('.product');
  const productId = product.dataset.id;
  const productTitle = product.querySelector('.product__title').textContent;
  const productImage = product.querySelector('.product__image').src;
  const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);
  const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

  if (cartProduct) {
     const cartProductCount = cartProduct.querySelector('.cart__product-count');
    const currentQuantity = parseInt(cartProductCount.textContent);
    const newQuantity = currentQuantity + productQuantity;
    cartProductCount.textContent = newQuantity.toString();
  } else {
     const cartProducts = document.querySelector('.cart__products');
    const newCartProduct = document.createElement('div');
    newCartProduct.classList.add('cart__product');
    newCartProduct.dataset.id = productId;
    newCartProduct.innerHTML = `
      <img class="cart__product-image" src="${productImage}">
      <div class="cart__product-count">${productQuantity}</div>
    `;
    cartProducts.appendChild(newCartProduct);
  }
}
products.forEach((product) => {
  const quantityControls = product.querySelector('.product__quantity-controls');
  const addToCartButton = product.querySelector('.product__add');

  quantityControls.addEventListener('click', handleQuantityChange);
  addToCartButton.addEventListener('click', handleAddToCart);
});
