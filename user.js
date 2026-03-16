let userInfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")


if(localStorage.getItem("username")){
    let username = localStorage.getItem("username");
    username = username.charAt(0).toUpperCase() + username.slice(1);
     if (links) links.remove();
   if (userInfo) userInfo.style.display = "flex";
   if (userData) userData.innerHTML = username;
}
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(() =>{
    window.location = "login.html";
    } , 1500)
}
)
