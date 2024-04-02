let productsDom=document.querySelector(".products");
let noProductsDom=document.querySelector(".noProducts");
//Disply products
let drawProductsUI;
(drawProductsUI= function(products=[]){
    let myproducts=products.filter((item)=> item.isMe==="Y");
    // console.log("my", myproducts);
    if(myproducts.length != 0){

    let productsUI=myproducts.map((item)=>{
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
                        <button class='edit-product' id='systemnone' onclick='editproduct(${item.id})'>Edit product</button><br>
                        <button class='edit-product' onclick='deleteproduct(${item.id})'>Delete product</button>
                    </div>
                        
                    
                </div>
        `;
    });
    productsDom.innerHTML=productsUI.join("");
}else{
    noProductsDom.innerHTML="No products !!";
}
})(JSON.parse(localStorage.getItem("products")) || productsDB);



function deleteproduct(id){
    let products=JSON.parse(localStorage.getItem("products")) || productsDB;
    let myproducts=products.filter((item)=> item.isMe ==="Y");
    let filtered=myproducts.filter((i)=> i.id !==id);
    
    let clickedItem=myproducts.find((i)=> i.id === id);
    products = products.filter((i)=> i.id !== clickedItem.id);
    localStorage.setItem("products", JSON.stringify(products));
    drawProductsUI(filtered);
}

// Edit product

function editproduct(id){
    localStorage.setItem("editproduct", id);
    
        window.location="editproduct.html";
    
}
