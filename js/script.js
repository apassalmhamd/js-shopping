
//Define product
let productsDom=document.querySelector(".products");
// let cartproductMenw=document.querySelector(".carts-products");
// let cartproductDivDom=document.querySelector(".carts-products div");
// let shoppingCartIcon=document.querySelector(".shoppingCart")
// let badgeDom=document.querySelector(".badge");
let products=productsDB;
// open cart menu
// shoppingCartIcon.addEventListener('click', openCartMenu);
//Disply products
let drawProductsUI;
(drawProductsUI= function(products=[]){

    let productsUI=products.map((item)=>{
        return`
        <div class="product-item" style="border: ${item.isMe==="Y" ? "2px solid green" : ""}">
                    <img src="${item.imageUrl1}" class="product-item-img" alt="image"/>
                    <img src="${item.imageUrl2}" class="product-item-img" alt="image"/>
                    <img src="${item.imageUrl3}" class="product-item-img" alt="image"/>
                    <div class="product-item-desc">
                        <a onclick="saveItemData(${item.id})">${item.title}</a>
                        <a onclick="saveItemData(${item.id})">${item.title2}</a>
                        <p>${item.desc}</p>
                        <span> size: ${item.size} </span>
                        
                    </div>
                        <div class="product-item-actions">
                                <button class="add-to-cart" onclick="addedTocart(${item.id})">Add To Cart</button>
                                <i class=" favorite far fa-heart" 
                                style="color:${
                                    item.liked==true ? "red" : ""}"
                                onclick="addedToFavorite(${item.id})"></i>

                        </div>
                    
                </div>
        `;
    });
    productsDom.innerHTML=productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);

//check if there is items in localStorge

//     let addedItem= localStorage.getItem('productsInCart') 
// ? JSON.parse(localStorage.getItem('productsInCart')) 
// : [];

// if(addedItem){
//     addedItem.map(item => {
//         cartproductDivDom.innerHTML +=`<p>${item.title} ${item.qty}</p>`;
//     });
//     badgeDom.style.display="block";
//     badgeDom.innerHTML += addedItem.length;
// }

//add to cart

function addedTocart(id){
    
    if(localStorage.getItem('username')){
        let products=JSON.parse(localStorage.getItem("products")) || products;
        let product=products.find((item)=> item.id === id);
        let isProductInCart=addedItem.some((i) => i.id ===product.id);
        if(isProductInCart){
            addedItem=addedItem.map((p)=>{
                if(p.id === product.id) p.qty +=1;
                return p;
            });
        }else{
            addedItem.push(product);
        }
        cartproductDivDom.innerHTML="";
        addedItem.forEach(item =>{
            cartproductDivDom.innerHTML +=`<p>${item.title} <span class='item-qty'> ${item.qty}</span> </p>`;
        })
        //save data
        localStorage.setItem('productsInCart', JSON.stringify(addedItem));
        //Add counter Items
        let carteProductItem=document.querySelectorAll(".carts-products div p");
        badgeDom.style.display="block";
        badgeDom.innerHTML=carteProductItem.length;
    }else{
        window.location="login.html"
    }

}

function getUnigueArr(arr , filterType){
    let unigue=arr
        .map((item)=> item[filterType])
        .map((item,i,final) =>final.indexOf(item) === i && i)
        .filter((item)=> arr[item])
        .map((item)=> arr[item]);
    return unigue;
}

// open cart menu
// function openCartMenu(){
//     if(cartproductDivDom.innerHTML != ""){
//         if(cartproductMenw.style.display=="block"){
//             cartproductMenw.style.display="none";
//         }else{
//             cartproductMenw.style.display="block";
//         }
        
//     }
// }

function saveItemData(id){
    localStorage.setItem("productId", id);
    window.location="cartDetails.html";
}
//search function
let input=document.getElementById("search");
input.addEventListener("keyup", function(e){
    search(e.target.value ,JSON.parse(localStorage.getItem("products")));
    if(e.target.value.trim() === "")
    drawProductsUI(JSON.parse(localStorage.getItem("products")));
});
function search(title, myArray){
    let arr=myArray.filter((item)=> item.title.toLowerCase().indexOf(title.toLowerCase()) !==-1);

        drawProductsUI(arr);
}

//add to favorite
// let favoritesItems= localStorage.getItem('productsFavorite') 
// ? JSON.parse(localStorage.getItem('productsFavorite')) 
// : [];
// function addedToFavorite(id){
//     if(localStorage.getItem('username')){
//         let choosenItem=products.find((item)=> item.id === id);
//         choosenItem.liked=true;
//         favoritesItems=[...favoritesItems, choosenItem];
//         let unigueProducts=getUnigueArr(favoritesItems,"id");
//         localStorage.setItem('productsFavorite', JSON.stringify(unigueProducts));
//         products.map((item)=> {
//             if(item.id ===choosenItem.id){
//                 item.liked=true;
//             }
//         });
//         localStorage.setItem("products", JSON.stringify(products));
//         drawProductsUI(products);
//     }else{
//         window.location="login.html"
//     }

// }
// Filter products By size
let sizeFilter=document.getElementById("size-filter");
sizeFilter.addEventListener("change",getProductsFilterBySize);

function getProductsFilterBySize(e){
    let val=e.target.value;
    let products=JSON.parse(localStorage.getItem("products")) || products;
    if(val ==="all"){
        drawProductsUI(products);
    }else{
        products=products.filter((i)=> i.size===val);
        drawProductsUI(products);
    }
}
// Edit product

// function editproduct(id){
//     localStorage.setItem("editproduct", id);
//         window.location="editproduct.html";
    
// }
// let myproductsAdmin=document.getElementById("myproductsAdmin");
// myproductsAdmin.addEventListener("click", myproductsAdminn);
// function myproductsAdminn(){
//         window.location="myproducts.html";
// }


