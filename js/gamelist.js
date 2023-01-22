const link = document.querySelector(".Gamelist");
const APIurl = "https://mhagenflowerpower.one/wp-json/wc/store/products";

async function getGames(url) {
  const response = await fetch(url);
  const products = await response.json();

  for (let i = 0; i < products.length; i++) {
    const games = products[i];

    console.log(games);

    link.innerHTML += `<div><a href="productdetail.html?id=${games.id}"><img alt=${games.images[0].alt} src=${games.images[0].src} class="cover"/></a><h4>${games.price_html}</h4><p>${games.name} - ${games.attributes[0].terms[0].name}  </p></div>`;
  }
}
getGames(APIurl);
