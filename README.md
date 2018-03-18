# Taller de Microserveis
## STEP 9// ACCËS A LA BD MONGODB
### Afegim l'usauri d'acés a la BD via mLab.
Usuari:Admin -> Password:Test
![Afegir_usuari](https://github.com/manel2r/taller-microservices/blob/step9/resources/adduser.gif)

### INSTAL.LEM EL MÔDUL MongoDb de NDEJS
```Shell
npm install mongodb --save

```
### Modifiquem Server.js i afegim la funció findTasques i la connexió a la base de dades

```JavaScript
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://admin:test@ds115749.mlab.com:15749/taskapp';
var db = null


MongoClient.connect(url, function(err, client){
    if (err) throw err;
    // console.log("it is working");
    // db.close();
    db = client.db('taskapp')

})

var findTasques = function(db, callback) {
    var collection = db.collection('tasques');

    collection.find().toArray(function(err,tasques){
        if (err) throw err;
        console.log(tasques);
        callback(tasques);
    })

}

```
### Fem el test amb els postman localhost:3000/tasques/ amb un GET
