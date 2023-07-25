// Cart items array
let cartItems = [];

// Function to add product to cart
function addToCart(product) {
  cartItems.push(product);
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartElement = document.getElementById("cart-items");
  cartElement.innerHTML = "";
  
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartElement.appendChild(li);
  });
}

// Function to handle checkout
function checkout() {
  // Perform necessary actions for checkout, such as payment processing, order confirmation, etc.
  alert("Thank you for your purchase!");
  cartItems = [];
  updateCart();
}