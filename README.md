# Taller de Microserveis
## STEP 12// Modificació d'un objecte a MongoDB

### Substituïr la funció updateTasca per la següent:

```JavaScript
var updateTasca = function(db, idTasca, tasca, callback) {
    var collection = db.collection('tasques')
    var query = {}
    query.id = idTasca
    // Insert a single document
    collection.updateOne(query, {$set: tasca}, function(err, r) {
            callback(r);
    })
}
```

### Substituïr la ruta put per aquesta:

```JavaScript
app.put('/tasques/:tascaId', function (req, res) {
  updateTasca(db,req.params.tascaId,req.body, function(resultat){
      res.send(resultat);
  });
})
```

### Fem el test amb els postman localhost:3000/tasques/:codi amb un PUT posant al body un objecte amb dades parcials {"descripcio":"Visita Kriter Software"}.
