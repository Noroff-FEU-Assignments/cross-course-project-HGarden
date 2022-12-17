const header = document.querySelector(".pd-header");
const gameImage = document.querySelector(".gameimage");
const gameDescription = document.querySelector(".gamedescription");
const addToCart = document.querySelector(".addtocart");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const game = Games[id];

console.log(game);

function createHTML() {
  header.innerHTML += `<h1>${game.name}</h1>`;
  gameImage.innerHTML += `<img alt="Space War" src=${game.image} class="cover"/>`;
  gameDescription.innerHTML += `<h2>Game description</h2> <p>${game.description}</p> <p>${game.description}</p>`;
  addToCart.innerHTML += `<p>$59.99</p> <a href="cart.html?=${game.id}" class="addtocart-button">Add to cart</a>`;
}

createHTML();
