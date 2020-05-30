/* Desafio 19
Retorne o total de voos em que o campo natureza possui o valor Doméstica. */

use dataFlights;
db.voos.find({$and: [{"natureza": "Doméstica"}, {"natureza": {$exists: true}}]}).count();
