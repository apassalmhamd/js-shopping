let userInfo=document.querySelector("#user_info");
let userDom=document.querySelector("#user");
let links=document.querySelector("#links");
let logoutBtn=document.querySelector("#logout")
let username=localStorage.getItem("username");
if(username){
    links.remove();
    userInfo.style.display="flex";
    userDom.innerHTML=username;
}
logoutBtn.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="register.html";
    }, 1500)
});
// // let system=document.getElementById("create-product-icon");
// // if(username==="appas" || password==="123qwe"){
// //     system.style.display="flex";
// // }
// // createproduct.html
// // let usernameAddToCart=document.querySelector("#username");
// // let passwordAddToCart=document.querySelector("#password");
// let userAddproduct=document.getElementById("userAddproduct");
// userAddproduct.addEventListener("click", userAddproductFun);
// function userAddproductFun(){
//     // if(username==="appas" && PasswordAdmin==="123qwe"){
//         window.location="createproduct.html";
//     // }else{
//     //     window.location="index.html";
//     // }
// }

// // userAddproductFun();
