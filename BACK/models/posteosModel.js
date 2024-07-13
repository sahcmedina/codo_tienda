// importo la base de datos
require('../data/asociaciones.js')
const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const PosteosModel =db.define("posteos",{
    fecha    :{type:DataTypes.DATE}, 
    titulo   :{type:DataTypes.STRING},
    contenido:{type:DataTypes.STRING},
})

module.exports = PosteosModel