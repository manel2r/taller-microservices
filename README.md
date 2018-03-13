# Taller de Microserveis
## STEP 3 // Creació d'una API rest (II)

### Enrutament avançat en EXPRESS JS
https://expressjs.com/en/guide/routing.html

### Pas de paràmetres

Path de la ruta: /tasques/:userId
Request URL: http://localhost:3000/tasques/manel2r
req.params: { "userId": "manel2r"}

Normalment les accions de cerca d'un element, esborrat i modificació inclouen un paràmetre amb l'ID que es vol tractar.

### Modificar el programa anterior i afegir el codi seguent

```JavaScript
app.get('/tasques', function (req, res) {
  res.send('Preparat per a enviar totes les tasques')
})
```

```JavaScript
app.get('/tasques/:userId', function (req, res) {
  res.send('Preparat per a enviar les tasques del usuari ' + req.params.userId)
})
```
```JavaScript
app.get('/tasques/:userId/:tascaId', function (req, res) {
  res.send('Preparat per a enviar la tasca ' + req.params.tascaId + ' del usuari ' + req.params.userId)
})
```

```JavaScript
app.post('/tasques', function (req, res) {
  res.send('Preparat per a insertar una tasca')
})
```
```JavaScript
app.put('/tasques/:tascaId', function (req, res) {
  res.send('Preparat per a modificar la tasca '+ req.params.tascaId)
})
```
```JavaScript
app.delete('/tasques/:tascaId', function (req, res) {
  res.send('Preparat per a esborrar la tasca ' + req.params.tascaId)
})
```

### Realtzar el test amb Postman
https://www.getpostman.com
