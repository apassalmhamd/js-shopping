let cartproductDivDom=document.querySelector(".carts-products div");
let badgeDom=document.querySelector(".badge");
let cartproductMenw=document.querySelector(".carts-products");

let shoppingCartIcon=document.querySelector(".shoppingCart");
shoppingCartIcon.addEventListener('click', openCartMenu);

 //check if there is items in localStorge

let addedItem= localStorage.getItem('productsInCart') 
? JSON.parse(localStorage.getItem('productsInCart')) 
: [];

if(addedItem){
    addedItem.map(item => {
        cartproductDivDom.innerHTML +=`<p>${item.title} ${item.qty}</p>`;
    });
    badgeDom.style.display="block";
    badgeDom.innerHTML += addedItem.length;
}
// // open cart menu
function openCartMenu(){
    if(cartproductDivDom.innerHTML != ""){
        if(cartproductMenw.style.display=="block"){
            cartproductMenw.style.display="none";
        }else{
            cartproductMenw.style.display="block";
        }
        
    }
}