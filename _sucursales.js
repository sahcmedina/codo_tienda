/* DOMContentLoaded */
document.addEventListener("DOMContentLoaded",()=>{
/* Obtener el body de la tabla donde se mostraran las sucursales */
const bodyTablaSucursales = document.querySelector("#body-tabla-sucursales")
/* Obtener el formulario para crear un nueva sucursal */
const formCrearSucursal = document.querySelector("#form-crear-sucursal")

// funcion para obtener los datos de nuestra API utilizando AXIOS
const fetchSucursales = async ()=>{
try {
    const respuesta = await axios.get (`http://localhost:3030/sucursales/`)
    /*     console.log(respuesta.data); */
    const sucursal = respuesta.data
    //limpiar la tabla antes de agregar los nuevos datos
    bodyTablaSucursales.innerHTML = "";
    /* Iterar sobre los datos y agregar cada posteo a la tabla */
    sucursal.forEach(sucursal=>{
        // creo una nueva fila
        const fila = document.createElement("tr")
    
        //Crear celdas para titulo, contenido y acciones
        const celdaProvincia = document.createElement("td")
        const celdaDireccion = document.createElement("td")
        const celdaAcciones  = document.createElement("td")

        // asignar el contenido de las celdas
        celdaProvincia.textContent = sucursal.provincia
        celdaDireccion.textContent = sucursal.direccion

        // crear el boton de eliminar
        const botonEliminar       = document.createElement("button")
        botonEliminar.textContent = "Eliminar"
        botonEliminar.addEventListener("click",()=>{borrarSucursal(sucursal.id)})

        // crear el boton para editar una zapatilla
        const botonEditar = document.createElement("button")
        botonEditar.textContent = "Editar"
        botonEditar.addEventListener("click", ()=>{
            // Redirigir a la pagina de edicion  con el ID del post en la url
            window.location.href = `_sucursales_edit.html?id=${sucursal.id}`
        })

        // agregar los botones a la celda de acciones
        celdaAcciones.appendChild(botonEliminar)
        celdaAcciones.appendChild(botonEditar)

        // agregamos las celdas a la fila
        fila.appendChild(celdaProvincia)
        fila.appendChild(celdaDireccion)
        fila.appendChild(celdaAcciones)

        // Agregar la fila al cuerpo de la tabla
        bodyTablaSucursales.appendChild(fila)
    })
} catch (error) {
    console.error (`Error al obtener los post : ${error}`)
}
}

// Eliminar 
const borrarSucursal = async (id)=>{
    try {
        await axios.delete (`http://localhost:3030/sucursales/${id}`)
        // recargo lista
        fetchSucursales()
    } catch (error) {
        console.error (`Error al eliminar: ${error}`)
    }
}

// Crear
formCrearSucursal.addEventListener("submit", async function (evento){
    evento.preventDefault();
    const nuevoSucursal = {
        provincia: document.querySelector("#nuevo-provincia").value, 
        direccion: document.querySelector("#nuevo-direccion").value
    };
    try {
        await axios.post(`http://localhost:3030/sucursales/`,nuevoSucursal)
        //limpiamos el formulario
        formCrearSucursal.reset()
        // recargue los posteos actualizado
        fetchSucursales()
    } catch (error) {
        console.error (`Error al crear: ${error}`)
    }
})

//llamar a la funcion para obtener y mostrar los posteos cuando Carga la pagina
fetchSucursales()
})