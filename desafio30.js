db.voos.count({
  $and: [
    { natureza: "Doméstica" },
    { "empresa.nome": "AZUL" }
  ]
});

db.resumoVoos.insertOne({
  empresa: "AZUL",
  totalVoosDomesticos: db.voos.count({
    $and: [
      { natureza: "Doméstica" },
      { "empresa.nome": "AZUL" }
    ]
  })
});
