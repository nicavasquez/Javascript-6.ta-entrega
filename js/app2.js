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
    let formulario = document.querySelector("#contacto");
    formulario.innerHTML ="";
    //agregar elementos
    let nuevo = document.createElement("div");
    nuevo.innerHTML = `<h2>Gracias ${cliente.nombre}, sus datos fueron registrados y recibira su pedido en ${cliente.direccion}</h2>`;
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


const dibujarProductos = () => {
    let contenedor = document.querySelector("#container");
    productos.forEach((producto,indice)=>{
        let card = document.createElement("div");
        card.classList.add("card", "col-sm-12", "col-lg-3");
        card.innerHTML=`<img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <a href="#" class="btn btn-info" onClick="agregarAlcarrito(${indice})">Comprar</a>
        </div>`;
        contenedor.appendChild(card);
    });
};

dibujarProductos();

let carrito = [];

const agregarAlcarrito = () => {
    alert("Producto agregado al carrito.");
    const indiceCarrito = carrito.findIndex((elemento)=>{
        return elemento.id === productos[indice].id ;
    });
    if(indiceCarrito === -1){
        const productoAgregar = productos[indice];
        productoAgregar.cantidad = 1;
        carrito.push(productoAgregar);
        dibujarCarrito();
    }else{
        carrito[indiceCarrito].cantidad +=1;
        dibujarCarrito();
    };
};

let total = 0
