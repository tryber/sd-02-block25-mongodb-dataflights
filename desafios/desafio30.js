use dataFlights;

db.resumoVoos.insertOne(
  {
    empresa: "AZUL",
    totalVoosDomesticos: db.voos.count(
      {
        "empresa.nome": "AZUL",
        "natureza": "Doméstica"
      }
    )
  }
);
