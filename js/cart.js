const price = document.querySelector(".price");
const gameIMG = document.querySelector(".shopping-img");
const placeOrder = document.querySelector(".cta4");
const paypalOrder = document.querySelector(".paypallogo");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("");

const game = Games[id];
console.log(id);

function addID() {
  placeOrder.innerHTML += `<a href="checkoutcomplete.html?=${game.id}">Place Order</a>`;
  paypalOrder.innerHTML += `<a href="checkoutcomplete.html?=${game.id}"><img src="images/Logo/paypal.svg" alt="paypal logo"/></a>`;
}

function createCart() {
  price.innerHTML += `<p>${game.price}</p>`;
  gameIMG.innerHTML += `<a href="productdetail.html?=${game.id}"><img src=${game.image} alt=${game.alt}/></a><p class="textbold">${game.name}</p><p>Platform: ${game.platform}</p><p>Condition: ${game.condition}</p>`;
}

createCart();

addID();
