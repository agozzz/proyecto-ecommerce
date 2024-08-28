document.addEventListener("DOMContentLoaded", function() {

    const button = document.querySelector("button");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    
    function login() {
        if (!username.value || !password.value) {
            alert("Debes ingresar un usuario y una contraseña para continuar");
        } else {
            console.log("username", username.value);
            console.log("password", password.value);
            localStorage.setItem("username", username.value);
            localStorage.setItem("password", password.value);
            window.location.href = "index.html"
        }
    };
    
    button.addEventListener("click", login);
    
    
    });