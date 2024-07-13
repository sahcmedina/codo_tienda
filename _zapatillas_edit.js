
document.addEventListener("DOMContentLoaded", ()=>{
// obtenemos el formulario de edicion
const formEditar = document.querySelector("#form-editar-zapatilla")

//obtener los parametros de la URL 
const parametrosURL = new URLSearchParams (window.location.search)
// obtener el id de post que queremos editar
//http://127.0.0.1:5501/CLASES/Clase33/FRONT/edit.html?id=1
const iDZapatilla = parametrosURL.get ("id")

// Obtener por Id
const traerZapatilla = async (id)=>{
    try {
        const respuesta = await axios.get (`http://localhost:3030/zapatillas/${id}`)
        console.log(respuesta);
        const zapatilla = respuesta.data;
        //Asignafr los valores obtenido a los campos del formulario
        document.querySelector("#nuevo-marca").value =zapatilla.marca
        document.querySelector("#nuevo-modelo").value =zapatilla.modelo
        document.querySelector("#nuevo-precio").value =zapatilla.precio
    } catch (error) {
        console.error(`Error al obtener zapatilla :`, error);
    }
}

// Obtener zapatilla actual
if (iDZapatilla){
    traerZapatilla(iDZapatilla)
}

// Actualizar
formEditar.addEventListener("submit", async function(evento){
evento.preventDefault()
const actualizarZapatilla = {
    modelo: document.querySelector("#nuevo-modelo").value,
    marca : document.querySelector("#nuevo-marca").value, 
    precio: document.querySelector("#nuevo-precio").value 
}
try {
    await axios.put(`http://localhost:3030/zapatillas/${iDZapatilla}`,actualizarZapatilla)
    alert (`Zapatilla ${iDZapatilla} Actualizada`)
    window.location.href = "_zapatillas.html"
} catch (error) {
    console.error(`Error al actualizar :`, error);
}


})


})