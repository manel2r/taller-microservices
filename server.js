const express = require('express')

var cors = require('cors')

const app = express()

app.use(cors())

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



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

var findTasquesByUserId = function(db,userId, callback) {
    var collection = db.collection('tasques');
    var query = {}
    query.propietari = userId
    collection.find(query).toArray(function(err,tasques){
        if (err) throw err;
        callback(tasques);
    })
}


var llistatTasques = require('./data.json');


var updateTasca = function(db, idTasca, tasca, callback) {
    var collection = db.collection('tasques')
    var query = {}
    query.id = idTasca
    // Insert a single document
    collection.updateOne(query, {$set: tasca}, function(err, r) {
            callback(r);
    })
}


var addTasca = function(db, tasca, callback) {
    var collection = db.collection('tasques')
    // Insert a single document
    collection.insertOne(tasca, function(err, r) {
      callback(r);
    })
}

var deleteTasca = function(db, idTasca, callback) {
    var collection = db.collection('tasques')
    var query = {}
    query.id = idTasca
    // Insert a single document
    collection.deleteOne(query, function(err, r) {
            callback(r);
    })
}

app.get('/', (req, res) => res.send('Hola Món!'))


app.get('/tasques', function (req, res) {
  findTasques(db, function(tasques){
      res.send(tasques);
  });

})

app.get('/tasques/:userId', function (req, res) {
  findTasquesByUserId(db,req.params.userId, function(tasques){
      res.send(tasques);
  });
})

app.get('/tasques/:userId/:tascaId', function (req, res) {
  res.send('Preparat per a enviar la tasca ' + req.params.tascaId + ' del usuari ' + req.params.userId)
})

app.post('/tasques', function (req, res) {
  addTasca(db,req.body, function(resultat){
      res.send(resultat);
  });
})

app.put('/tasques/:tascaId', function (req, res) {
  updateTasca(db,req.params.tascaId,req.body, function(resultat){
      res.send(resultat);
  });
})

app.delete('/tasques/:tascaId', function (req, res) {
  deleteTasca(db,req.params.tascaId, function(resultat){
      res.send(resultat);
  });

})


app.listen(3000, () => console.log('ApiServer escoltant el port 3000!'))
