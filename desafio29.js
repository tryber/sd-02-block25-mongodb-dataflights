db.voos.count({
  $and: [
    { natureza: "Doméstica" },
    { "empresa.nome": "GOL" }
  ]
});

db.resumoVoos.insertOne({
  empresa:"GOL",
  totalVoosDomesticos:25805
});
