# Taller de Microserveis
## STEP 6 // COS D'UNA PETICIÓ (Request) HTTP (UPDATE)

### SERVEI PUT DE TASQUES



### Modificar el programa server.js

**Afegir la funció updateTasca":**

```JavaScript
function updateTasca(idTasca, tasca){
  var indexTrobat = llistatTasques.findIndex(x => x.id == idTasca);
  llistatTasques[indexTrobat] = tasca;
}

```

**Modificar el servei PUT per tal d'afegir la tasca":**

```JavaScript
app.put('/tasques/:tascaId', function (req, res) {
  updateTasca(req.params.tascaId,req.body);
  console.log(req.body)
  res.send(req.body)
})
```

### Realtzar el test amb Postman
https://www.getpostman.com
