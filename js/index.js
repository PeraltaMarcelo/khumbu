Swal.fire({
    title: 'Bienvenido',
    text: 'KHUMBU - Tienda de Montaña',
    iconHtml:'<i class="bi bi-emoji-smile-fill"></i>'
  })

  const productos = [
    {
        id: "carpa-01",
        titulo: "Carpa 01",
        imagen: "./assets/img/carpas/carpa1.jpg",
        categoria: {
            nombre: "Carpas",
            id: "carpas"
        },
        precio: " 50 "
    },
    {
        id: "carpa-02",
        titulo: "Carpa 02",
        imagen: "./assets/img/carpas/carpa2.jpg",
        categoria: {
            nombre: "Carpas",
            id: "carpas"
        },
        precio: " 55"
    },
    {
        id: "carpa-03",
        titulo: "Carpa 03",
        imagen: "./assets/img/carpas/carpa3.jpg",
        categoria: {
            nombre: "Carpas",
            id: "carpas"
        },
        precio: " 60"
    },
    {
        id: "carpa-04",
        titulo: "Carpa 04",
        imagen: "./assets/img/carpas/carpa4.jpg",
        categoria: {
            nombre: "Carpas",
            id: "carpas"
        },
        precio: " 85"
    },
    {
        id: "calzado-01",
        titulo: "Calzado 01",
        imagen: "./assets/img/calzado/calzado1.jpg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: " 45"
    },
    {
        id: "calzado-02",
        titulo: "Calzado 02",
        imagen: "./assets/img/calzado/calzado2.jpg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: " 57"
    },
    {
        id: "calzado-03",
        titulo: "Calzado 03",
        imagen: "./assets/img/calzado/calzado3.jpg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: " 30"
    },
    {
        id: "calzado-04",
        titulo: "Calzado 04",
        imagen: "./assets/img/calzado/calzado4.jpg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: " 80"
    },
    {
        id: "mochila-01",
        titulo: "Mochila 01",
        imagen: "./assets/img/mochilas/mochila1.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: " 35"
    },
    {
        id: "mochila-02",
        titulo: "Mochila 02",
        imagen: "./assets/img/mochilas/mochila2.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: " 70"
    },
    {
        id: "mochila-03",
        titulo: "Mochila 03",
        imagen: "./assets/img/mochilas/mochila3.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: " 25"
    },
    {
        id: "mochila-04",
        titulo: "Mochila 04",
        imagen: "./assets/img/mochilas/mochila4.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: " 75"
    },
    
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
const Dolar = document.getElementById("Dolar");

const cargarDolar = () => {
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json()) 
    .then(({solidario, blue, ccl, mep }) => {
    console.log(solidario, blue, ccl, mep)
    Dolar.innerHTML = `
        <h2>Cotizacion del dolar </h2>
        <p>Solidario: $ ${solidario}</p>
        <p>Blue: $ ${blue}</p>
        <p>CCL: $ ${ccl}</p>
        <p>Mep: $ ${mep}</p>
        
    `
}) 
}
cargarDolar()
setInterval(() => {
    cargarDolar()
}, 60000);

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">USD${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}