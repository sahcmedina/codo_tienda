const {Sequelize} = require ("sequelize")

/*  nombre de la base de datos -  user - contraseña - {donde esta alojada?,lenguaje, puerto} */

const db = new Sequelize ("posteos24255","root","1xz9tv48",{
    host: "localhost",
    dialect: "mysql",
    port:3306 
})

module.exports= db