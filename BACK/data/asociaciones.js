const Zapatillas = require('../models/zapatillasModel')
const Sucursales = require('../models/sucursalesModel')
const Ventas     = require('../models/ventasModel')

// 1 a muchos (zapatillas - VENTAS  - sucursales)
Zapatillas.belongsToMany(Sucursales, {
    as: "sucursales",
    through: "ventas",
    foreignKey: "fk_zapatillas",
});
Sucursales.belongsToMany(Zapatillas, {
    as: "zapatillas",
    through: "ventas",
    foreignKey: "fk_sucursales",
});