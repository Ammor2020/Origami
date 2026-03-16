// let ProductsInCart = localStorage.getItem("productsInCart")
// let allProducts = document.querySelector(".carts-in-product")
// let badge = document.querySelector(".badge")

// if(ProductsInCart){
//     let item = JSON.parse(ProductsInCart) ;
//     drawCartProducts(item)

// }

// function drawCartProducts(products) {
//     let y = products.map((item) => {
//         return `
//         <div class="product-item">
//       <img class="product-item-img" src="${item.imageUrl}" alt="">
//       <div class="product-item-desc">
//         <h2>${item.title}</h2>
//         <p>${item.description}</p>
//         <span>${item.price}</span></i>
//       </div>
//       <div class="product-item-action">
//       <div class="qu <button class="increaseQuantity" onclick="increaseQuantity(${item.id})">+</button>antity-box">
//         <button class="decreaseQuantity" onclick="decreaseQuantity(${item.id})">-</button>
//         <span>${item.quantity}</span>
//        
//       </div>
//         <button class="remove-from-cart" onclick="RemoveFromCart(${item.id})">Remove From Cart</button>
//       </div>
//       </div>`
//     })
//     .join("")
//     allProducts.innerHTML = y;
// }
// // /////added ///////////////////////////
// function updateBadge() {
//   let totalQuantity = item.reduce((total , item)=> total + item.quantity, 0);
//   if(totalQuantity > 0){
//     badge.style.display = "block";
//     badge.innerHTML = totalQuantity;

//   }else{
//     badge.style.display = "none";
//   }
  
// }

// function increaseQuantity(id) {
//   let product =  drawItems.find((item) => item.id === id);
//   if (product) {
//     product.quantity += 1;
    
//   }
//   localStorage.setItem("productsInCart" , JSON.stringify(items));
//   drawCartProducts(items);
//   updateBadge();
// }


// function decreaseQuantity(id) {
//   let product =  drawItems.find((item) => item.id === id);
//   if (product) {
//     product.quantity -= 1;
//     if (product.quantity<= 0) {
//       items = items.filter((item) => item.id !== id);
//     }
//   }
//   localStorage.setItem("productsInCart" , JSON.stringify(items));
//   drawCartProducts(items);
//   updateBadge();
// }



// ////edited/////
let ProductsInCart = localStorage.getItem("productsInCart");
let allProducts = document.querySelector(".carts-in-product");
let badge = document.querySelector(".badge");
let totalPriceElement = document.querySelector("#total-price")

let items = ProductsInCart ? JSON.parse(ProductsInCart) : [];

drawCartProducts(items);
updateBadge();

function drawCartProducts(products) {
    let y = products.map((item) => {
        return `
        <div class="product-item">
            <img class="product-item-img" src="${item.imageUrl}" alt="">
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <span>$${item.price}</span>
            </div>
            <div class="product-item-action">
                <div class="quantity-box">
                    <button class="decreaseQuantity" onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button class="increaseQuantity" onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <button class="remove-from-cart" onclick="RemoveFromCart(${item.id})">Remove From Cart</button>
            </div>
        </div>`;
    }).join("");

    allProducts.innerHTML = y;
}

function updateBadge() {
    let totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

    if (totalQuantity > 0) {
        badge.style.display = "block";
        badge.innerHTML = totalQuantity;
    } else {
        badge.style.display = "none";
    }
    updateTotalPrice();
}

function increaseQuantity(id) {
    let product = items.find((item) => item.id === id);

    if (product) {
        product.quantity += 1;
    }

    localStorage.setItem("productsInCart", JSON.stringify(items));
    drawCartProducts(items);
    updateBadge();
    updateTotalPrice();
}

function decreaseQuantity(id) {
    let product = items.find((item) => item.id === id);

    if (product) {
        product.quantity -= 1;

        if (product.quantity <= 0) {
            items = items.filter((item) => item.id !== id);
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(items));
    drawCartProducts(items);
    updateBadge();
    updateTotalPrice();
}

function RemoveFromCart(id) {
    items = items.filter((item) => item.id !== id);

    localStorage.setItem("productsInCart", JSON.stringify(items));
    drawCartProducts(items);
    updateBadge();
    updateTotalPrice();
}
function updateTotalPrice() {
    let total = items.reduce((sum , item)=>{
        return sum + (parseInt(item.price) * item.quantity);
    }, 0);
    if (totalPriceElement) {
        totalPriceElement.innerHTML = `$${total}`
    }
    //  localStorage.setItem("productsInCart", JSON.stringify(items));
    // drawCartProducts(items);
    // updateBadge();
    // updateTotalPrice();
}


// ///heart disappear////////
document.addEventListener("click" , function (e) {
    if (e.target.classList.contains("ico2")) {
        let favItem = e.target.closest(".fav-product-item")
       if (favItem) {
         favItem.remove()
       }
    }
});






































////////////////////////////////////////////////
// function RemoveFromCart(id) {

//     let ProductsInCart = JSON.parse(localStorage.getItem("productsInCart")) || [];

//     // remove selected product
//     let index = ProductsInCart.findIndex(item => item.id == id);
// if (index  !== -1) {
//   ProductsInCart.splice(index, 1)
// }

// // To minus from the badge when i remove one product

// function updateBadge() {
//   if (addedItem.length > 0) {          
//     badge.style.display = "block";
//     badge.innerHTML = addedItem.length;
//   } else {
//     badge.style.display = "none";
//   }
// }
//     // update localStorage
//     localStorage.setItem("productsInCart", JSON.stringify(ProductsInCart));

//     // redraw cart
//     drawCartProducts(ProductsInCart);
//      updateBadge()
// }