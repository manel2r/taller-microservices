const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hola Món!'))


app.get('/tasques', function (req, res) {
  res.send('Preparat per a enviar totes les tasques')
})

app.get('/tasques/:userId', function (req, res) {
  res.send('Preparat per a enviar les tasques del usuari' + req.params.userId)
})

app.get('/tasques/:userId/:tascaId', function (req, res) {
  res.send('Preparat per a enviar la tasca ' + req.params.tascaId + ' del usuari ' + req.params.userId)
})

app.post('/tasques', function (req, res) {
  res.send('Preparat per a insertar una tasca')
})

app.put('/tasques/:tascaID', function (req, res) {
  res.send('Preparat per a modificar la tasca '+ request.params.tascaId)
})

app.delete('/tasques/tascaId', function (req, res) {
  res.send('Preparat per a esborrar la tasca ' + request.params.tascaId)
})


app.listen(3000, () => console.log('ApiServer escoltant el port 3000!'))
