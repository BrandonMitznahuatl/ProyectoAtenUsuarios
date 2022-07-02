//const { query } = require('express');

const routes = require('express').Router();

routes.get('/',(req,res)=>{
    res.send('Ruta Principal');
});

const conexion = require("../config/conexionBD")

routes.get('/bdregistro',(req,res)=>{
    let query = "SELECT * FROM RegistroDatos";
    conexion.query(query,(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(rows);
        }
    })
   
})

//Get registro
routes.get('/bdregistro1/:id',(req,res)=>{
    const {id}=req.params;
    let query = "SELECT * FROM RegistroDatos where id_regDatos=?";
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



//Get seguimeinto del problema
routes.get('/bdseguimiento',(req,res)=>{
    let query = "SELECT * FROM segproblema";
    conexion.query(query,(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(rows);
        }
    })
})
//Get seguimeinto del problema folio
routes.get('/bdseguimiento1',(req,res)=>{
    let query = "SELECT * FROM segproblema WHERE Folio_problema=0110";
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
routes.get('/bd/acceso/:id', (req, res) =>{
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
routes.delete('/bd/acceso/:id', (req, res) =>{
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

//  LOGIN ACCESO - POST (HERNÁNDEZ PACHECO ANDREA ALIN)
routes.post('/bd/acceso/Insertar/', (req, res) => {
    const {id_Acceso, id_regDatos, id_rol, Usuario,Contraseña}=req.body
    let sql = `insert into Acceso(id_Acceso, id_regDatos, id_rol, Usuario,Contraseña) values ( '${id_Acceso}','${id_regDatos}','${id_rol}','${Usuario}','${Contraseña}')`;
    conexion.query(sql, (error, rows)=> {
        if(error) throw error
           else{
            res.json('Dato insertado correctamente');
           }
})
});

//  LOGIN ACCESO - PUT (HERNÁNDEZ PACHECO ANDREA ALIN)
routes.put('/bd/acceso/Modificar/', (req, res) => {
    const {Usuario, Contraseña}=req.body
    let sql = `UPDATE Acceso SET  Contraseña = '${Contraseña}' WHERE (Usuario = '${Usuario}')`; 
    conexion.query(sql, (error, rows)=> {
        if(error) throw error
           else{
            res.json('Dato modificado correctamente');
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


//------------------------------RUTAS CRUD (CREATE, READ, UPDATE, DELETE)------------------------------------
//Registro de Datos - Reyes Mitznahuatl Brandon Jesus

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

//Insertar
routes.post('/reg3/', (req, res) => {
    const {id_regDatos, Nombre, ApellPat, ApellMat, Correo, Edad, Numero_Tel, Sexo}=req.body
    let sql = `insert into RegistroDatos(id_regDatos, Nombre, ApellPat, ApellMat,Correo, Edad,Numero_Tel,Sexo) values 
    ( '${id_regDatos}','${Nombre}','${ApellPat}','${ApellMat}','${Correo}','${Edad}','${Numero_Tel}','${Sexo}')`;
    conexion.query(sql, (error, rows)=> {
        if(error) throw error
           else{
            res.json('Dato insertado correctamente');
           }
   })
});

//Modificar
routes.put('/reg4/', (req, res) => {
    const {id_regDatos, Correo}=req.body
    let sql = `UPDATE RegistroDatos SET  Correo = '${Correo}' WHERE (id_regDatos = '${id_regDatos}')`; 
    conexion.query(sql, (error, rows)=> {
        if(error) throw error
           else{
            res.json('Dato modificado correctamente');
           }
    })
});

//------------------------------RUTAS CRUD (CREATE, READ, UPDATE, DELETE)------------------------------------

//  SEGUIMIENTO PROBLEMA - GET (AVIÑA VELARDE DANIELA MICHELLE)
routes.get('/seguimiento/:id',(req,res)=>{
    const {id}=req.params;
    let query = "SELECT * FROM segproblema WHERE Folio_problema=?";
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

//  SEGUIMIENTO PROBLEMA - DELETE (AVIÑA VELARDE DANIELA MICHELLE)
routes.delete('/seguimiento/:id',(req,res)=>{
    const {id}=req.params;
    let query = "DELETE FROM segproblema WHERE Folio_problema=?";
    conexion.query(query,[id],(error, rows)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send('Registro eliminado correctamente');
        }
    })
})

//  SEGUIMIENTO PROBLEMA - POST (AVIÑA VELARDE DANIELA MICHELLE)
routes.post('/seguimiento/', (req, res) => {
    const { Nombre, Apellidos, Folio_problema, Correo, Número_telefónico, Tipo_de_problema, Especifique_problema, Status_problema}=req.body
    let sql = `insert into segproblema (Nombre, Apellidos, Folio_problema, Correo, Número_telefónico, Tipo_de_problema, Especifique_problema, Status_problema) values
    ('${Nombre}','${Apellidos}','${Folio_problema}','${Correo}','${Número_telefónico}','${Tipo_de_problema}','${Especifique_problema}','${Status_problema}')`;
    conexion.query(sql, (error, rows)=> {
        if(error) throw error
           else{
            res.json('Registro insertado correctamente');
           }
   })
});

//  SEGUIMIENTO PROBLEMA - PUT (AVIÑA VELARDE DANIELA MICHELLE)
routes.put('/seguimiento/', (req, res) => {
    const {Status_problema, Folio_problema}=req.body
    let sql = `UPDATE segproblema SET  Status_problema = '${Status_problema}' WHERE (Folio_problema = '${Folio_problema}')`; 
    conexion.query(sql, (error, rows)=> {
        if(error) throw error
           else{
            res.json('Registro modificado correctamente');
           }
    })
});


//Brandon Jair
//Get solucion del problema
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

    
});

//REGISTRO PROBLEMA [DELETE]: VILLAGRANA
routes.delete('/bdsolprob/:id', (req, res) =>{
    const {id}=req.params;
    let query = "DELETE FROM solusprob where id_soluprob=?";
    conexion.query(query,[id],(error,rows)=>{
        if(error) 
        {
            console.error(error);
        }
           else{
            res.send("Datos eliminados de forma correcta");
           }
    })
    
});

//REGISTRO PROBLEMA [POST]: VILLAGRANA

routes.post('/bdsoluprob/', (req, res) => {
    const {id_soluprob, id_Acceso, Nombre, ApellPat, ApellMat, correo, problem, NumTelefono, tipo, fecha}=req.body
    let sql = `insert into solusprob(id_soluprob, id_Acceso, Nombre, ApellPat, ApellMat, correo, problem, NumTelefono, tipo, fecha) values
    ('${id_soluprob}','${id_Acceso}','${Nombre}','${ApellPat}','${ApellMat}','${correo}','${problem}','${NumTelefono}','${tipo}','${fecha}')`;
    conexion.query(sql, (error, rows)=> {
        if(error) throw error
           else{
            res.json('Registro insertado correctamente');
           }
   })
});
//REGISTRO PROBLEMA [PUT]: VILLAGRANA
routes.put('/bdsoluprob/', (req, res) => {
    const {problem, id_soluprob}=req.body
    let sql = `UPDATE solusprob SET  problem = '${problem}' WHERE (id_soluprob = '${id_soluprob}')`; 
    conexion.query(sql, (error, rows)=> {
        if(error) throw error
           else{
            res.json('Registro modificado correctamente');
           }
    })
});
module.exports = routes;