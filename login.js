let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#login")

let getUsername = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")
loginBtn.addEventListener("click" ,function(e){
e.preventDefault()
if(username.value === "" || password.value === ""){
    alert("please fill data")
}else{
    if(getUsername && getUsername.trim() === username.value.trim() && getPassword && getPassword.trim() === password.value.trim())
       setTimeout(  ()  => {
        window.location = "index.html"
      } , 1500)
      else{
        alert("username or password are not correct")
      }
}

})