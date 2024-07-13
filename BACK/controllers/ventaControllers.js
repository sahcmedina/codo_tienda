const ventasModel     = require ("../models/ventasModel.js")
const zapatillasModel = require ("../models/zapatillasModel.js")
const sucursalesModel = require ("../models/sucursalesModel.js")
const { DELETE }      = require("sequelize/lib/query-types")
require("../data/asociaciones.js")

/* READ - GET */
const traerVentas = async (req,res)=> {
    try {
        const ventas =  await ventasModel.findAll({
            include : [
                {
                    model: zapatillasModel,
                    required: true,
                    attributes: ['marca', 'modelo'],
                    include: [
                        {
                            model: sucursalesModel,
                            required: true,
                            attributes: ['provincia'],
                        }
                    ]
                }
            ],
        })
        res.json(ventas)
        
    } catch (error) {
        res.json({message:error.message})
    }
}

const traerVentas_query = async (req,res)=> {
    try {
        ventas = await sequelize.query(
            " SELECT v.id, v.fecha, CONCAT(z.marca,' - ', z.modelo) AS zapatilla, v.cant, s.provincia AS sucursal FROM ventas AS v INNER JOIN zapatillas AS z ON v.fk_zapatillas = z.id INNER JOIN sucursales AS s ON v.fk_sucursales = s.id ",
            { type: sequelize.QueryTypes.SELECT }
          );
        res.json(ventas)
    } catch (error) {
        res.json({message:error.message})
    }
}

/* READ - GET */
const traerUnaVenta = async (req,res)=>{
try {
    const venta = await ventasModel.findByPk(req.params.id)
    res.json(venta)
} catch (error) {
    res.json({message:error.message})
}
}

/* CREATE - POST */
const crearVenta = async (req,res)=>{
    try {
        await ventasModel.create(req.body)
        res.json("registro CREADO correctamente.")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* UPDATE - PUT */
const actualizarVenta = async(req,res)=>{
    try {
        await ventasModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("registro ACTUALIZADO correctamente.")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* DELETE - DELETE */
const borrarVenta = async (req,res)=>{
    try {
        await ventasModel.destroy( { where:{id:req.params.id}})
        res.json("registro BORRAR correctamente.")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports= {traerVentas,traerVentas_query,traerUnaVenta,crearVenta,actualizarVenta,borrarVenta}