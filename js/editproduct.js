// Varibales
let products=JSON.parse(localStorage.getItem("products")) ||productsDB;
let productId=JSON.parse(localStorage.getItem("editproduct"));
let getProduct=products.find((i)=> i.id===productId);

let productName=document.getElementById("product-name");
let productDesc=document.getElementById("product-desc");
let productSizeSelect=document.getElementById("product-size");
let updateForm=document.getElementById("update-form");
let inputFile=document.getElementById("upload-image-file");
let inputFile2=document.getElementById("upload-image-file2");
let inputFile3=document.getElementById("upload-image-file3");
let productSizeValue;
let productImage;
let productImage2;
let productImage3;
productName.value=getProduct.title;
productDesc.value=getProduct.desc;
productSizeSelect.value=getProduct.size;
productImage=getProduct.imageUrl1;
productImage2=getProduct.imageUrl2;
productImage3=getProduct.imageUrl3;


// //Event
productSizeSelect.addEventListener("change", getProductSizeValue);
updateForm.addEventListener("submit", updateProductFun);
inputFile.addEventListener("change", uploadImage);
inputFile2.addEventListener("change", uploadImage2);
inputFile3.addEventListener("change", uploadImage3);
// //Function
function getProductSizeValue(e){
productSizeValue=e.target.value;
}
function updateProductFun(e){
    e.preventDefault();
    getProduct.title=productName.value;
    getProduct.desc=productDesc.value;
    getProduct.size=productSizeValue;
    getProduct.imageUrl1=productImage;
    getProduct.imageUrl2=productImage2;
    getProduct.imageUrl3=productImage3;
    localStorage.setItem("products",JSON.stringify(products));

    setTimeout(()=>{
        window.location="index.html";
    },500)
}
//uploadImage

function uploadImage(){
    let file=this.files[0];
    let types=["image/jpeg", "image/png"];
    if(types.indexOf(file.type) ==-1){
        alert("type not supported");
        return;
    }
    
    getImageBase64(file);
    // productImage=URL.createObjectURL(file);

}
function getImageBase64(file){
    let reader=new FileReader();
    reader.readAsDataURL(file);

    reader.onload=function(){
        productImage=reader.result;
    };
    reader.onerror=function(){
        alert("Error !!");
    };
}
//uploadImage2
function uploadImage2(){
    let file=this.files[0];
    let types=["image/jpeg", "image/png"];
    if(types.indexOf(file.type) ==-1){
        alert("type not supported");
        return;
    }
    
    getImageBase642(file);
}

function getImageBase642(file){
    let reader=new FileReader();
    reader.readAsDataURL(file);

    reader.onload=function(){
        productImage2=reader.result;
    };
    reader.onerror=function(){
        alert("Error !!");
    };
}
//uploadImage3
function uploadImage3(){
    let file=this.files[0];
    let types=["image/jpeg", "image/png"];
    if(types.indexOf(file.type) ==-1){
        alert("type not supported");
        return;
    }
    
    getImageBase643(file);
}

function getImageBase643(file){
    let reader=new FileReader();
    reader.readAsDataURL(file);

    reader.onload=function(){
        productImage3=reader.result;
    };
    reader.onerror=function(){
        alert("Error !!");
    };
}