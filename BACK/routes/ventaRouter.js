const express = require ("express")

// controladores
const {traerVentas,traerVentas_query,traerUnaVenta,crearVenta,actualizarVenta,borrarVenta } = require ("../controllers/ventaControllers.js")

/* configuracion de rutas express // metodos de HTTP */
const router = express.Router()

// NOTA: intente traer no solo la tabla VENTAS, sino: (1) join a través de seq.query y (2) asociaciones pero de ninguna manera pude...
router.get ("/" ,traerVentas)
router.get ("/" ,traerVentas_query)
router.get ("/:id",traerUnaVenta)
router.post ("/", crearVenta)
router.put ("/:id", actualizarVenta)
router.delete ("/:id", borrarVenta) 

module.exports = router