const express = require('express');
const app = express();
const port = ( process.env.port || 4000);
app.use(express.json())
app.set('port', port);
app.listen(app.get('port'),(error)=>{
    if(error)
    {
        console.log('Error al iniciar el servidor '+ error)
    }else{
        console.log('Servidor iniciado '+port)
    }
})


app.use('/conex',require('./rutas/rutas.js'))
