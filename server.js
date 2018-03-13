const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hola Món!'))


app.get('/tasques', function (req, res) {
  res.send('Preparat per a enviar tasques')
})

app.post('/tasques', function (req, res) {
  res.send('Preparat per a insertar una tasca')
})

app.put('/tasques', function (req, res) {
  res.send('Preparat per a modificar una tasca')
})

app.delete('/tasques', function (req, res) {
  res.send('Preparat per a esborrar una tasca')
})


app.listen(3000, () => console.log('ApiServer escoltant el port 3000!'))
