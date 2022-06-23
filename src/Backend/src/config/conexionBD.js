const mysql = require("mysql")
const conecta = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sasa",
    port:"3306",
    database:"ProyectAten"
});
conecta.connect();
module.exports=conecta;