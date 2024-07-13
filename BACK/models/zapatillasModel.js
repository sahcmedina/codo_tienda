// importo la base de datos
require('../data/asociaciones.js')
const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const ZapatillasModel =db.define("zapatillas",{
    modelo:{type:DataTypes.STRING},
    marca:{type:DataTypes.STRING},
    precio:{type:DataTypes.INTEGER},
})

module.exports = ZapatillasModel