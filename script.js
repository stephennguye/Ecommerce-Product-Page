const addToCartBtn = document.getElementById("addToCartBtn");
const quantityInput = document.getElementById("quantity");
const cartMessage = document.getElementById("cartMessage");

const price = 99.0; 

addToCartBtn.addEventListener("click", () => {
  let qty = parseInt(quantityInput.value);

  if (isNaN(qty) || qty <= 0) {
    cartMessage.style.color = "red";
    cartMessage.textContent = "Please enter a valid quantity!";
    return;
  }

  let total = qty * price;
  cartMessage.style.color = "#16a34a";
  cartMessage.textContent = `Added ${qty} T-Shirt(s) to cart. Total: $${total.toFixed(2)}`;
});
