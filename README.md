# Taller de Microserveis
## STEP 2 // Creació d'una API rest

### Enrutament en EXPRESS JS
Entorn d'execució per a JavaScript.

Anteriorment, els desenvolupadors de JavaScript només podien utilitzar aquest llenguatge amb l'obligació d'utilitzar un navegador web ja sigui Firefox, Chrome, entre d'altres. El que ocasionava que es tingués una limitació a l'hora de realitzar cert tipus d'aplicacions.


[LINK a la pàgina de nodejs](https://www.nodejs.org)



```JavaScript
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hola Món!'))

app.listen(3000, () => console.log('ApiServer escoltant el port 3000!'))
```
Guardar i engegar el servidor:

```Shell
$ node server.js
```
Realitzar el test del servei utilitzant l'aplicació Postman:

https://www.getpostman.com

![Postman](https://github.com/manel2r/taller-microservices/blob/step1/resources/screenshot2.png)
