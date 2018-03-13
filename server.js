const express = require('express')
const app = express()

var llistatTasques = require('./data.json');

function findTasquesByUserID(userId) {
  return llistatTasques.filter(x => x.propietari === userId);
}

app.get('/', (req, res) => res.send('Hola Món!'))


app.get('/tasques', function (req, res) {

  res.send(llistatTasques);
})

app.get('/tasques/:userId', function (req, res) {
  res.send(findTasquesByUserID(req.params.userId))
})

app.get('/tasques/:userId/:tascaId', function (req, res) {
  res.send('Preparat per a enviar la tasca ' + req.params.tascaId + ' del usuari ' + req.params.userId)
})

app.post('/tasques', function (req, res) {
  res.send('Preparat per a insertar una tasca')
})

app.put('/tasques/:tascaId', function (req, res) {
  res.send('Preparat per a modificar la tasca '+ req.params.tascaId)
})

app.delete('/tasques/:tascaId', function (req, res) {
  res.send('Preparat per a esborrar la tasca ' + req.params.tascaId)
})


app.listen(3000, () => console.log('ApiServer escoltant el port 3000!'))
