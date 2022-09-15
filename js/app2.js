class Cliente {
    constructor (nombre, numero, direccion){
        this.nombre = nombre;
        this.numero = numero;
        this.direccion = direccion;
    }
}
let x = 100/0
console.log(x)

let boton = document.querySelector("#Enviar");
boton.addEventListener("click", agregarCliente);

// agregado datos de cliente

function agregarCliente(){
    let nombre = document.querySelector("#nombre").value;
    let numero = document.querySelector("#numero").value;
    let direccion = document.querySelector("#direccion").value;
    let cliente1 = new Cliente(nombre, numero, direccion);
    console.log(cliente1);
    mostrarCliente(cliente1);
}

// eliminar elementos
function mostrarCliente(cliente){
    let formulario = document.querySelector("#contacto");
    formulario.innerHTML ="";
    //agregar elementos
    let nuevo = document.createElement("div");
    nuevo.innerHTML = `<h2>Gracias ${cliente.nombre}, sus datos fueron registrados y recibira su pedido en ${cliente.direccion}</h2>`;
    nuevo.className= "saludoCliente"
    formulario.appendChild(nuevo);

}


let productos = [
    {
        id: 1,
        nombre: "Pizza Muzzarella",
        precio: 1000,
        imagen: "./images/pizza.png",
    },
    {
        id: 2,
        nombre: "Pizza Especial",
        precio: 1200,
        imagen: "./images/pizza.png",
    },
    {
        id: 3,
        nombre: "Pizza Fugazzeta",
        precio: 1300,
        imagen: "./images/pizza.png",
    },
    {
        id: 4,
        nombre: "Pizza Napoletana",
        precio: 1400,
        imagen: "./images/pizza.png",
    },
    {
        id: 5,
        nombre: "Empanada Arabe",
        precio: 200,
        imagen: "./images/empanadas.png",
    },
    {
        id: 6,
        nombre: "Empanada Jamon y Queso",
        precio: 200,
        imagen: "./images/empanadas.png",
    },
    {
        id: 7,
        nombre: "Empanada Criolla",
        precio: 200,
        imagen: "./images/empanadas.png",
    },
    {
        id: 8,
        nombre: "Empanada Vegan",
        precio: 200,
        imagen: "./images/empanadas.png",
    },
    {
        id: 9,
        nombre: "Hamburguesa Classic",
        precio: 800,
        imagen: "./images/hamburguer classic.png",
    },
    {
        id: 10,
        nombre: "Hamburguesa Doble Cheese & Bacon",
        precio: 1000,
        imagen: "./images/hamburguer classic.png",
    },
    {
        id: 11,
        nombre: "Hamburguesa Triple Cheese & Bacon",
        precio: 1400,
        imagen: "./images/hamburguer classic.png",
    },
    {
        id: 12,
        nombre: "Hamburguesa Vegan",
        precio: 1300,
        imagen: "./images/hamburguer classic.png",
    },
    {
        id: 13,
        nombre: "Lomito Especial con papas" ,
        precio: 1500,
        imagen: "./images/lomito.png",
    },
    {
        id: 14,
        nombre: "Lomito Mex con papas",
        precio: 1700,
        imagen: "./images/lomito.png",
    },
    {
        id: 15,
        nombre: "Lomitos American con papas",
        precio: 1900,
        imagen: "./images/lomito.png",
    },
    {
        id: 16,
        nombre: "Lomito Vegan",
        precio: 1500,
        imagen: "./images/lomito.png",
    },
    {
        id: 17,
        nombre: "Sandwich de Milanesa Classic con papas",
        precio: 1100,
        imagen: "./images/sand milanesa.png",
    },
    {
        id: 18,
        nombre: "Sandwich de Milanesa Mex con papas",
        precio: 1400,
        imagen: "./images/sand milanesa.png",
    },
    {
        id: 19,
        nombre: "Sandwich de Milanesa American con papas",
        precio: 1900,
        imagen: "./images/sand milanesa.png",
    },
    {
        id: 20,
        nombre: "Sandwich de Milanesa Berenjena con papas",
        precio: 1600,
        imagen: "./images/sand milanesa.png",
    },

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

function dibujarProductos() {
    productos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-car');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${divisa}${info.precio}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-info');
        miNodoBoton.textContent = 'Comprar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', function(){ alert("Este producto se agregara a tu carrito cuando resuelva como hacerlo!"); });
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

dibujarProductos();



