class Cliente {
    constructor (nombre, numero, direccion){
        this.nombre = nombre;
        this.numero = numero;
        this.direccion = direccion;
    }
}

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
    let form = document.querySelector("#items");
    form.innerHTML ="";
    let formulario = document.querySelector("#contacto");
    formulario.innerHTML ="";
    //agregar elementos
    let nuevo = document.createElement("div");
    nuevo.innerHTML = `
    <h2>Muchas Gracias ${cliente.nombre}!!</h2>
    <p>Sus datos fueron registrados y su compra fue exitosa.</p>
    <hr>
    <p>Su pedido ya ha sido confirmado por el restaurant y esta siendo procesado.</p>
    <p>Recibira su pedido en ${cliente.direccion}</p>
    <h3>Monto final abonado $${total}.</h3>
    <h2>Disfruta tu pedido !!</h2>
    `;
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
let total = 0;
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonConfirmar = document.querySelector('#boton-confirmar');
const miLocalStorage = window.localStorage;


function dibujarProductos() {
    productos.forEach((producto, indice) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card');
        miNodo.innerHTML = 
        `<div class='card-body'>
        <img class='car-img' src='${producto.imagen}'></img>
        <h5 class='card-title'> ${producto.nombre} </h5>
        <p class='card-text'> ${divisa}${producto.precio} </p>
        <button class='btn btn-info' onclick="agregarAlCarrito(${indice})"> Comprar </button>
        `
        DOMitems.appendChild(miNodo);
    });
};
dibujarProductos();

const agregarAlCarrito = (indice) => {
    const codigoProd = carrito.findIndex((elemento)=>{
        return elemento.id === productos[indice].id;
    });
    if(codigoProd === -1){
        const productoAgregar = productos[indice];
        productoAgregar.cantidad = 1;
        carrito.push(productoAgregar); 
        mostrarCarrito();
        guardarLocalStorage();
    }
    else{
        carrito[codigoProd].cantidad = carrito[codigoProd].cantidad + 1;
        mostrarCarrito();
        guardarLocalStorage();
    };
}
let valor = 0;
const mostrarCarrito = () => {
    DOMcarrito.className = "carro" ;
    DOMcarrito.innerHTML = "" ;
    if (carrito.length > 0) {
        carrito.forEach((producto,indice)=>{
            const carritoFinal = document.createElement("div");
            carritoFinal.classList.add("card-body")
            carritoFinal.innerHTML=`
            <div class="product-details">${producto.nombre}</div>
            <img class="car-img" src="${producto.imagen}"></img>
            <div class ="product-details" >Cantidad:${producto.cantidad}</div>
            <div class ="product-details" >Precio: $ ${producto.precio}</div>
            <div class ="product-details" > Subtotal: $ ${producto.precio * producto.cantidad}</div>
            <button type="button" class ="btn btn-danger"  id="eliminar" onclick="eliminar(${indice})">Eliminar Producto</button>`;
            DOMcarrito.appendChild(carritoFinal);
            total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0 );
            
        
            }
            
        );
        
        
    }
    DOMtotal.classList.add("total-carrito-fin");
    DOMtotal.innerHTML=`
    <div class ="product-details" > Total: $ ${total}</div>
    ` 

   
    
}

const eliminar = (indice) => {
    carrito.splice(indice, 1);
    mostrarCarrito();
    guardarLocalStorage();
    total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0 );
    DOMtotal.classList.add("total-carrito-fin");
    DOMtotal.innerHTML=`
    <div class ="product-details" > Total: $ ${total}</div>
    `     
}

DOMbotonVaciar.addEventListener("click", vaciar)
function vaciar() {
    carrito = [];
    total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0 );
    DOMtotal.classList.add("total-carrito-fin");
    DOMtotal.innerHTML=`
    <div class ="product-details" > Total: $ ${total}</div>
    ` 
    mostrarCarrito();
    localStorage.clear();

}



DOMbotonConfirmar.addEventListener("click", agregarCliente);


function guardarLocalStorage(){
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));

}

function cargarCarritoDeLocalStorage(){
    if (miLocalStorage.getItem("carrito") !== null) {
        carrito = JSON.parse(miLocalStorage.getItem("carrito"));  
        //mostrarCarrito();      
    }
}

cargarCarritoDeLocalStorage();