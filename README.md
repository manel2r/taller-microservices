# Taller de Microserveis
## STEP 4 // JSON // Javascript Object Notation

### JSON
JSON (acrònim de JavaScript Object Notation) és un estàndard obert basat en text dissenyat per a intercanvi de dades llegible per humans. Deriva del llenguatge script JavaScript, per a representar estructures de dades simples i llistes associatives, anomenades objectes. (Via viquipèdia)

### Exemples de JSON

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


Path de la ruta: /tasques/:userId
Request URL: http://localhost:3000/tasques/manel2r
req.params: { "userId": "manel2r"}

Normalment les accions de cerca d'un element, esborrat i modificació inclouen un paràmetre amb l'ID que es vol tractar.

### Modificar el programa anterior i afegir el codi seguent

```JavaScript
app.get('/tasques', function (req, res) {
  res.send('Preparat per a enviar totes les tasques')
})
```

```JavaScript
app.get('/tasques/:userId', function (req, res) {
  res.send('Preparat per a enviar les tasques del usuari ' + req.params.userId)
})
```
```JavaScript
app.get('/tasques/:userId/:tascaId', function (req, res) {
  res.send('Preparat per a enviar la tasca ' + req.params.tascaId + ' del usuari ' + req.params.userId)
})
```

```JavaScript
app.post('/tasques', function (req, res) {
  res.send('Preparat per a insertar una tasca')
})
```
```JavaScript
app.put('/tasques/:tascaId', function (req, res) {
  res.send('Preparat per a modificar la tasca '+ req.params.tascaId)
})
```
```JavaScript
app.delete('/tasques/:tascaId', function (req, res) {
  res.send('Preparat per a esborrar la tasca ' + req.params.tascaId)
})
```

### Realtzar el test amb Postman
https://www.getpostman.com
