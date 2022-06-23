const express = require('express');
const port = ( process.env.port || 4000);
const app = express();
app.set('port', port);
app.listen(app.get('port'));
console.log('Hola soy servidor');

app.use('/conex',require('./rutas/rutas.js'))
