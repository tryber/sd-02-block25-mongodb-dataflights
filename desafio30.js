use dataFlights;
db.voos.count(
  {
    $and:
      [
        {
          "empresa.nome": "AZUL"
        },
        {
          "natureza": "Doméstica"
        }
      ]
  }
);

db.resumoVoos.insertOne(
  {
    "empresa": "AZUL",
    "totalVoosDomesticos": 39092
  }
);
