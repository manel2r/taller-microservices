# Taller de Microserveis
## Arquitectura de Microserveis

### Què són els microserveis?
Els microserveis són serveis (Funcionalitat concreta instanciada en un servidor) petits i autònoms. Cadascun d’aquests serveis té una funció determinada.

*Els microserveis:*
1. Han de ser modelats sobre el domini de negoci que volem cobrir (Exemple un programa de gestió de tasques per a Alumnes).
2. Claus en models d'alta disponibilitat i cloud computing (Els servris es poden replicar per adaptar-se a demandes molt altes).
3. Oculten els detalls de la implememtació (Només solen exposar adreces http amb el verb http adequat)-> http://api.repcamp,com/products (GET)
4. Permeten la creació de programes complexos mitjatçant la combinació dels mateixos els quals poden ser propis o creats per un tercer (Exemple: Api de Facebook).

*Exemple arquitectura basada en Microserveis:*
![Exemple Arquitectura Microserveis](https://github.com/manel2r/taller-microservices/blob/master/resources/api.png)
