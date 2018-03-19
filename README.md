# Taller de Microserveis
## STEP 15// CORS - Cross-Origin Resource Sharing

Intercanvi de recursos d'origen creuat o CORS (Cross-origin resource sharing, en les seves sigles en anglès), és un mecanisme que permet que uns serveis webs instal.lats en un domini concret (Exemple: httpp://api.apptasques.com) puguin ser sol·licitats des d'un domini diferent que allotgi una aplicació que consumeixi el servei.

```Shell
$ npm install cors
```

```JavaScript
var cors = require('cors')
var app = express() // COMPTE AIXÒ JA HO TENIM!!!
app.use(cors())
```

http://mongodb.github.io/node-mongodb-native/3.0/tutorials/crud/

Per als que vulguin aprendre més la companyia rera mongodb ofereix una sèrie de cursos gratuïts a:

https://university.mongodb.com

## Activitats adicionals (Opcionals)

* Crear un servei per a la inserció multiple de documents -> POST /tasques/bulk
* Crear un servei per a la borrat multiple de documents -> PUT /tasques/bulk

Podeu trobar la informació a:

http://mongodb.github.io/node-mongodb-native/3.0/tutorials/crud/
