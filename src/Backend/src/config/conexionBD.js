const mysql = require("mysql")
const conecta = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"alumno",
    port:"3306",
    database:"ProyectAten"
});
conecta.connect();
module.exports=conecta;