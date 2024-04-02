let products=JSON.parse(localStorage.getItem("products"));
let productId=localStorage.getItem("productId");
let itemDom=document.querySelector(".item-details");
let productDetails=products.find((item)=> item.id ==productId);

itemDom.innerHTML=`
                <div>
                <img src="${productDetails.imageUrl1}" alt="">
                <img src="${productDetails.imageUrl2}" alt="">
                <img src="${productDetails.imageUrl3}" alt="">
                </div>
                <h2>${productDetails.title}</h2>
                <p>${productDetails.desc}</p>
                <span>Size : ${productDetails.size}</span><br>
                <span>Qantatiy : ${productDetails.qty}</span><br>
                <button onclick="editproduct(${productId})">Edit product</button>

`;
// Edit product
function editproduct(id){
    localStorage.setItem("editproduct",id);
    window.location="editproduct.html";
}