// importo la base de datos
require('../data/asociaciones.js')
const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const VentasModel =db.define("ventas",{
    fecha        : {type:DataTypes.DATE},
    fk_zapatillas: {type:DataTypes.INTEGER},
    fk_sucursales: {type:DataTypes.INTEGER},
    cant         : {type:DataTypes.INTEGER},
})

module.exports = VentasModel