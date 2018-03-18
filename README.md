# Taller de Microserveis
## STEP 10// Alta d'un objecte

### Substituïr la funció findTasquesByUserId per la següent:

```JavaScript
var findTasquesByUserId = function(db,userId, callback) {
    var collection = db.collection('tasques');
    var query = {}
    query.propietari = userId
    collection.find(query).toArray(function(err,tasques){
        if (err) throw err;
        callback(tasques);
    })
}
```

### Substituïr la ruta get de cerca tasques per userID per aquesta:

```JavaScript
app.get('/tasques/:userId', function (req, res) {

  findTasquesByUserId(db,req.params.userId, function(docs){
      res.send(docs);
  });

})
```

### Fem el test amb els postman localhost:3000/tasques/jaimerich amb un GET
