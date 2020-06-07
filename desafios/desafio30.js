/* Desafio 30
Conte quantos voos da empresa AZUL com natureza Doméstica existem e insira na coleção
resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente). */

use dataFlights;

db.voos.count(
  {
    $and: [
      { "empresa.nome": "AZUL" },
      { "natureza": "Doméstica" }
    ]
  }
);

// 39092

db.resumoVoos.insertOne(
  {
    "empresa": "AZUL",
    "totalVoosDomesticos": 39092
  }
);
