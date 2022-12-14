const carrito = []
const carritoEfectivo = []

function sumaListado() {

    const totalCompra = carrito.reduce((acc, el) => acc + el.precio, 0)
    const totalcompraEfect = carritoEfectivo.reduce((acc, el) => acc + el.precio, 0)
    const promo = carrito.filter((el)=> el.articulo.includes("PROMO")) 
    
    console.log(promo) 
    console.log(totalCompra)
    console.log(totalcompraEfect)
    
    

    const listadoLocal = (clave, valor) => {
        localStorage.setItem(clave, valor)
    };

    for ( const producto of carrito) {
        listadoLocal("productosCompra", JSON.stringify(carrito))
    }

    let carroCompra = document.getElementById("itemsCompra")
    for (const item of carrito){
        let listado = document.createElement ("li");
        listado.innerHTML = item
        carroCompra.appendChild(listado);
    }
    
    let total = document.getElementById("totalPrecio")
    
    total.innerHTML = totalCompra
    
    let totalEfect = document.getElementById("totalprecioEfect")
    
    totalEfect.innerHTML = totalcompraEfect 
    }

class primeraInfancia {
    constructor(articulo, precio){
        this.articulo = articulo.toUpperCase();
        this.precio = parseFloat(precio)
    }

    descEfect () {
        this.precio = this.precio/1.10;
    }
}

let botonCamion = document.getElementById("btnCamion")
botonCamion.onclick = () => {
    carrito.push(new primeraInfancia("camion didactico promo", "3200"));
    carritoEfectivo.push(new primeraInfancia("camion didactico", "3200"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
    sumaListado()
}

let botonCubo =  document.getElementById("btnCubo")
botonCubo.onclick = () => {
    carrito.push(new primeraInfancia("Cubo Didactico", "2800"));
    carritoEfectivo.push(new primeraInfancia("Cubo Didactico", "2800"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
    sumaListado()
}

let botonApego = document.getElementById("btnApego")
    botonApego.onclick = () => {
    carrito.push(new primeraInfancia("Mu??eco de Apego promo", "3000"));
    carritoEfectivo.push(new primeraInfancia("Mu??eco de Apego", "3000"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
    sumaListado()
}

let botonPelotero = document.getElementById("btnPelotero")
    botonPelotero.onclick = () => {
    carrito.push(new primeraInfancia("Pelotero", "3300"));
    carritoEfectivo.push(new primeraInfancia("Pelotero", "3300"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
    sumaListado()
}

let botonSensorial = document.getElementById("btnSensorial")
    botonSensorial.onclick = () => {
    carrito.push(new primeraInfancia("Libro Sensorial", "1800"));
    carritoEfectivo.push(new primeraInfancia("Libro Sensorial", "1800"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
    sumaListado()
}

let botonXilofon = document.getElementById("btnXilofon")
botonXilofon.onclick = () => {
    carrito.push(new primeraInfancia("Xilfon Promo", "3200"));
    carritoEfectivo.push(new primeraInfancia("Xilfon", "3200"));
    for(const primeraInfancia of carritoEfectivo) {
        primeraInfancia.descEfect();}
    console.log(carrito)
    console.log(carritoEfectivo)
    sumaListado()
}