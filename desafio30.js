use dataFlights;
db.voos.count({
  "empresa.nome": "AZUL",
  "natureza": "Doméstica"
});

db.resumoVoos.insert({
  "empresa": "AZUL",
  "totalVoosDomesticos": 39622
});
