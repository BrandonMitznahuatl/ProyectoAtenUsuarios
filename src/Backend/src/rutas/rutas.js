//const { query } = require('express');

const routes = require('express').Router();

routes.get('/b/',(req,res)=>{
    res.send('Ruta Principal');
});

const conexion = require("../config/conexionBD")


//Ruta seguimeinto del problema
routes.get('/bdseguimeinto',(req,res)=>{
    let query = "SELECT * FROM problemtracking    ";
    conexion.query(query,(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(rows);
        }
    })
   
})


//Ruta solucion del problema
routes.get('/bdsolprob',(req,res)=>{
    let query = "select *from solprob";
    conexion.query(query,(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(rows);
        }
    })
})
//Ruta Login Acceso

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
})

//RUTA DE LOGIN ROL
routes.get('/bdRol',(req,res)=>{
    let query = "select * from Rol;";
    conexion.query(query,(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(rows);
        }
    })
})

//RUTA DE LOGIN DATOS PERSONALES
routes.get('/bdDatosPers',(req,res)=>{
    let query = "select * from DatosPersonales;";
    conexion.query(query,(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(rows);
        }
    })
})

routes.get('/registro',(req,res)=>{
    let query = "SELECT * FROM registros";
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

routes.get('/cons1',(req,res)=>{
    let query = "SELECT * FROM registros where id_reg = 10";
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

routes.get('/cons2',(req,res)=>{
    let query = "SELECT * FROM registros where id_user = 11";
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

routes.get('/cons3/:id',(req,res)=>{
    const {id}=req.params;
    let query = "select * from registros where id_user=?";
    conexion.query(query,[id],(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(rows);
        }
    })
    //res.send('Base de datos');
})

routes.get('/cons4',(req,res)=>{
    let query = "SELECT * FROM registros, contraseña where id_rol= 5";
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

routes.get('/reg1/:id',(req,res)=>{
    const {id}=req.params;
    let query = "Select * From RegistroDatos where id_regDatos=?";
    conexion.query(query,[id],(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(rows);
        }
    })
    //res.send('Base de datos');
})
//Eliminar
routes.delete('/reg2/:id',(req,res)=>{
    const {id}=req.params;
    let query = "Delete From RegistroDatos where id_regDatos=?";
    conexion.query(query,[id],(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send('Registro eliminado');
        }
    })
})

module.exports = routes;

