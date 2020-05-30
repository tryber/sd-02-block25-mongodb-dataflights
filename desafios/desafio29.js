/* Desafio 29
Conte quantos voos da empresa GOL cujo campo natureza possua valor igual a Doméstica e
insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e
totalVoosDomesticos (o total retornado anteriormente). */

use dataFlights;
db.voos.find({$and: [{"empresa.nome": "GOL"}, {"natureza": "Doméstica"}]}).count();
// 25805
db.resumoVoos.insertOne({"empresa.nome": "GOL", "totalVoosDomesticos": 25805});
