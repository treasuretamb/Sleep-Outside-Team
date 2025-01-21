import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  // Get the cart from local storage
  const cartItems = getLocalStorage("so-cart");

  // Handle an empty or invalid cart 
  if (!cartItems || !Array.isArray(cartItems)) {
    document.querySelector(".product-list").innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}


function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
