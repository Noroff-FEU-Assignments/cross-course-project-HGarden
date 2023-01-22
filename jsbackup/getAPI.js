const APIurl = "https://mhagenflowerpower.one/wp-json/wc/store/products"

async function getGames(url){
    const response = await fetch(url);
    const games = await response.json();
    products.forEach( => {
        
    });
}