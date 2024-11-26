const cart = {};

const menu = document.querySelector("#menu");
const cartDisplay = document.querySelector("#cart");
const totalDisplay = document.querySelector("#total");

menu.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const name = event.target.getAttribute("data-name");
    const price = event.target.getAttribute("data-price");

    if (cart[name]) {
      cart[name].count++;
    } else {
      cart[name] = { price, count: 1 };
      updateCart();
      console.log(cart);
    }
  }
});

function updateCart() {
  cartDisplay.innerHTML = ""
  let total = 0;

  for(const name)

  }
}
