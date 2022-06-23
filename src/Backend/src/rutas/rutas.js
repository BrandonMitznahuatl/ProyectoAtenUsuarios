//const { query } = require('express');

const routes = require('express').Router();

routes.get('/',(req,res)=>{
    res.send('Ruta Principal');
});

const conexion = require("../config/conexionBD")


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

//Ruta de Loc¿ginAcceso
routes.get('/bdAcceso',(req,res)=>{
    let query = "SELECT * FROM LoginAcceder;";
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

//Ruta de Loc¿ginRecuperar
routes.get('/bdRecuperar',(req,res)=>{
    let query = "SELECT * FROM LoginRecuperar;";
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

//Ruta de LoginRegistrar
routes.get('/bdRegistrar',(req,res)=>{
    let query = "SELECT * FROM LoginRegistro;";
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

