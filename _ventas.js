/* DOMContentLoaded */
document.addEventListener("DOMContentLoaded",()=>{
/* Obtener el body de la tabla donde se mostraran las ventas */
const bodyTablaVentas = document.querySelector("#body-tabla-ventas")

/* Obtener el formulario para crear un nueva venta */
// const formCrearVenta = document.querySelector("#form-crear-venta")

// funcion para obtener los datos de nuestra API utilizando AXIOS
const fetchVentas = async ()=>{
try {
    const respuesta = await axios.get (`http://localhost:3030/ventas/`)
    console.log(respuesta.data);
    const venta = respuesta.data
    //limpiar la tabla antes de agregar los nuevos datos
    bodyTablaVentas.innerHTML = "";
    /* Iterar sobre los datos y agregar cada posteo a la tabla */
    venta.forEach(venta=>{
        // creo una nueva fila
        const fila = document.createElement("tr")
    
        //Crear celdas 
        const celdaFecha     = document.createElement("td")
        const celdaSucursal  = document.createElement("td")
        const celdaZapatilla = document.createElement("td")
        const celdaCantidad  = document.createElement("td")

        // asignar el contenido de las celdas
        // celdaFecha.textContent     = venta.fecha
        // celdaSucursal.textContent  = venta.sucursal
        // celdaZapatilla.textContent = venta.zapatilla
        // celdaCantidad.textContent  = venta.cant

        celdaFecha.textContent  = venta.marca
        celdaSucursal.textContent  = venta.modelo
        celdaCantidad.textContent  = venta.provincia
       
        // agregamos las celdas a la fila
        fila.appendChild(celdaFecha)
        fila.appendChild(celdaSucursal)
        fila.appendChild(celdaZapatilla)
        fila.appendChild(celdaCantidad)

        // Agregar la fila al cuerpo de la tabla
        bodyTablaVentas.appendChild(fila)
    })
    } catch (error) {
        console.error (`Error al obtener las ventas : ${error}`)
    }
}

//llamar a la funcion para obtener y mostrar los posteos cuando Carga la pagina
fetchVentas()
})