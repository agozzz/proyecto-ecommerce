/*DESAFÍATE - ENTREGA 1*/
window.onload = function() { /*Al cargar la ventana se ejecuta la siguiente función*/
    let token = localStorage.getItem("token");
    if (!token) { /*Acá se ejecuta una condición, si no hay valor ingresado como usuario o contraseña, la página nos redireccionará al login*/
        window.location.href = "login.html";
    }
};


document.addEventListener("DOMContentLoaded", function(){
    

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

});