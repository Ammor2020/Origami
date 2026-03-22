let userInfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

// if(localStorage.getItem("username")){
//    if (links) links.remove()
//    if (userInfo) userInfo.style.display = "flex"
//    if (userData) userData.innerHTML = localStorage.getItem("username")
    
// }
if (localStorage.getItem("username")) {
   let username = localStorage.getItem("username");
   username = username.charAt(0).toUpperCase() + username.slice(1);

   if (links) links.remove();
   if (userInfo) userInfo.style.display = "flex";
   if (userData) userData.innerHTML = username;
}


let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function(){
    localStorage.removeItem("username");
     localStorage.removeItem("productsInCart");
    setTimeout(() =>{
    window.location = "index.html";
    } , 500)
}
)


// ///////////////////////////////////////////////////////
let allProducts = document.querySelector(".products")
let products = [
{
    id:1,
    title:"Conan Edogawa",
    description: "Detective figure",
    price: "600" ,
    imageUrl :"image/item1.jpg"
},



{
    id:2,
    title:"Ai Haibara",
    description: "Anime Figure",
    price: "400" ,
    imageUrl :"image/item4.jpg"
}
,
{
    id:3,
    title:"Ran Mouri",
    description: "School Figure ",
    price: "350",
    imageUrl :"image/item7.jpg"
}
,
{
    id:4,
    title:"Inspector Megure",
    description: "Police Figure",
    price: "350" ,
    imageUrl :"image/item8.jpg"
}
,
{
    id:5,
    title:"Akai Mini",
    description: "FBI Sniper",
    price: "450" ,
    imageUrl :"image/item15.jpg"
}

,
{
    id:6,
    title:"Mitsuhiko",
    description: "Detective Boy",
    price: "500" ,
    imageUrl :"image/item10.jpg"
}
,
{
    id:7,
    title:"Ayumi Yoshida",
    description: "Detective Kid",
    price: "300" ,
    imageUrl :"image/item11.jpg"
}
,
{
    id:8,
    title:"Professor Agasa",
    description: "Inventor",
    price: "350" ,
    imageUrl :"image/item12.jpg"
}
,
{
    id:9,
    title:"Shuichi Akai ",
    description: "FBI Ageny",
    price: "650" ,
    imageUrl :"image/item13.jpg"
}
,
{
    id:10,
    title:"Vermouth",
    description: "Black Organization",
    price: "500" ,
    imageUrl :"image/item14.jpg"
}
]
function drawItems(productList = products) {
    let y = productList.map((item) => {
        return `
        <div class="product-item">
      <img class="product-item-img" src="${item.imageUrl}" alt="">
      <div class="product-item-desc">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <span>$${item.price}</span>
      </div>
      <div class="product-item-action">
        <button class="add-to-cart" onclick="toggleCart(${item.id}, this)">
           ${isInCart(item.id) ? "Remove" : "Add To Cart"}
        </button>
        <i class="fa-regular fa-heart ico" onclick="toggleFavorite(this)"></i>
      </div>
      </div>`
    })
    .join("")
    allProducts.innerHTML = y;
}
drawItems()

  function isInCart(id) {
    let addedItem = localStorage.getItem("productsInCart")
        ? JSON.parse(localStorage.getItem("productsInCart"))
        : [];

    return addedItem.some((item) => item.id === id);
}









function toggleCart(id, btn) {
    if (!localStorage.getItem("username")) {
        window.location = "login.html";
        return;
    }

    let existingItem = addedItem.find((item) => item.id === id);

    if (existingItem) {
        addedItem = addedItem.filter((item) => item.id !== id);
        btn.innerHTML = "Add To Cart";
    } else {
        let choosenItem = products.find((item) => item.id === id);
        addedItem.push({ ...choosenItem, quantity: 1 });
        btn.innerHTML = "Remove From Cart";
    }

    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
    drawCartMenuItems();
    updateBadge();
    drawItems();
}




function toggleFavorite(icon) {
    if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        icon.style.color = "red";
    } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        icon.style.color = "";
    }
}








 let searchInput = document.querySelector("#searchInput");
let searchBtn = document.querySelector("#searchBtn");
let searchType = document.querySelector("#searchType");

function searchProducts() {
    let value = searchInput.value.trim().toLowerCase();
    let type = searchType.value;

    let filteredProducts = products.filter((item) => {
        if (type === "title") {
            return item.title.toLowerCase().includes(value);
        } else if (type === "description") {
            return item.description.toLowerCase().includes(value);
        }
    });

    drawItems(filteredProducts);
}

searchBtn.addEventListener("click", searchProducts);

searchInput.addEventListener("keyup", function () {
    searchProducts();
});

















// let searchInput = document.querySelector("#searchInput");
// let searchBtn = document.querySelector("#searchBtn");
// let searchType = document.querySelector("#searchType");
// function searchProducts() {
//     let value = searchInput.value.trim().toLowerCase();
//     let type = searchType.value
//     let filteredProducts = products.filter((item) =>{
//         if (type === "title")
//             return item.title.toLowerCase() .includes(value);
//     }else if (type === "description") {
//         return item.description.toLowerCase() .includes(value);
//     }
       
//     );

//     drawItems(filteredProducts);
// }

// searchBtn.addEventListener("click", searchProducts);

// searchInput.addEventListener("keyup", function () {
//     searchProducts();
// });






let cartProductDiv = document.querySelector(".carts-products div")

let badge = document.querySelector(".badge")
// let addedItem = [];
// when i do refresh doesnt lose the added item
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")):[];


///////////////edited1//////////////////
function drawCartMenuItems() {
    if (!cartProductDiv) return;
    cartProductDiv.innerHTML = "";
    addedItem.forEach((item) =>{
    // cartProductDiv.innerHTML += `<P>${item.title} (${item.quantity})</p>`;
    let priceNumber = parseInt(item.price);
    let total = priceNumber * item.quantity;
    cartProductDiv.innerHTML += `
    <div class="cart-menu-item">
    
    <span class="cart-title">${item.title}</span>
    
    <div class="cart-qty">
     <button type="button" onclick="decreaseQuantity(${item.id})">-</button>
     <span>${item.quantity}</span>
     <button type="button" onclick="increaseQuantity(${item.id})">+</button>
    </div>
    <span class="cart-price"> $${total}</span>
    </div>
    
    
    `

    
        
    })
}

 function updateBadge() {
    if(!badge) return;
    let totalQuantity = addedItem.reduce((total , item) =>{
        return total + item.quantity;

    }, 0);
    if (totalQuantity > 0){
        badge.style.display="block";
        badge.innerHTML = totalQuantity;
    }else{
        badge.style.display="none";
    }
    
 }
 drawCartMenuItems();
 updateBadge();


// ///////////edit2//////////////////////

// function addToCart(id) {
//     if (!localStorage.getItem("username")) {
//         window.location = "login.html";
//         return;
//     }
//     let choosenItem = products.find((item)=> item.id === id);
//     let existingItem = addedItem.find((item)=> item.id === id);
//     if (existingItem) {
//         existingItem.quantity += 1;
//     }else{
//         addedItem.push({...choosenItem, quantity: 1})
//     }
//     localStorage.setItem("productsInCart", JSON.stringify(addedItem));
//     drawCartMenuItems();
//     updateBadge();
// }
function increaseQuantity(id){

let product = addedItem.find(item => item.id === id);

if(product){
product.quantity += 1;
}

localStorage.setItem("productsInCart", JSON.stringify(addedItem));

drawCartMenuItems();
updateBadge();
cartsProducts.style.display = "block"

}
function decreaseQuantity(id){

let product = addedItem.find(item => item.id === id);

if(product){
product.quantity -= 1;
   if (product.quantity <= 0) {
        addedItem = addedItem.filter((item) => item.id !== id);
        }
}

localStorage.setItem("productsInCart", JSON.stringify(addedItem));

drawCartMenuItems();
updateBadge();
cartsProducts.style.display = "block"
}


// if(addedItem.length > 0) 
//  {
//     addedItem.map(item =>{
//         cartProductDiv.innerHTML += `<p>${item.title}</p>`
//     })
//     badge.style.display = "block";
//     badge.innerHTML = addedItem.length;
// }
// when i do refresh doesnt lose the added item





    // if(localStorage.getItem("username")){
    //  function addToCart(id) {

    // if (!localStorage.getItem("username")) {
    //     window.location = "login.html";
    //     return;
    // }

    // let choosenItem = products.find((item)=> item.id === id);

    // cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;

    // addedItem = [...addedItem , choosenItem];
    // localStorage.setItem("productsInCart" , JSON.stringify(addedItem));

    // call all the p in the div  
    // let cartProductsLength = document.querySelectorAll(".carts-products div p"); 
    //  will show the number of the items in the badge
    // badge.style.display="block";
    // badge.innerHTML = cartProductsLength.length;
    //  window.location= "cartproducts.html"
// }
    // }else{
    //     window.location="login.html"
       
    // }
    








// //////////////////////////////////////
// ////edit3//////////////////////////////////

let shoppingCartIcon = document.querySelector(".shopping-cart")
let cartsProducts = document.querySelector(".carts-products")
if (shoppingCartIcon) {
    shoppingCartIcon.addEventListener("click", opencart);
}
// to edit the dec & inc buttons in the dropdown
if (cartsProducts) {
    cartsProducts.addEventListener("click" , function (e){
        e.stopPropagation();
    })
}
function opencart() {
    if(cartProductDiv && cartProductDiv .innerHTML !=""){
   if(cartsProducts.style.display=="block"){
        cartsProducts.style.display="none"
    }else{
        cartsProducts.style.display="block"
    }
  }
    
}









// //////////////////////////////////////////////

// let shoppingCartIcon = document.querySelector(".shopping-cart")
// let cartsProducts = document.querySelector(".carts-products")
// shoppingCartIcon.addEventListener("click", opencart)

// function opencart (){
//  if(cartProductDiv.innerHTML !=""){
//     if(cartsProducts.style.display=="block"){
//         cartsProducts.style.display="none"
//     }else{
//         cartsProducts.style.display="block"
//     }
//  }
// }
// //////////////////////////////////////////