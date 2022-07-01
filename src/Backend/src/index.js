const express = require('express');
const app = express();
const port = ( process.env.port || 4000);
app.use(express.json())
app.set('port', port);
app.listen(app.get('port'),(error)=>{
    if(error)
    {
        console.log('Errror al iniciar el servicio'+ error)
    }else{
        console.log('Servidor iniciado en el puerto: '+port)
    }
})

app.use('/api',require('./rutas/rutas.js'))