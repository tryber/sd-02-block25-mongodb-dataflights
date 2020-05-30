/* Desafio 27
Remova todos os voos da empresa AZUL em que a quantidade de combustível seja menor do que 400.
Informe a quantidade de documentos removidos. */

use dataFlights;
db.voos.find({ $and: [{"empresa.nome": "AZUL"}, {"litrosCombustivel": {$lt: 400}}]}).count();
db.voos.deleteMany({ $and: [{"empresa.nome": "AZUL"}, {"litrosCombustivel": {$lt: 400}}]});
// { "acknowledged" : true, "deletedCount" : 538 }
