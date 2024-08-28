/*DESAFÍATE - ENTREGA 1*/
window.onload = function() { /*Al cargar la ventana se ejecuta la siguiente función*/
    let usuario = localStorage.getItem("username"); /*Tomamos del localStorage los datos de usuario y contraseña*/
    let contraseña = localStorage.getItem("password");

    if (!usuario || !contraseña) { /*Acá se ejecuta una condición, si no hay valor ingresado como usuario o contraseña, la página nos redireccionará al login*/
        window.location.href = "login.html";
    }
};


document.addEventListener("DOMContentLoaded", function(){
    /*DESAFÍATE -ENTREGA 2*/
    let mostrarUsuario = document.getElementById("mostrar-usuario"); /*Traemos el elemento del index.html donde vamos a mostrar el nombre de usuario*/
    let usuario = localStorage.getItem("username"); /*Traemos desde el localStorage el valor ingresado como usuario*/
    
    mostrarUsuario.innerHTML += "Hola," + " " + usuario + "!";/*Modificamos el html para que en mostrarUsuario se muuestre el saludo junto con el nombre de usuario*/

    

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