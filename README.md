# Taller de Microservices
## Arquitectura de Microservices

### Què són els microserveis?
Els microserveis són serveis (Funcionalitat concreta instanciada en un servidor) petits i autònoms que treballen plegats. Cadascun d’aquests serveis té una funció determinada. Una aplicació està composada per uns quants d’aquests serveis, que poden ser propis o creats per altres equips de dins o de fora de l’organització.

*Els microserveis:*
1. Han de ser modelats sobre el domini de negoci que volem cobrir (Exemple un programa de gestió de tasques per a Alumnes).
2. Claus en models d'alta disponibilitat i cloud computing (Els servris es poden replicar per adaptar-se a demandes molt altes).
3. Oculten els detalls de la implememtació (Només solen exposar adreces http amb el verb http adequat)-> http://api.repcamp,com/products (GET)
4. Permeten la creació de programes complexos mitjatçant la combinació dels mateixos.
