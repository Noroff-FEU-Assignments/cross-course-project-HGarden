const link = document.querySelector(".Gamelist");

function createGameList() {
  for (let i = 0; i < Games.length; i++) {
    const element = Games[i];
    console.log(Games);
    link.innerHTML += `<div><a href="productdetail.html?id=${Games[i].id}"><img alt=${Games[i].alt} src=${Games[i].image} class="cover"/></a><h4>${Games[i].price}</h4><p>${Games[i].name} - ${Games[i].platform}  </p></div>`;
  }
}

createGameList();
