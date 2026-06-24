const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const Cpassword = document.getElementById("Cpassword")
const name = document.getElementById("name")
const warning1 = document.getElementById("warning1")
const warning2 = document.getElementById("warning2")
const warning3 = document.getElementById("warning3")
const warning4 = document.getElementById("warning4")

function createacc(){
    if(password.value != Cpassword.value){
        warning1.textContent = "* The passwords do not match"
        password.value = ""
        Cpassword.value = ""
    }
    if(password.value == "" || Cpassword.value == ""){
        warning1.textContent = "* Password cannot be empty"
    }
    if(email.value.includes("@") === false){
        warning2.textContent = "* Enter a valid email"
        email.value = ""
    }
    if(username.value == ""){
        warning3.textContent = "* Enter a valid Username"
    }
    if(password.value == Cpassword.value && password.value != "" && Cpassword.value != "" && email.value.includes("@") && username.value != ""){
        window.location.href = "dashboard.html"
        name.textContent = username
    }
}
function signin(){
    if(password.value == "" ){
        warning1.textContent = "* Password cannot be empty"
    }
    if(username.value == ""){
        warning3.textContent = "* Enter a valid Username"
    }
    if(password.value != "" && username.value != ""){
        window.location.href = "dashboard.html"
        name.textContent = username
    }
}

