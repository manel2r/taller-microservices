# Taller de Microserveis
## STEP 7 // DELETE

### SERVEI DELETE DE TASQUES

### Modificar el programa server.js

**Afegir la funció deleteTasca":**

```JavaScript
function deleteTasca(idTasca) {
  var indexTrobat = llistatTasques.findIndex(x => x.id == idTasca)
  llistatTasques.splice(indexTrobat,1)
}

```

**Modificar el servei DELETE per tal d'esborrar la tasca":**

```JavaScript
app.delete('/tasques/:tascaId', function (req, res) {
  deleteTasca(req.params.tascaId)
  res.send('Tasca :' + req.params.tascaId +' esborrada')
})
```

### Realtzar el test amb Postman
https://www.getpostman.com
