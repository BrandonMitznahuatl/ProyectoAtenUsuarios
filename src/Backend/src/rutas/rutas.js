//const { query } = require('express');

const routes = require('express').Router();

routes.get('/',(req,res)=>{
    res.send('Ruta Principal');
});

const conexion = require("../config/conexionBD")

routes.get('/a',(req,res)=>{
    res.send('Primera ruta');
})

routes.get('/b',(req,res)=>{
    res.send('Segunda ruta');
})

routes.get('/c',(req,res)=>{
    res.send('Tercera ruta');
})

routes.get('/bd',(req,res)=>{
    let query = "select * from ";
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

routes.get('/bd1',(req,res)=>{
    let query = "select users.nom, rol.descripcion FROM users, rol, userrol WHERE users.id_user = userrol.id_user and rol.id_rol = userrol.id_rol";
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

