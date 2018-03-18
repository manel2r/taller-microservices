# Taller de Microserveis
## STEP 9// ACCËS A LA BD MONGODB
### Afegim l'usauri d'acés a la BD via mLab.
Usuari:Admin -> Password:Test
![Afegir_usuari](https://github.com/manel2r/taller-microservices/blob/step9/resources/adduser.gif)

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

Després de validar l'account (Accedint la vostre correu i polsant al link del correu que us han enviat).
#### Crear un deployment nou (Màquina a un servidor al núbol amb MONGODB)
Triem AMAZON com a servei cloud i SANDBOX (Pla gratuït)

![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step3.png)

![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step4.png)
Posem el nom de la base de dades (**posem -> taskapp**)
![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step5.png)
Ens apareixerà un deployment amb la base de dades que acaben de crear
![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step6.png)
#### Creem la col.leció tasques
Si polsem sobre la instància ens portarà a la pantalla de gestió de la BD
![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step7.png)
Polsem sobre add collection i creem la col.lecció -> **tasques** (IMPORTANT MiNÚSCULES).
![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step8.png)
Finalment tenin la colel.lecció creada de "tasques".
![Mlab](https://github.com/manel2r/taller-microservices/blob/step8/resources/step9.png)
#### Afegim una a una les tasques del arxiu data.json.

```JavaScript
{ "id":"01122", "descripcio":"Trucar a SGM SL per parlar de la nova tarifa", "propietari":"meixarch", "estat":0}
{ "id":"01124", "descripcio":"Re-definir tasques obertes", "propietari":"jaimerich", "estat":0}
{ "id":"01125", "descripcio":"Cercar info sobre els productes competència", "propietari":"jaimenrich", "estat":1}
{ "id":"01126", "descripcio":"Tancar oprtunitats obertes", "propietari":"jaimerich", "estat":0}
{ "id":"01127", "descripcio":"Enviar correu amb aclaracions de la comanda perduda a Ramom Bassols de Amer", "propietari":"pvalmanya", "estat":0}
```
![Afegir_tasca](https://github.com/manel2r/taller-microservices/blob/step8/resources/savedoc.gif)
## Fet això anem a modificar el nostre server per treballar amb la BD NOSQL MongoDb remota.
