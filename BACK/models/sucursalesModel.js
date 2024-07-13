// importo la base de datos
require('../data/asociaciones.js')
const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const SucursalesModel =db.define("sucursales",{
    provincia : {type:DataTypes.STRING},
    direccion : {type:DataTypes.STRING},
})

module.exports = SucursalesModel