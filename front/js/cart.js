const API = "http://localhost:3000/api/products/";

// Appel a l'API
async function getApi(){
    let response = await fetch(API)
    return await response.json();
}

//lecture du local storage
let panier = getPanier();

function getPanier() {
    let panier = localStorage.getItem("panier");
    if (panier == null) {
        return [];
    } else {
        return JSON.parse(panier);
    }
}
getApi().then((data) =>{
    const positionEmptyCart = document.querySelector("#cart__items");

    // Si le panier est vide
    if (panier === null || panier == 0) {
        positionEmptyCart.innerHTML = `<p>Votre panier est vide</p>`;
    } else {
        let totalPrice = 0;
        for (let produit of panier){
            // Insertion de l'élément "article"
            let productArticle = document.createElement("article");
            positionEmptyCart.appendChild(productArticle);
            productArticle.className = "cart__item";
            productArticle.setAttribute('data-id', produit.id);
            productArticle.setAttribute('data-color', produit.color);

            // Insertion de l'élément "div"
            let productDivImg = document.createElement("div");
            productArticle.appendChild(productDivImg);
            productDivImg.className = "cart__item__img";

            // Insertion de l'image
            let productImg = document.createElement("img");
            productDivImg.appendChild(productImg);
            productImg.src = produit.imgUrl;
            productImg.alt = produit.altImg;
            
            // Insertion de l'élément "div"
            let productItemContent = document.createElement("div");
            productArticle.appendChild(productItemContent);
            productItemContent.className = "cart__item__content";

            // Insertion de l'élément "div"
            let productItemContentTitlePrice = document.createElement("div");
            productItemContent.appendChild(productItemContentTitlePrice);
            productItemContentTitlePrice.className = "cart__item__content__titlePrice";
            
            // Insertion du titre h3
            let productTitle = document.createElement("h2");
            productItemContentTitlePrice.appendChild(productTitle);
            productTitle.innerText = produit.name;

            // Insertion de la couleur
            let productColor = document.createElement("p");
            productTitle.appendChild(productColor);
            productColor.innerText = produit.color;

            // Insertion du prix

            let productPrice = document.createElement("p");
            productItemContentTitlePrice.appendChild(productPrice);

            // boucle permettant d'associer le prix au bon article
            for (const dataArticle of data) {
                if(produit.id === dataArticle._id){
                    productPrice.innerText = dataArticle.price + " €";
                    totalPrice += (dataArticle.price * produit.quantity)
                }
            }
            
            // Insertion de l'élément "div"
            let productItemContentSettings = document.createElement("div");
            productItemContent.appendChild(productItemContentSettings);
            productItemContentSettings.className = "cart__item__content__settings";

            // Insertion de l'élément "div"
            let productItemContentSettingsQuantity = document.createElement("div");
            productItemContentSettings.appendChild(productItemContentSettingsQuantity);
            productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";
            
            // Insertion de "Qté : "
            let productQte = document.createElement("p");
            productItemContentSettingsQuantity.appendChild(productQte);
            productQte.innerText = "Qté : ";

            // Insertion de la quantité
            let productQuantity = document.createElement("input");
            productItemContentSettingsQuantity.appendChild(productQuantity);
            productQuantity.value = produit.quantity;
            productQuantity.className = "itemQuantity";
            productQuantity.setAttribute("type", "number");
            productQuantity.setAttribute("min", "1");
            productQuantity.setAttribute("max", "100");
            productQuantity.setAttribute("name", "itemQuantity");

            // Insertion de l'élément "div"
            let productItemContentSettingsDelete = document.createElement("div");
            productItemContentSettings.appendChild(productItemContentSettingsDelete);
            productItemContentSettingsDelete.className = "cart__item__content__settings__delete";

            // Insertion de "p" supprimer
            let productSupprimer = document.createElement("p");
            productItemContentSettingsDelete.appendChild(productSupprimer);
            productSupprimer.className = "deleteItem";
            productSupprimer.innerHTML = "Supprimer";
        }
        totalQuantity();
        displayTotalPrice(totalPrice);
    }
    modifQuantity();
    deleteArticle();
})

// fonction de calcul pour la quantité total 
function totalQuantity(){

}

// fonction de  qui affiche le prix total
function displayTotalPrice(totalPrices){

}

// Modification d'une quantité de produit
function modifQuantity() {

}

// Suppression d'un produit
function deleteArticle() {

}