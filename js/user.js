//DESAFÍATE de la Entrega N°2 mejorado, con lo agregado del punto 2 de la Entrega N°5.

document.addEventListener("DOMContentLoaded", function() {
    let menuDeUsuario = document.getElementById("infoUsuario"); //Obtenemos el elemento HTML donde se mostrará el nombre de usuario con el menú desplegable
    let dropdownMenu = document.querySelector("#infoUsuarioContainer .dropdown-menu"); //Seleccionamos el menú desplegable que se encuentra dentro del contenedor de usuario
    let usuario = localStorage.getItem("username"); //Obtenemos el nombre de usuario almacenado en LocalStorage
    

    menuDeUsuario.innerHTML = `Hola, ${usuario}!`; //Establecemos el texto del botón de usuario con un saludo y su nombre de usuario

    //Creamos el HTML para el menú desplegable con los enlaces a las secciones correspondientes
    dropdownMenu.innerHTML = `
        <li><a class="dropdown-item" href="cart.html">Carrito</a></li>
        <li><a class="dropdown-item" href="sell.html">Vender</a></li>
        <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
        <li><a class="dropdown-item" href="#" id="logout">Cerrar sesión</a></li>
    `;

    //Acá agregamos la funcionalidad para el cierre de sesión
    document.getElementById("logout").addEventListener("click", function() { //Evento "click" sobre Cerrar sesión, que lleva el id "logout"
        localStorage.removeItem("username"); //Elimina el usuario almacenado en LocalStorage
        window.location.href = "login.html"; //Redirige a la pantalla de inicio de sesión
    });
});