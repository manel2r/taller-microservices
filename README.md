# Taller de Microserveis
## STEP 8 // BASES DE DADES NO-SQL
Una base de dades NoSQL proporciona un mecanisme per emmagatzemar i recuperar dades que es modela mitjançant sistemes de clau-valor (diccionari- REDIS), document (JSON-MONGODB), etc.Aquest canvi de model està motivat per la simplicitat de disseny, l'escalabilitat horitzontal i un major control de la disponibilitat. (Via viquipèdia)


### BASE DE DADES ORIENTADA A DOCUMENT (JSON) - MONGODB
La base de dades gestiona col·leccions de documents amb format de dades JSON. Això permet que moltes aplicacions basades en JavaScript puguin gestionar les dades de manera més natural (indexació, consulta, inserció, etc).(Via viquipèdia)

https://www.mongodb.com

Es basa en el concepte de col.leccions de documents. Una base de daes NOSQL basada en Mongo está formada per Col.lecions (Per exemple col.leció "usuaris" i cole.lecció "tasques") que contenen documents de JSON.

**Document Usuari**:
```JavaScript
{ "id":"jaimerich",
  "nom":"Joan",
  "cognom":"Aimerich",
  "edat":42,
  "mail":"jaimerich@gmail.com"}
```
**Document Tasca:**
```JavaScript
{"id":"01122",
"descripcio":"Trucar a SGM SL per parlar de la nova tarifa",
 "propietari":"manel2r", "estat":0
}

```
Una base de dades NOSQL no té el concepte de modelat de dades (DDL). Pots guardar una col.lecció documents (JSON) amb diferents estructures.

**Col.lecció Usuaris:**
```JavaScript
[{"id":"01122","descripcio":"Trucar a SGM SL per parlar de la nova tarifa",
 "propietari":"manel2r", "estat":0
},
{"id":"01122","descripcio":"Trucar a SGM SL per parlar de la nova tarifa",
 "propietari":"manel2r", "estat":0, "client":"SGM, SL", "assignada":"jaimerich"
}
]
```

### MONGO DB

Enllaç a la versió community de Mongo DB:
https://www.mongodb.com/download-center#community

En el nostre cas obrirem una instàcia gratuita al núbol a:
https://mlab.com
#### Accedir a MLAB i crear un compte personal
![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step1.png)

![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step2.png)

#### Crear un deployment nou (Màquina a un servidor al núbol amb MONGODB)
![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step3.png)

![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step4.png)

![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step5.png)

![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step6.png)

![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step7.png)

![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step8.png)

![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step9.png)

### STEP 8
a
Alta a mlab

To connect using the mongo shell:
mongo ds115749.mlab.com:15749/taskapp -u <dbuser> -p <dbpassword>
To connect using a driver via the standard MongoDB URI (what's this?):



**Afegir la funció deleteTasca":**

```JavaScript
function deleteTasca(idTasca) {
  var indexTrobat = llistatTasques.findIndex(x => x.id == idTasca)
  llistatTasques.splice(indexTrobat,1)
}

```

**Modificar el servei DELETE per tal d'esborrar la tasca":**

```JavaScript
app.delete('/tasques/:tascaId', function (req, res) {
  deleteTasca(req.params.tascaId)
  res.send('Tasca :' + req.params.tascaId +' esborrada')
})
```

### Realtzar el test amb Postman
https://www.getpostman.com
