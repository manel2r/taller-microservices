# Taller de Microserveis
## STEP 10// Alta d'un objecte

### Substituïr la funció addTasca per la següent:

```JavaScript
var addTasca = function(db, tasca, callback) {
    var collection = db.collection('tasques')
    // Insert a single document
    collection.insertOne(tasca, function(err, r) {
      callback(r);
    })
}
```

### Substituïr la ruta post per aquesta:

```JavaScript
app.post('/tasques', function (req, res) {
  addTasca(db,req.body, function(resultat){
      res.send(resultat);
  });
})
```

### Fem el test amb els postman localhost:3000/tasques/ amb un POST posant al body un objecte (Si havíeu guardat la col.lecció tindreu el body ben informat).
