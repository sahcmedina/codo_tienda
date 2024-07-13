const express = require ("express")

// controladores
const {traerZapatillas,traerUnaZapatilla,crearZapatilla,actualizarZapatilla,borrarZapatilla } = require ("../controllers/zapatillaControllers.js")

/* configuracion de rutas express // metodos de HTTP */
const router = express.Router()

router.get ("/" ,traerZapatillas)
router.get ("/:id",traerUnaZapatilla )
router.post ("/", crearZapatilla)
router.put ("/:id", actualizarZapatilla)
router.delete ("/:id", borrarZapatilla) 

module.exports = router