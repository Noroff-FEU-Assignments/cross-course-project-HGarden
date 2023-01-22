const header = document.querySelector(".pd-header");
const gameImage = document.querySelector(".gameimage");
const gameDescription = document.querySelector(".gamedescription");
const addToCart = document.querySelector(".addtocart");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const APIurl = "https://mhagenflowerpower.one/wp-json/wc/store/products/" + id;

async function getGame(url) {
  const response = await fetch(url);
  const game = await response.json();

  header.innerHTML += `<h1>${game.name}</h1>`;
  gameImage.innerHTML += `<img alt=${game.images[0].alt} src=${game.images[0].src} class="cover"/>`;
  gameDescription.innerHTML += `<h2>Game description</h2> <p>${game.description}</p> <p>Condition: ${game.attributes[1].terms[0].name}</p>`;
  addToCart.innerHTML += `<p>${game.price_html}</p> <a href="cart.html?id=${game.id}" class="addtocart-button">Add to cart</a>`;

  console.log(game);
}

getGame(APIurl);
