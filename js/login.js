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

     // Evento para permitir enviar al presionar Enter en el campo de contraseña
     password.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evitar el comportamiento por defecto
            login(); // Llama a la función de inicio de sesión
        }
    });
    
    
    });