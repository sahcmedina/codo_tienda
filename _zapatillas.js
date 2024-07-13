/* DOMContentLoaded */
document.addEventListener("DOMContentLoaded",()=>{
/* Obtener el body de la tabla donde se mostraran los posteos */
const bodyTablaZapatillas = document.querySelector("#body-tabla-zapatillas")
/* Obtener el formulario para crear un nueva zapatilla */
const formCrearZapatilla = document.querySelector("#form-crear-zapatilla")

// funcion para obtener los datos de nuestra API utilizando AXIOS
const fetchZapatillas = async ()=>{
try {
    const respuesta = await axios.get (`http://localhost:3030/zapatillas/`)
    /*     console.log(respuesta.data); */
    const zapatilla = respuesta.data
    //limpiar la tabla antes de agregar los nuevos datos
    bodyTablaZapatillas.innerHTML = "";
    /* Iterar sobre los datos y agregar cada posteo a la tabla */
    zapatilla.forEach(zapatilla=>{
        // creo una nueva fila
        const fila = document.createElement("tr")
    
        //Crear celdas para titulo, contenido y acciones
        const celdaMarca   = document.createElement("td")
        const celdaModelo  = document.createElement("td")
        const celdaPrecio  = document.createElement("td")
        const celdaAcciones= document.createElement("td")

        // asignar el contenido de las celdas
        celdaMarca.textContent  = zapatilla.marca
        celdaModelo.textContent = zapatilla.modelo
        celdaPrecio.textContent = zapatilla.precio

        // crear el boton de eliminar
        const botonEliminar       = document.createElement("button")
        botonEliminar.textContent = "Eliminar"
        botonEliminar.addEventListener("click",()=>{borrarZapatilla(zapatilla.id)})

        // crear el boton para editar una zapatilla
        const botonEditar = document.createElement("button")
        botonEditar.textContent = "Editar"
        botonEditar.addEventListener("click", ()=>{
            // Redirigir a la pagina de edicion  con el ID del post en la url
            window.location.href = `_zapatillas_edit.html?id=${zapatilla.id}`
        })

        // agregar los botones a la celda de acciones
        celdaAcciones.appendChild(botonEliminar)
        celdaAcciones.appendChild(botonEditar)

        // agregamos las celdas a la fila
        fila.appendChild(celdaMarca)
        fila.appendChild(celdaModelo)
        fila.appendChild(celdaPrecio)
        fila.appendChild(celdaAcciones)

        // Agregar la fila al cuerpo de la tabla
        bodyTablaZapatillas.appendChild(fila)
    })
} catch (error) {
    console.error (`Error al obtener los post : ${error}`)
}
}

// Eliminar 
const borrarZapatilla = async (id)=>{
    try {
        await axios.delete (`http://localhost:3030/zapatillas/${id}`)
        // recargo lista
        fetchZapatillas()
    } catch (error) {
        console.error (`Error al eliminar: ${error}`)
    }
}

// Crear
formCrearZapatilla.addEventListener("submit", async function (evento){
    evento.preventDefault();
    const nuevoZapatilla = {
        modelo: document.querySelector("#nuevo-modelo").value, 
        marca:  document.querySelector("#nuevo-marca").value,
        precio: document.querySelector("#nuevo-precio").value 
    };
    try {
        await axios.post(`http://localhost:3030/zapatillas/`,nuevoZapatilla)
        //limpiamos el formulario
        formCrearZapatilla.reset()
        // recargue los posteos actualizado
        fetchZapatillas()
    } catch (error) {
        console.error (`Error al crear: ${error}`)
    }
})

//llamar a la funcion para obtener y mostrar los posteos cuando Carga la pagina
fetchZapatillas()
})