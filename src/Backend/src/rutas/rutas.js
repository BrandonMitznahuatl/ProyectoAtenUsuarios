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

// RUTA DE LOGIN ACCESO
routes.get('/bdAcceso',(req,res)=>{
    let query = "select usuario, contraseña from Acceso;";
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

//Acceso y Rol
routes.get('/bdUsuarios',(req,res)=>{
    let query = "select Acceso.Usuario, Rol.Descripcion FROM Acceso INNER JOIN Rol ON Acceso.Usuario=Rol.Descripcion;";
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

