# Taller de Microserveis
## STEP 2 // Creació d'una API rest

### Enrutament en EXPRESS JS
Com crear un servei que respongui a una crida http en un verb en concret utilitzant EXPRESSJS

```JavaScript
app.METHOD(PATH, HANDLER)
```

### Modificar el programa anterior i afegir el codi seguent

```JavaScript
app.get('/tasques', function (req, res) {
  res.send('Preparat per a enviar tasques')
})
```
```JavaScript
app.post('/tasques', function (req, res) {
  res.send('Preparat per a insertar una tasca')
})
```
```JavaScript
app.put('/tasques', function (req, res) {
  res.send('Preparat per a modificar una tasca')
})
```
```JavaScript
app.delete('/tasques', function (req, res) {
  res.send('Preparat per a esborrar una tasca')
})
```

### Realtzar el test amb Postman
https://www.getpostman.com
