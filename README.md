# Taller de Microserveis
## STEP 13// Eliminació d'un objecte a MongoDB

### Substituïr la funció deleteTasca per la següent:

```JavaScript
var deleteTasca = function(db, idTasca, callback) {
    var collection = db.collection('tasques')
    var query = {}
    query.id = idTasca
    // Insert a single document
    collection.deleteOne(query, function(err, r) {
            callback(r);
    })
}
```

### Substituïr la ruta delete per aquesta:

```JavaScript
app.delete('/tasques/:tascaId', function (req, res) {
  deleteTasca(db,req.params.tascaId, function(resultat){
      res.send(resultat);
  });
})
```

### Fem el test amb els postman localhost:3000/tasques/:codi amb un delete
