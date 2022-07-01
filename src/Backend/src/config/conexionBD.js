const mysql = require("mysql")
const conecta = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'alumno',
    port:'3306',
    database:'ProyectAten'
});
conecta.connect((error)=>{
    if(error){
        conecta.log('Error...' + error);
    }else{
        console.log('Conectado...');
    }
})
module.exports=conecta;