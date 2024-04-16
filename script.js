//carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lsita-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');

cargarEventListenes();

function cargarEventListenes() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarrito.addEventListener('click', vaciarCarrito)
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        Imagen: elemento.querySelector("img").src,
        titilo: elemento.querySelector("h3").texcontent,
        precio: elemento.querySelector(".precio").texcontent,
        id: elemento.querySelector("a").getAttribute("data-id")
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
        <img src="${elemento.Imagen}" width=100 height=150px>
    </td>
    <td>
        ${elemento.titulo}
    </td>
    <td>
        ${elemento.precio}
    </td>
    <td>
        <a herf="#" class="borrar" data-id="${elemento.id}">x</a>
    </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;

    if(e.target.classList.contains("borrar")) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("data-id");
    }
}

function vaciarCarrito() {
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}


//Ejecutando funciones
document.getElementById("btn__iniciar__sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__Registro").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario__login = document.querySelector(".formulario__login");
var formulario__Registro = document.querySelector(".formulario__Registro");
var contenedor__login__Registro = document.querySelector(".contenedor__login__Registro");
var caja__trasera__login = document.querySelector(".caja__trasera__login");
var caja__trasera__Registro = document.querySelector(".caja__trasera__Registro");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja__trasera__Registro.style.display = "block";
        caja__trasera__login.style.display = "block";
    }else{
        caja__trasera__Registro.style.display = "block";
        caja__trasera__Registro.style.opacity = "1";
        caja__trasera__login.style.display = "none";
        formulario__login.style.display = "block";
        contenedor__login__Registro.style.left = "0px";
        formulario__Registro.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario__login.style.display = "block";
            contenedor__login__Registro.style.left = "10px";
            formulario__Registro.style.display = "none";
            caja__trasera__Registro.style.opacity = "1";
            caja__trasera__login.style.opacity = "0";
        }else{
            formulario__login.style.display = "block";
            contenedor__login__Registro.style.left = "0px";
            formulario__Registro.style.display = "none";
            caja__trasera__Registro.style.display = "block";
            caja__trasera__login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario__Registro.style.display = "block";
            contenedor__login__Registro.style.left = "410px";
            formulario__login.style.display = "none";
            caja__trasera__Registro.style.opacity = "0";
            caja__trasera__login.style.opacity = "1";
        }else{
            formulario__Registro.style.display = "block";
            contenedor__login__Registro.style.left = "0px";
            formulario__login.style.display = "none";
            caja__trasera__Registro.style.display = "none";
            caja__trasera__login.style.display = "block";
            caja__trasera__login.style.opacity = "1";
        }
}
