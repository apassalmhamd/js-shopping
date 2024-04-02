let productsDom=document.querySelector(".products");
let noProductsDom=document.querySelector(".noProducts");

function drawCartProductsUI(allProducts = []) {

    if(JSON.parse(localStorage.getItem("productsInCart")).length === 0)
        noProductsDom.innerHTML='there is no items !!';
    
    let products=
    JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
    let productsUI=products.map((item)=>{
        return`
        <div class="product-item">
                    <img src="${item.imageUrl1}" class="product-item-img" alt="image"/>
                    <img src="${item.imageUrl2}" class="product-item-img" alt="image"/>
                    <img src="${item.imageUrl3}" class="product-item-img" alt="image"/>
                    <div class="product-item-desc">
                        <h2>${item.title}</h2>
                        <h2>${item.title2}</h2>
                        <p>${item.desc}</p>
                        <span> size: ${item.size} </span> <br>
                        <span> Quntatiy: ${item.qty} </span>
                    </div>
                        <div class="product-item-actions">
                                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Cart</button>
                                <i class=" favorite far fa-heart"></i>

                        </div>
                    
                </div>
        `;
    });
    productsDom.innerHTML=productsUI.join("");
}
drawCartProductsUI();

function removeItemFromCart(id){
let productsInCart=localStorage.getItem("productsInCart");
if(productsInCart){
    let items=JSON.parse(productsInCart);
    let filteredItems= items.filter((item)=> item.id !==id);
    localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
    drawCartProductsUI(filteredItems);
}
}