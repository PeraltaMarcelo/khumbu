const productos = [
    {
        id: "carpa-01",
        titulo: "Carpa 01",
        imagen: "./assets/img/carpas/carpa1.jpg",
        categoria: {
            nombre: "Carpas",
            id: "carpas"
        },
        precio: 10000
    },
    {
        id: "carpa-02",
        titulo: "Carpa 02",
        imagen: "./assets/img/carpas/carpa2.jpg",
        categoria: {
            nombre: "Carpas",
            id: "carpas"
        },
        precio: 15000
    },
    {
        id: "carpa-03",
        titulo: "Carpa 03",
        imagen: "./assets/img/carpas/carpa3.jpg",
        categoria: {
            nombre: "Carpas",
            id: "carpas"
        },
        precio: 20000
    },
    {
        id: "carpa-04",
        titulo: "Carpa 04",
        imagen: "./assets/img/carpas/carpa4.jpg",
        categoria: {
            nombre: "Carpas",
            id: "carpas"
        },
        precio: 25000
    },
    {
        id: "calzado-01",
        titulo: "Calzado 01",
        imagen: "./assets/img/calzado/calzado1.jpg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: 12000
    },
    {
        id: "calzado-02",
        titulo: "Calzado 02",
        imagen: "./assets/img/calzado/calzado2.jpg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: 17000
    },
    {
        id: "calzado-03",
        titulo: "Calzado 03",
        imagen: "./assets/img/calzado/calzado3.jpg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: 20000
    },
    {
        id: "calzado-04",
        titulo: "Calzado 04",
        imagen: "./assets/img/calzado/calzado4.jpg",
        categoria: {
            nombre: "Calzados",
            id: "calzados"
        },
        precio: 25000
    },
    {
        id: "mochila-01",
        titulo: "Mochila 01",
        imagen: "./assets/img/mochilas/mochila1.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 30000
    },
    {
        id: "mochila-02",
        titulo: "Mochila 02",
        imagen: "./assets/img/mochilas/mochila2.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 25000
    },
    {
        id: "mochila-03",
        titulo: "Mochila 03",
        imagen: "./assets/img/mochilas/mochila3.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 32000
    },
    {
        id: "mochila-04",
        titulo: "Mochila 04",
        imagen: "./assets/img/mochilas/mochila4.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 40000
    },
    
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="podructo-precio">${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
        `;
        contenedorProductos.append(div);
    })
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget,classList.add("active");

        if(e.currentTarget,id != "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else{
            cargarProductos(productos);
        }
    })
})

