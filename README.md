# Taller de Microserveis
## STEP 15// CORS - Cross-Origin Resource Sharing i creació de consumidors de serveis

Intercanvi de recursos d'origen creuat o CORS (Cross-origin resource sharing, en les seves sigles en anglès), és un mecanisme que permet que uns serveis webs instal.lats en un domini concret (Exemple: httpp://api.apptasques.com) puguin ser sol·licitats des d'un domini diferent que allotgi una aplicació que consumeixi el servei.


## Realitzem els canvis a l'app per tal de que sigui accedida desde CORS

```Shell
$ npm install cors --save
```

```JavaScript
var cors = require('cors')
var app = express() // COMPTE AIXÒ JA HO TENIM!!!
app.use(cors())
```

Amb aquest canvis ja pot ser accedit desde un altra aplicació desde un domini diferent.

## Servei de contingut static amb express


Per a la publicació de fitxers estàtics com ara imatges, fitxers CSS i JavaScript, utilitzeu la funció express.static integrada de middleware en Express.

L'argument arrel especifica el directori arrel del qual serveix els arxius estàtics.

per exemple, utilitzeu el codi següent per a servir imatges, fitxers CSS i fitxers de JavaScript en un directori anomenat públic:

```JavaScript
app.use(express.static('public'))
```
### Crear el fitxer client.js
```JavaScript
const express = require('express')
const app = express()
app.use(express.static('public'))
app.listen(3200, () => console.log('Client escoltant el port 3200!'))
```
### Crear el directori "public" al arrel,crear un arxiu index.html dintre de "public"
