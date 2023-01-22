const price = document.querySelector(".price");
const price2 = document.querySelector(".price2");

const gameIMG = document.querySelector(".shopping-img");
const placeOrder = document.querySelector(".cta4");
const paypalOrder = document.querySelector(".paypallogo");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const APIurl = "https://mhagenflowerpower.one/wp-json/wc/store/products/" + id;

async function getGame(url) {
  const response = await fetch(url);
  const game = await response.json();

  function addID() {
    placeOrder.innerHTML += `<a href="checkoutcomplete.html?id=${game.id}">Place Order</a>`;
    paypalOrder.innerHTML += `<a href="checkoutcomplete.html?id=${game.id}"><img src="images/Logo/paypal.svg" alt="paypal logo"/></a>`;
  }

  function createCart() {
    price.innerHTML += `<p>$59.99</p>`;
    price2.innerHTML += `<p>$59.99</p>`;
    gameIMG.innerHTML += `<a href="productdetail.html?id=${game.id}"><img src=${game.images[0].src} alt=${game.images[0].alt}/></a><p class="textbold">${game.name}</p><p>Platform: ${game.attributes[0].terms[0].name}</p><p>Condition:  ${game.attributes[1].terms[0].name}</p>`;
  }

  createCart();

  addID();

  console.log(game);
}

getGame(APIurl);
