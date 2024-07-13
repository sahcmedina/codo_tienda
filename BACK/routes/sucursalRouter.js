const express = require ("express")

// controladores
const {traerSucursales,traerUnaSucursal,crearSucursal,actualizarSucursal,borrarSucursal } = require ("../controllers/sucursalControllers.js")

/* configuracion de rutas express // metodos de HTTP */
const router = express.Router()

router.get ("/" ,traerSucursales)
router.get ("/:id",traerUnaSucursal)
router.post ("/", crearSucursal)
router.put ("/:id", actualizarSucursal)
router.delete ("/:id", borrarSucursal) 

module.exports = router