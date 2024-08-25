document.addEventListener("DOMContentLoaded", function() {

    const button = document.querySelector("button");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    
    function login() {
        if (!username.value || !password.value) {
            alert("Debes ingresar un usuario y una contraseña para continuar");
        } else {
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("password", password);
            window.location.href = "index.html"
        }
    };
    
    button.addEventListener("click", login);
    
    
    });