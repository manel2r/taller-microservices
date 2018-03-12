# Taller de Microserveis
## Arquitectura de Microserveis

### Què són els microserveis?
Els microserveis són serveis (Funcionalitat concreta instanciada en un servidor) petits i autònoms. Cadascun d’aquests serveis té una funció determinada.

*Els microserveis:*
1. Han de ser modelats sobre el domini de negoci que volem cobrir (Exemple un programa de gestió de tasques per a Alumnes).
2. Claus en models d'alta disponibilitat i cloud computing (Els servris es poden replicar per adaptar-se a demandes molt altes).
3. Oculten els detalls de la implememtació (Només solen exposar adreces http amb el verb http adequat)-> http://api.repcamp,com/products (GET)
4. Permeten la creació de programes complexos mitjatçant la combinació dels mateixos els quals poden ser propis o creats per un tercer (Exemple: Api de Facebook).

### Exemple Arquitectura basada en Microserveis
![Exemple Arquitectura Microserveis](https://github.com/manel2r/taller-microservices/blob/master/resources/example2.png)

1. Usuari demana informació de les películes noves que es projecten a la ciutat on es troba. GET/catalog/<<cityid>>
2. Aquesta informació es reclama a un servei web (No deixa de ser una funcionalitat allotjada a un servidor web o un servei cloud com AMAZON) en aquest cas a CINEMA CATALOG.
3. El servei cinema catalog accedeix a la BD que té al seu server i extreu la informació de les películes.
4. El servei cinema catalog reclama informació a un altre servei extern (Un altra funcionalitat allotjada possiblement a un altre server) per extreure quines son les "premieres" i poder enviar-li al usuari del catàleg que té quines son les "premiere//noves".
