
let producto = parseInt(
    prompt("Bienvenido a KHUMBU, elige el producto que deseas: 1 Carpa - 2 Mochila - 3 Bolsa de dormir - 4 Aislante ")
    )
  
  let total = 0
  let seguirComprando = true
  let decision

  class Producto{
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const Carpa = new Producto(1,"Carpa",15000)
const Mochila = new Producto(2,"Mochila",20000)
const BolsaDeDormir = new Producto(3,"Bolsa de dormir",7000)
const Aislante = new Producto(4,"Aislante",11000)


  while (seguirComprando === true) {
    if (producto === 1) {
      total = total + Carpa.precio
    } else if (producto === 2) {
      total = total + Mochila.precio
    } else if (producto === 3) {
      total = total + BolsaDeDormir.precio
    } else if (producto === 4) {
      total = total + Aislante.precio
    } else {
      producto = parseInt(prompt('Elije un producto disponible: 1 Carpa - 2 Mochila - 3 Bolsa de dormir - 4 Aislante'))
      continue
  }
  
    decision = parseInt(prompt('¿Quieres seguir comprando? 1=Si - 2=No'))
    if (decision === 1) {
      producto = parseInt(prompt('Selecciona: 1 Carpa - 2 Mochila - 3 Bolsa de dormir - 4 Aislante'))
    } else {
      seguirComprando = false
    }
  }

// si la compra supera los $15000 se le aplicara al cliente un descuento del 10%

function descuento(total){
     resultado = total * 0.9
    alert(`Gracias por elegirnos, tenes un 10% de descuento debes abonar $ ${resultado}`)
}

if(total > 15000){
    descuento(total)

} else {

    alert(`El total de tu compra es ${total}`)
}



  