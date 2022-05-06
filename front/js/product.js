// url de l'API
const API = "http://localhost:3000/api/products/";

// url utilisateur, récupération de l'url de la page courante
let url = new URL(window.location.href);

// récupération de la valeur de l'identifiant présent dans l'url de la page courante
let id = url.searchParams.get("id");


let article = "";
const COLORS = document. querySelector("#colors");
let quantity = document.querySelector("#quantity");

getArticle(API, id);

// Récupération des données de article via l'API
function getArticle(api, id) {
    fetch(api+id)
    .then((res) => {
        return res.json();
    })

    /* assigne les données de l'API dans la variable article et
     fait appel a la fonction displayArticle pour l'affichage*/
    .then(async (resApi) => {
        article = await resApi;
        if (article){
            displayArticle(article);
        }
    })
    .catch((error) => {
        console.log("Erreur " + error);
    })
}
// fonction de création des éléments du dom et 
function displayArticle(article){
    // Insertion de l'image
    let productImg = document.createElement("img");
    document.querySelector(".item__img").appendChild(productImg);
    productImg.src = article.imageUrl;
    productImg.alt = article.altTxt;

    // Modification du titre "h1"
    let productName = document.getElementById('title');
    productName.innerText = article.name;

    // Modification du prix
    let productPrice = document.getElementById('price');
    productPrice.innerText = article.price;

    // Modification de la description
    let productDescription = document.getElementById('description');
    productDescription.innerText = article.description;

    // Insertion des options de couleurs
    let colors = document.querySelector("#colors")
    for (let color of article.colors){
        let productColors = document.createElement("option");
        colors.appendChild(productColors);
        productColors.value = color;
        productColors.innerText = color;
    }
    addToCart(article);
}

//Gestion du panier
function addToCart(article) {
    
}