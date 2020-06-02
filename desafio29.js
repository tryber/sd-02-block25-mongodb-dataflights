db.voos.count({
  $and: [
    { "empresa.nome": { $eq: "GOL" } },
    { "natureza": { $eq: "Doméstica" } }
  ]
});

db.resumoVoos.insert({
    "empresa": "GOL",
    "totalVoosDomesticos": 25866
});
