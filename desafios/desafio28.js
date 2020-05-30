/* Desafio 28
Remova todos os voos da empresa GOL em que a quantidade de passageiros pagos esteja entre 5 e 10,
incluindo os casos em que a quantidade é 5 e 10. Informe a quantidade de documentos removidos. */

use dataFlights;
db.voos.find({ $and: [{"empresa.nome": "GOL"}, {"passageiros.pagos": {$gte: 5}}, {"passageiros.pagos": {$lte: 10}}]}).count();
db.voos.deleteMany({ $and: [{"empresa.nome": "GOL"}, {"passageiros.pagos": {$gte: 5}}, {"passageiros.pagos": {$lte: 10}}]});
// { "acknowledged" : true, "deletedCount" : 74 }
