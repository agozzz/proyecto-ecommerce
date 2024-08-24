window.onload = function() {
    let usuario = sessionStorage.getItem("username");
    let contraseña = sessionStorage.getItem("password");

    if (!usuario || !contraseña) {
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