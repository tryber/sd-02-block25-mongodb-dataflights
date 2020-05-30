/* Desafio 30
Conte quantos voos da empresa AZUL com natureza Doméstica existem e insira na coleção
resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente). */

use dataFlights;
db.voos.find({$and: [{"empresa.nome": "AZUL"}, {"natureza": "Doméstica"}]}).count();
// 39092
db.resumoVoos.insertOne({"empresa.nome": "AZUL", "totalVoosDomesticos": 39092});
