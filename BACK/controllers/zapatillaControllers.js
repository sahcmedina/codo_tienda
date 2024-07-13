const { DELETE } = require("sequelize/lib/query-types")
const zapatillasModel = require ("../models/zapatillasModel.js")

/* READ - GET */
const traerZapatillas = async (req,res)=> {
try {
    const zapatillas =  await zapatillasModel.findAll()
    res.json(zapatillas)
} catch (error) {
    res.json({message:error.message})
}
}

/* READ - GET */
const traerUnaZapatilla = async (req,res)=>{
try {
    const zapatilla = await zapatillasModel.findByPk(req.params.id)
    res.json(zapatilla)
} catch (error) {
    res.json({message:error.message})
}
}

/* CREATE - POST */
const crearZapatilla = async (req,res)=>{
    try {
        await zapatillasModel.create(req.body)
        res.json("registro CREADO correctamente.")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* UPDATE - PUT */
const actualizarZapatilla = async(req,res)=>{
    try {
        await zapatillasModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("registro ACTUALIZADO correctamente.")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* DELETE - DELETE */
const borrarZapatilla = async (req,res)=>{
    try {
        await zapatillasModel.destroy( { where:{id:req.params.id}})
        res.json("registro BORRAR correctamente.")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports= {traerZapatillas,traerUnaZapatilla,crearZapatilla,actualizarZapatilla,borrarZapatilla}