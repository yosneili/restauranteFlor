//Practica de programación orientada a objetos

/* class Persona {
    #edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.#edad = edad;
    }

    obtenerEdad() {  //metodo
        return this.#edad;
    }

}

const persona1 = new Persona('Hector', 35);
console.log(persona1.nombre);
console.log(persona1.obtenerEdad());
console.log(persona1.nombre = 'ana');
/* console.log(persona1.edad); */

//carrito de compras
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

}

class Carrito {
    constructor() {
        this.productos = [];
    }

    //agregar producto
    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(`El ${producto.nombre} ha sido agregado correctamente`)
        console.log(this.productos)
    }

    mostrarProducto() {
        console.log("mostrarProducto")
        productsList.innerHTML = '';  // Limpiar la lista antes de agregar nuevos productos
        if (this.productos.length === 0) {
            productsList.innerText = 'No hay productos en el carrito';
        } else {
            this.productos.forEach((producto, index) => {
                let productoString = `${index + 1} - ${producto.nombre} - $ ${producto.precio}`;
                productsList.innerHTML += `
                <li style="padding: 10px">
                    ${productoString}
                    <button type="button" class="btn btn-danger btn-eliminar"
                            data-index="${index}"
                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                    Eliminar
                    </button>
                </li>
                `;

                if (index == this.productos.length - 1) {
                    productsList.innerHTML += `
                    <div style="text-align: right; padding-top: 40px">
                        <span>
                            El total a pagar es: $ ${this.calcularTotal()}
                        </span>
                    </div>
                    `;
                }
            });
    
            // Seleccionar todos los botones de eliminar
            const btnsEliminar = document.querySelectorAll('.btn-eliminar');
            btnsEliminar.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = e.target.getAttribute('data-index');
                    this.eliminarProducto(index);
                    this.mostrarProducto();  // Actualizar la lista después de eliminar
                });
            });
        }
    }
    

    calcularTotal() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio
        })
        return total
    }

    eliminarProducto(productoIndex) {
        this.productos.forEach((producto, index) => {
            if (index == productoIndex ){
                    this.productos.splice(index, 1);
                    console.log(`El producto ${producto.nombre} ha sido eliminado correctamente`)
                    console.log(this.productos)
                    refreshBadgeCarrito()
            }

        })
    }
}
//objetos (productos)
let producto1 = new Producto('Empanada de Pino', 2500);
let producto2 = new Producto('Empanada Vegana', 10000);
let producto3 = new Producto('Empanada de Pino sin Pasas', 2200);
let producto4 = new Producto('Anticucho', 5000)

//crear el carrito

let carrito = new Carrito();

//agregar productos al carrito
/*carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto3);
carrito.agregarProducto(producto4);

//mostrar productos

carrito.mostrarProducto();

//sumar productos

carrito.calcularTotal();*/

carrito.agregarProducto(producto1)
carrito.agregarProducto(producto2)
carrito.agregarProducto(producto3)


const badgeCarrito = document.getElementById("badgeCarrito")
refreshBadgeCarrito()

const btnCarrito = document.getElementById("btnCarrito")
btnCarrito.addEventListener("click", mostrarCarrito)

const productsList = document.getElementById("productsList")

const btnAgregarEmpanada = document.getElementById("botonComprarEmpanda")
btnAgregarEmpanada.addEventListener("click", ()=>{
    carrito.agregarProducto(producto1)
    refreshBadgeCarrito()
})

function mostrarCarrito() {
    carrito.mostrarProducto()
}

function refreshBadgeCarrito() {
    badgeCarrito.innerText = carrito.productos.length
}




