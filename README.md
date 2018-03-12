# Taller de Microserveis
## NODEJS // EXPRESSJS

### NODEJS
Entorn d'execució per a JavaScript.

Anteriorment, els desenvolupadors de JavaScript només podien utilitzar aquest llenguatge amb l'obligació d'utilitzar un navegador web ja sigui Firefox, Chrome, entre d'altres. El que ocasionava que es tingués una limitació a l'hora de realitzar cert tipus d'aplicacions.

NODE.JS trenca amb les limitacions dels navegadors i amb l'ajuda de frameworks com Express permet crear servidors HTTP lleugers ideals per a Microserveis Rest.

Característiques :

1. Desenvolupament en JavaScript
2. Basat en el motor V8 de Chrome
3. Operacions d'E / S sense bloquejos: Node està pensat perquè les operacions d'entrada i sortida siguin sense bloquejos, per exemple: un servidor web realitza una petició única i espera una resposta.
4. Orientat a esdeveniments (Peticions Http)
5. Lleuger i Eficient

[LINK a la pàgina de nodejs](https://www.nodejs.org)

**PER TAL DE REALITZAR LA PRÀCTICA S'HAURÀ DE DESCARREGAR I INTAL.LAR EN LOCAL EL NODEJS**

### EXPRESS JS
Framework web (Minimalista) i extremadament ràpid per a desenvolupament web sobre NODEJS.

[LINK a la pàgina d'Expressjs](https://expressjs.com/)

## STEP 1 // Incialització del projecte NODEJS // EXPRESS
```Shell
$ mkdir apiserver
$ cd apiserver
$ npm init
 --> entry point: (server.js)
$ npm install express --save
```
## STEP 1 // Hola Món NodeJS

Crear el fitxer "server.js" i afegir el codi següent:

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
