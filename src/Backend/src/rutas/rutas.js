//const { query } = require('express');

const routes = require('express').Router();

routes.get('/',(req,res)=>{
    res.send('Ruta Principal');
});

const conexion = require("../config/conexionBD")

routes.get('/bdmicuenta',(req,res)=>{
    let query = "select *from micuenta";
    conexion.query(query,(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(rows);
        }
    })
    //res.send('Base de datos');
})
//Ruta seguimeinto del problema
routes.get('/bdseguimiento',(req,res)=>{
    let query = "SELECT * FROM problemtracking;";
    conexion.query(query,(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(rows);
        }
    })
    //res.send('Base de datos');
})


module.exports = routes;

