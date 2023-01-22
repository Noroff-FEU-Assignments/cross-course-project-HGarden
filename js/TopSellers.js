const APIurl = "https://mhagenflowerpower.one/wp-json/wc/store/products/";
const featuredGames = document.querySelector(".coverlist");

async function getGames(url) {
  const response = await fetch(url);
  const products = await response.json();

  for (let i = 0; i < products.length; i++) {
    const games = products[i];
    console.log(games);

    function createTopSellers() {
      if (games.attributes[3]) {
        featuredGames.innerHTML += `<div class="cover1">
             <a href="productdetail.html?id=${games.id}"
               ><img
                 alt="${games.images[0].alt}"
                 src="${games.images[0].src}"
                 class="cover"
             /></a>`;
      }
    }

    createTopSellers(games);
  }
}

getGames(APIurl);
