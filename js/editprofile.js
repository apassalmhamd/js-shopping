let get_user=localStorage.getItem("username");
let get_email=localStorage.getItem("email");
// console.log("user",get_user);

// varibles
// let imageProfil=document.getElementById("upload-image-profile");
let userInput=document.getElementById("changeName");
let userEmailInput=document.getElementById("changeEmail");
let editForm=document.getElementById("edit-profile-form");
// let getProductProfile=get_user.find((i)=> i.id===productId);
// let products=JSON.parse(localStorage.getItem("products")) || productsDB;

// let myprofile=products.filter((i)=> i.isMy==="Y");

// let productImage;


// setting values of input
userInput.value=get_user;
userEmailInput.value=get_email;
// productImage=myprofile.imageUrl;
// console.log("pp",productImage);
// getProductProfile.imageUrl=productImage;
// Event
editForm.addEventListener("submit", editprofileData);
// imageProfil.addEventListener("change", uploadImageProfile)

function editprofileData(e){
    e.preventDefault();
    localStorage.setItem("username",userInput.value);
    localStorage.setItem("email",userEmailInput.value);

    setTimeout(()=>{
        window.location="profile.html";
    },500);
}
//uploadImage

// function uploadImageProfile(){
//     let file=this.files[0];
//     let types=["image/jpeg", "image/png"];
//     if(types.indexOf(file.type) ==-1){
//         alert("type not supported");
//         return;
//     }
//     if(file.size > 2 * 1024 * 1024){
//         alert("Image not Exced 2MG");
//         return;
//     }
//     getImageProfileBase64(file);
//     // productImage=URL.createObjectURL(file);

// }
// function getImageProfileBase64(file){
//     let reader=new FileReader();
//     reader.readAsDataURL(file);

//     reader.onload=function(){
//         productImage=reader.result;
//     };
//     reader.onerror=function(){
//         alert("Error !!");
//     };
// }
