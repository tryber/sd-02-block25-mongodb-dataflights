/* Desafio 16
Retorne o total de voos em que o país de origem não seja BRASIL. */

use dataFlights;
db.voos.find({$and: [{"aeroportoOrigem.pais": "BRASIL"}]}).count();
