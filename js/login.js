document.addEventListener("DOMContentLoaded", function() {

    const button = document.querySelector("button");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    
    function login() {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                localStorage.setItem("token", data.token);
                localStorage.setItem("username", data.username);
                window.location = "index.html";
            }
        })
        .catch(error => {
            console.error("Error al enviar la solicitud:", error);
        });
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