class Cliente {
    constructor (nombre, numero, direccion){
        this.nombre = nombre;
        this.numero = numero;
        this.direccion = direccion;
    }
}

let boton = document.querySelector("#Enviar");
boton.addEventListener("click", agregarCliente);

// agregado datos de cliente - mostrar datos del cliente y compra realizada al confirmar la compra

function agregarCliente(){
    let nombre = document.querySelector("#nombre").value;
    let numero = document.querySelector("#numero").value;
    let direccion = document.querySelector("#direccion").value;
    let cliente1 = new Cliente(nombre, numero, direccion);
    console.log(cliente1);
    mostrarCliente(cliente1);
    Swal.fire({
        title: 'CONFIRMADO',
        html: `Muchas gracias ${nombre}!! <br>
        Recibiras tu pedido en ${direccion}. <br>
        Monto final: $${total} <br>
        Disfruta tu pedido!! <br>
        Hasta la proxima !! <br>
        `,
        icon: 'Success',
        confirmButtonText: 'Listo!'
    });
}

// mostrar datos del cliente y compra realizada al confirmar la compra
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

// defino los productos de la tienda
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


// nombro las variables 
let carrito = [];
let total = 0;
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonConfirmar = document.querySelector('#boton-confirmar');
const miLocalStorage = window.localStorage;

// genero las card por cada producto
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

// funcion para agregar al carro - ve si existe o si es un producto nuevo
// guarda la indo del carro en localstorage
const agregarAlCarrito = (indice) => {
    const codigoProd = carrito.findIndex((elemento)=>{
        return elemento.id === productos[indice].id;
    });
    Swal.fire({
        title: 'Agregado',
        text: 'Producto agregado a su compra',
        icon: 'success',
        confirmButtonText: 'Listo!'
    });
    const productoAgregar = productos[indice];
    codigoProd === -1 ? (        
        productoAgregar.cantidad = 1,
        carrito.push(productoAgregar), 
        mostrarCarrito(),
        guardarLocalStorage()
    ) : (
        carrito[codigoProd].cantidad = carrito[codigoProd].cantidad + 1,
        mostrarCarrito(),
        guardarLocalStorage()
    )
};

let valor = 0;

// me muestra todos los productos agregados al carro y calcula el total de la compra 
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

// funcion para eliminar un producto del carro
const eliminar = (indice) => {
    carrito.splice(indice, 1);
    Swal.fire({
        title: 'Eliminado',
        text: 'Producto eliminado de su compra',
        icon: 'success',
        confirmButtonText: 'Listo!'
    });
    mostrarCarrito();
    guardarLocalStorage();
    total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0 );
    DOMtotal.classList.add("total-carrito-fin");
    DOMtotal.innerHTML=`
    <div class ="product-details" > Total: $ ${total}</div>
    `     
}

// funcion para vaciar el carro
DOMbotonVaciar.addEventListener("click", vaciar)
function vaciar() {
    carrito = [];
    total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0 );
    DOMtotal.classList.add("total-carrito-fin");
    DOMtotal.innerHTML=`
    <div class ="product-details" > Total: $ ${total}</div>
    ` 
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Sean eliminados todos los productos del carro.'
      })

    mostrarCarrito();
    localStorage.clear();

}


// boton de confirmar compra, usa funcion de agregar cliente
DOMbotonConfirmar.addEventListener("click", agregarCliente);

// funcion de guardar los productos del carro en el localstorage
function guardarLocalStorage(){
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));

}

// funcion para que el carro tenga la info guardada en localstorage
function cargarCarritoDeLocalStorage(){
    miLocalStorage.getItem("carrito") !== null ? (
        carrito = JSON.parse(miLocalStorage.getItem("carrito")), 
        mostrarCarrito()
    ) : (
        alert ("El carrito del Local Storage esta vacío.")       

    )
}

cargarCarritoDeLocalStorage();

