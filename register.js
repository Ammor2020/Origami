// let username = document.querySelector("#username")
// let email = document.querySelector("#email")
// let password = document.querySelector("#password")
// let registerBtn = document.querySelector("#sign-up")

// registerBtn.addEventListener("click" , function (e) {
//     e.preventDefault()
//     if(username.value === "" || email.value === "" || password.value === ""){
//       alert("Please fill data")
//       return;
//     }else {
//       localStorage.setItem("username", username.value)
//       localStorage.setItem("email", email.value)
//       localStorage.setItem("password", password.value)

//       setTimeout(  ()  => {
//         window.location = "login.html"
//       } , 1500)

//     }
    
       
// })




let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registerBtn = document.querySelector("#sign-up");

registerBtn.addEventListener("click", function(e){
    e.preventDefault();

    if(
        username.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === "",
        alert("Account created successfully")
    ){
        alert("Please fill data");
        return;
    }

    localStorage.setItem("username", username.value.trim());
    localStorage.setItem("email", email.value.trim());
    localStorage.setItem("password", password.value.trim());

    window.location.href = "login.html";
});