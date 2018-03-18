# Taller de Microserveis
## STEP 10// Cerca sobre col.leccions mongodb
### JSON QUERY

Per tal de realitzar una query en mongodb s'ha de crear un objecte json amb les propietats per les que vulguem cercar dintre d'una col.lecció.

**Exemple**
Si volem cercar totes les tasques de jaimerich haurem de passar-li la query en json.

```JavaScript
{"propietari":"jaimerich"}
```
Això seria l'equivalent en JavaScript a:
```JavaScript
var query = {}
query.propietari = userId
```
Ja que com vàrem dir el JSON no deixa de ser una altra notació per definir objetes JavaScript.

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
