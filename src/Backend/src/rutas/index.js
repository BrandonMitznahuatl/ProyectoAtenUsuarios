const express = require('express');
const port = ( process.env.port || 4200);
const app = express();
app.set('port', port);
app.listen(app.get('port'));
console.log('Servidor');

