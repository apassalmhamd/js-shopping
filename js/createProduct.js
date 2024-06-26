let productName=document.getElementById("product-name");
let productDesc=document.getElementById("product-desc");
let productSizeSelect=document.getElementById("product-size");
let createForm=document.getElementById("create-form");
let inputFile=document.getElementById("upload-image-file");
let inputFile2=document.getElementById("upload-image-file2");
let inputFile3=document.getElementById("upload-image-file3");
let productSizeValue;
let productImage;
let productImage2;
let productImage3;
// let username=document.querySelector("#username");
// let password=document.querySelector("#password");

//Event
productSizeSelect.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit", createProductFun);
inputFile.addEventListener("change", uploadImage);
inputFile2.addEventListener("change", uploadImage2);
inputFile3.addEventListener("change", uploadImage3);
//Function
function getProductSizeValue(e){
productSizeValue=e.target.value;
}
function createProductFun(e){
    e.preventDefault();
    let allProducts=JSON.parse(localStorage.getItem("products")) || productsDB;
    let nameValue=productName.value;
    let descValue=productDesc.value;


    if(nameValue && descValue){
        let obj={
            id:allProducts ? allProducts.length+1 : 1,
            qty:1,
            imageUrl1:productImage,
            imageUrl2:productImage2,
            imageUrl3:productImage3,
            size:productSizeValue,
            title:nameValue,
            title2:"انقر لعرض الصور",
            desc:descValue,
            isMe:"Y",
        };
        let newProducts=allProducts ?[...allProducts, obj] :[obj];
        localStorage.setItem("products", JSON.stringify(newProducts));
    
        productName.value="";
        productDesc.value="";
        productSizeSelect.value="";

        setTimeout(()=>{
            window.location="index.html";
        },500)
    }else{
        alert("Enter Data...");
    }

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
//uploadImage2
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