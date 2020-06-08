use dataFlights;

db.resumoVoos.insertOne(
  {
    empresa: "GOL",
    totalVoosDomesticos: db.voos.count(
      {
        "empresa.nome": "GOL",
        "natureza": "Doméstica"
      }
    )
  }
);
