let TuNombre = prompt("Ingrese tu Nombre")

    alert("Hola: "  +TuNombre +" Bienvenido a nuestra catalogo de Suplementos.")

console.log(TuNombre)

const productos = [
    "Aumentador de Peso: 300USD", "Proteina: 250USD", "Creatina: 250USD", "Multivitaminico: 200USD", "Omega 3: 400USD",
]

let carrito = []

function catalogo() {
    let menu = "Productos Disponibles:\n"  
    for (let i = 0; i < productos.length; i++) {
        menu = menu + (i + 1) + ". " + productos[i] + "\n" 
    }
    console.log("Genial, excelente opción este es nuestro catalogo disponible en estos momentos..!! :)\n" + menu)
    alert("Genial, excelente opción este es nuestro catalogo disponible en estos momentos..!! :) \n \n" + menu)
}

function agregarCarrito(index) {
    if (index >= 0 && index < productos.length) {
        carrito.push(productos[index])
        console.log("Producto agregado al carrito: " + productos[index] + "\n")
        alert("¡Estupendo! Agregaste: " + productos[index])
    } else {
        console.log("Índice no válido.\n")
        alert("Opcion Incorrecta. Por favor, elige un número correcto.")
    }
   
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.\n")
    } else {
        let carritoContenido = "Productos en el carrito:\n"
        for (let i = 0; i < carrito.length; i++) {
            carritoContenido = carritoContenido + (i + 1) + ". " + carrito[i] + "\n"
        }
        alert("Productos en el carrito: \n" + carrito)
        console.log(carritoContenido)
    }
    
}

function eliminarDelCarrito(index) {
    if (index >= 0 && index < carrito.length) {
        const productoEliminado = carrito.splice(index, 1)
        console.log("Producto eliminado del carrito: " + productoEliminado + "\n")
    } else {
        console.log("Índice no válido.\n");
    }
}

function interactuarConCatalogo() {
    let continuar = true
    while (continuar) {
        let opciones = "Opciones:\n"
        opciones = opciones + "1. Mostrar catálogo\n"
        opciones = opciones + "2. Agregar producto al carrito\n"
        opciones = opciones + "3. Mostrar carrito\n"
        opciones = opciones + "4. Eliminar producto del carrito\n"
        opciones = opciones + "5. Salir\n"
        
        const opcion = prompt(opciones)

        switch (parseInt(opcion)) {

            case 1:
                catalogo()
                break

            case 2:
                const indexAgregar = prompt("¿Qué producto deseas agregar al carrito? (Elige un Producto: \n 0= Aaumentador de Peso \n 1= Proteina \n 2= Creatina \n 3= Multivitaminico \n 4= Omega 3")
                agregarCarrito(parseInt(indexAgregar) )
                break
            
            case 3:
                mostrarCarrito()
                break

            case 4:
                const indexEliminar = prompt("¿Qué producto deseas eliminar del carrito? (Elige un número):")
                eliminarDelCarrito(parseInt(indexEliminar) ) 
                break

            case 5:
                continuar = false
                console.log("¡Hasta luego!\n")
                alert("¡HASTA LUEGO!")
                break

            default:
                console.log("Opción no válida. Por favor, elige un número entre 1 y 5.\n")
                alert("Opcion Incorrecta. Por favor, elige una Opcion correcta.")
        }
    }
}

interactuarConCatalogo()