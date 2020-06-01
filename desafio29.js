use dataFlights;
db.voos.count({
  $and: [
    { "empresa.nome": "GOL" },
    { natureza:"Doméstica" },
  ]
});

db.resumoVoos.insertOne({
  empresa:"GOL",
  totalVoosDomesticos:25805
});
