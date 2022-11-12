
  class Producto{
    constructor(id,nombre,precio,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    restarStock(){
      this.stock = this.stock -1;
      
    }
}

const prod0 = new Producto(0,"Carpa",15000,10)
const prod1 = new Producto(1,"Mochila",20000,20)
const prod2 = new Producto(2,"Bolsa de dormir",7000,15)
const prod3 = new Producto(3,"Aislante",11000,30)

const productos = [prod0,prod1,prod2,prod3];
const carrito = []

let productosDisponibles = "Disponemos de los siguientes productos:"

function agregaCarrito(){
  
  for (item of productos){
      productosDisponibles +=  `\n ${item.id} - ${item.nombre}  $ ${item.precio}`
  }

  productosDisponibles += `\n Ingresa el Nro de item que deseas agregar. \n Para finalizar ingresa 50`

  let respuesta = parseInt(prompt(productosDisponibles)) 

  while(isNaN(respuesta)){
    alert("ingrese solo números")
    respuesta = parseInt(prompt(productosDisponibles))
  }

while(respuesta != 50){
      switch(respuesta){
          case 0: 
              carrito.push(productos[0])
              alert(`Agregaste el producto: ${productos[0].nombre}`)
              productos[0].restarStock()
              break;
          case 1:
              carrito.push(productos[1])
              alert(`Agregaste el producto: ${productos[1].nombre}`)
              productos[1].restarStock()
              break;
          case 2:
              carrito.push(productos[2])
              alert(`Agregaste el producto: ${productos[2].nombre}`)
              productos[2].restarStock()
              break;
          case 3:
              carrito.push(productos[3])
              alert(`Agregaste el producto: ${productos[3].nombre}`)
              productos[3].restarStock()
              break;
          default:
              alert(`No existe el producto seleccionado`)
              break;
      }
      respuesta = parseInt(prompt(productosDisponibles))
  }
  alert("Terminamos tú pedido")
  mostrarCarrito()
}

let productosCarrito = `Estas comprando: `
let precioCarrito = 0

agregaCarrito()

function mostrarCarrito(){
  for (itemsElegidos of carrito){
      productosCarrito += `\n - ${itemsElegidos.nombre}`
      precioCarrito += itemsElegidos.precio
  }

  alert(` \n ${productosCarrito} \n Y tenes que abonar $: ${precioCarrito}`)
}





