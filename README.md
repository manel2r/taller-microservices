# Taller de Microserveis
## STEP 5 // COS D'UNA PETICIÓ (Request) HTTP (INSERT)

### El cos d'un petició HTTP i tractament en ExpresJs

### Cos d'una petició HTTP

![Exemple Cos d'una petició](https://github.com/manel2r/taller-microservices/blob/step5/resources/screenshot.png)

#### Un sol objecte -> Típic enviament d'un put genèric o un post
```JavaScript
  { "id":"01129", "descripcio":"Realitzar demo de producte TecnoCampus", "propietari":"pvalmanya", "estat":0}
```
### SERVEI POST DE TASQUES

### Instal.lar les següents dependències-> Executar:

```Shell
npm install body-parser --save
npm install multer --save
```
### Afegir les dependències al programa server.js

```JavaScript
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
```

### Modificar el programa server.js

**Afegir la funció addTasca":**

```JavaScript
function addTasca(tasca) {
  llistatTasques.push(tasca);
}

```

**Modificar el servei POST per tal d'afegir la tasca":**

```JavaScript
app.post('/tasques', function (req, res) {
  addTasca(req.body)
  console.log(req.body)
  res.send(req.body)
})
```

### Realtzar el test amb Postman
https://www.getpostman.com
