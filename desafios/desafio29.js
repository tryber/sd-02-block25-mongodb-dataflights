/* Desafio 29
Conte quantos voos da empresa GOL cujo campo natureza possua valor igual a Doméstica e
insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e
totalVoosDomesticos (o total retornado anteriormente). */

use dataFlights;

db.voos.count(
  {
    $and: [
      { "empresa.nome": "GOL" },
      { "natureza": "Doméstica" }
    ]
  }
);

// 25805

db.resumoVoos.insertOne(
  {
    "empresa": "GOL",
    "totalVoosDomesticos": 25805
  }
);
