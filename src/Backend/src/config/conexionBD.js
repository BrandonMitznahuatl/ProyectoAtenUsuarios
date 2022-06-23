const mysql = require("mysql")
const conecta = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sasa",
    password:"root",
    port:"3306",
    database:"proyectaten"
});
conecta.connect();
module.exports=conecta;