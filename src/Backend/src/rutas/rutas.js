//const { query } = require('express');

const routes = require('express').Router();

routes.get('/',(req,res)=>{
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

//mi cuenta
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
})

//------------------------------RUTAS CRUD (CREATE, READ, UPDATE, DELETE)------------------------------------

//  LOGIN ACCESO - GET (ANDREA ALIN HERNANDEZ PACHECO)
routes.get('/bd/:id', (req, res) =>{
    const {id}=req.params;
    let query = "select * from Acceso where Id_regDatos=?";
    conexion.query(query,[id],(error,rows)=>{
        if(error) 
        {
            console.error(error);
        }
           else{
            res.send(rows);
           }
    })
    
});
//  LOGIN ACCESO - DELETE (HERNÁNDEZ PACHECO ANDREA ALIN)
routes.delete('/bd/:id', (req, res) =>{
    const {id}=req.params;
    let query = "delete from Acceso where id_rol=?";
    conexion.query(query,[id],(error,rows)=>{
        if(error)
        {
            console.error(error);
        }
           else{
            res.send('Elemento eliminado');
           }
        
    })
});

//  LOGIN ROL - GET (ANDREA ALIN HERNANDEZ PACHECO)
routes.get('/bd/rol/:id', (req, res) =>{
    const {id}=req.params;
    let query = "select * from Rol where id_rol=?";
    conexion.query(query,[id],(error,rows)=>{
        if(error) 
        {
            console.error(error);
        }
           else{
            res.send(rows);
           }
    })
    
});

//  LOGIN ROL - DELETE (HERNÁNDEZ PACHECO ANDREA ALIN)
routes.delete('/bd/rol/:id', (req, res) =>{
    const {id}=req.params;
    let query = "delete from Rol where id_rol=?";
    conexion.query(query,[id],(error,rows)=>{
        if(error)
        {
            console.error(error);
        }
           else{
            res.send('Elemento eliminado');
           }
        
    })
});

//  LOGIN ROL - POST (HERNÁNDEZ PACHECO ANDREA ALIN)
routes.post('/bd/rol/Insertar/', (req, res) => {
    const {id_rol, Descripcion}=req.body
    let sql = `insert into Rol(id_rol, descripcion) values ( '${id_rol}','${Descripcion}')`;
    conexion.query(sql, (error, rows)=> {
        if(error) throw error
           else{
            res.json('Dato insertado correctamente');
           }
})
});

//  LOGIN ROL - PUT (HERNÁNDEZ PACHECO ANDREA ALIN)
routes.put('/bd/rol/Modificar/', (req, res) => {
    const {id_rol, Descripcion}=req.body
    let sql = `UPDATE Rol SET descripcion = '${Descripcion}' WHERE (id_rol = '${id_rol}')`; 
    conexion.query(sql, (error, rows)=> {
        if(error) throw error
           else{
            res.json('Dato modificado correctamente');
           }
})
});










module.exports = routes;

