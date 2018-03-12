# Taller de Microserveis
## STEP 1 // NODEJS

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




```javascript
{
    "_id" : "57037ae071df3738ecf2b4d7",
    "companyId" : 102,
    "name" : "Owen Convey",
    "age" : 29,
    "location" : "Barcelona",

  }
```

#### DELETE
HTTP DELETE http://www.appdomain.com/users/57037ae071df3738ecf2b4d7

Per esborrar un registre



### Codis de retorn http

* Si OK-> 200 (OK)
* Si OK-> 201 (OK-> Creat els registres)
* Si KO-> 404 (Not / Found No troba el servei)
* Si KO-> 400 (Bad request // No ho estem cridant bé i falla)
* Si KO-> 401 (Unauthorized//No autoritzat)
* Si KO-> 403 (Unauthorized // No permet l'accés)
* Si KO-> 500 (Internal Error // Error del servei)
...
