const { DELETE } = require("sequelize/lib/query-types")
const sucursalesModel = require ("../models/sucursalesModel.js")

/* READ - GET */
const traerSucursales = async (req,res)=> {
try {
    const sucursales =  await sucursalesModel.findAll()
    res.json(sucursales)
} catch (error) {
    res.json({message:error.message})
}
}

/* READ - GET */
const traerUnaSucursal = async (req,res)=>{
try {
    const sucursal = await sucursalesModel.findByPk(req.params.id)
    res.json(sucursal)
} catch (error) {
    res.json({message:error.message})
}
}

/* CREATE - POST */
const crearSucursal = async (req,res)=>{
    try {
        await sucursalesModel.create(req.body)
        res.json("registro CREADO correctamente.")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* UPDATE - PUT */
const actualizarSucursal = async(req,res)=>{
    try {
        await sucursalesModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("registro ACTUALIZADO correctamente.")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* DELETE - DELETE */
const borrarSucursal = async (req,res)=>{
    try {
        await sucursalesModel.destroy( { where:{id:req.params.id}})
        res.json("registro BORRADO correctamente.")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports= {traerSucursales,traerUnaSucursal,crearSucursal,actualizarSucursal,borrarSucursal}