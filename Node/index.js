const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
res.send('¡Hola, mundo! \n Saludos, Lilly' );
});

app.listen(port, () => {
  console.log("Servidor escuchando en http://localhost:${port}");
});