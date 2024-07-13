
document.addEventListener("DOMContentLoaded", ()=>{
// obtenemos el formulario de edicion
const formEditar = document.querySelector("#form-editar-sucursal")

//obtener los parametros de la URL 
const parametrosURL = new URLSearchParams (window.location.search)
// obtener el id de post que queremos editar
//http://127.0.0.1:5501/CLASES/Clase33/FRONT/edit.html?id=1
const iDSucursal = parametrosURL.get ("id")

// Obtener por Id
const traerSucursal = async (id)=>{
    try {
        const respuesta = await axios.get (`http://localhost:3030/sucursales/${id}`)
        console.log(respuesta);
        const sucursal = respuesta.data;
        //Asignafr los valores obtenido a los campos del formulario
        document.querySelector("#nuevo-provincia").value =sucursal.provincia
        document.querySelector("#nuevo-direccion").value =sucursal.direccion
    } catch (error) {
        console.error(`Error al obtener sucursal :`, error);
    }
}

// Obtener zapatilla actual
if (iDSucursal){
    traerSucursal(iDSucursal)
}

// Actualizar
formEditar.addEventListener("submit", async function(evento){
evento.preventDefault()
const actualizarSucursal = {
    provincia: document.querySelector("#nuevo-provincia").value,
    direccion: document.querySelector("#nuevo-direccion").value 
}
try {
    await axios.put(`http://localhost:3030/sucursales/${iDSucursal}`,actualizarSucursal)
    alert (`Sucursal ${iDSucursal} Actualizada`)
    window.location.href = "_sucursales.html"
} catch (error) {
    console.error(`Error al actualizar :`, error);
}

})

})