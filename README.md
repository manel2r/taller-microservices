# Taller de Microserveis
## STEP 5 // COS D'UNA PETICIÓ (Request) HTTP (INSERTS I UPDATES)

### El cos d'un petició HTTP i tractament en ExpresJs

### Cos d'una petició HTTP

![Exemple Cos d'una petició](https://github.com/manel2r/taller-microservices/blob/step5/resources/screenshot.png)

#### Un sol objecte -> Típic enviament d'un put genèric o un post
```JavaScript
{ "id":"jaimerich", "nom":"Joan", "cognom":"Aimerich", "edat":42,"mail":"jaimerich@gmail.com"}
```
#### Array d'objectes -> Típica resposta d'un get genèric contra un recurs
```JavaScript
[
    { "id":"jaimerich", "nom":"Joan", "cognom":"Aimerich", "edat":42,"mail":"jaimerich@gmail.com"},
    { "id":"meixarch", "nom":"Manel", "cognom":"Eixarch", "edat":35,"mail":"meixarch@gmail.com"},
    { "id":"pvalmanya", "nom":"Pere", "cognom":"Valmanya", "edat":53,"mail":"pvalmanya@gmail.com"},
    { "id":"tperez", "nom":"Tomás", "cognom":"Pérez", "edat":36,"mail":"tperez@gmail.com"},

]
```

### CREACIÓ D'OBJECTES JAVASCRIPT DE TEST PER ALS NOSTRES SERVEIS
#### Objecte Tasca
```JavaScript
  { "id":"01122", "descripcio":"Trucar a SGM SL per parlar de la nova tarifa", "propietari":"manel2r", "estat":0}
```

### Creació del fitxer data.json amb les següents dades:

```JavaScript
[
  { "id":"01122", "descripcio":"Trucar a SGM SL per parlar de la nova tarifa", "propietari":"meixarch", "estat":0},
  { "id":"01124", "descripcio":"Re-definir tasques obertes", "propietari":"jaimerich", "estat":0},
  { "id":"01125", "descripcio":"Cercar info sobre els productes competència", "propietari":"jaimenrich", "estat":1},
  { "id":"01126", "descripcio":"Tancar oprtunitats obertes", "propietari":"jaimerich", "estat":0},
  { "id":"01127", "descripcio":"Enviar correu amb aclaracions de la comanda perduda a Ramom Bassols de Amer", "propietari":"pvalmanya", "estat":0}
]

```
### SERVEIS GET DE TASQUES
### Modificar el programa server.js

**Afegir sota "const app = express()":**

```JavaScript
var llistatTasques = require('./data.json');

function findTasquesByUserID(userId) {
  return llistatTasques.filter(x => x.propietari === userId);
}

```
Això ens carregarà les dades del data.json a la variable llistaTasques.
La funció FindTasquesByUserID retorna l'array de tasques que pertany a un usuari

**Modificar els 2 serveis GET de tasques per deixar-los de la següent forma**

```JavaScript

app.get('/tasques', function (req, res) {
  res.send(llistatTasques);
})

app.get('/tasques/:userId', function (req, res) {
  res.send(findTasquesByUserID(req.params.userId))
})

```

### Realtzar el test amb Postman
https://www.getpostman.com
