db.voos.count({
    $and: [
        { "empresa.nome": { $eq: "AZUL" } },
        { "natureza": { $eq: "Doméstica" } }
    ]
});
  
db.resumoVoos.insert({
    "empresa": "AZUL",
    "totalVoosDomesticos": 39622
});
  