use dataFlights;
const value = db.voos.count(
  {
    'empresa.nome': 'GOL', natureza: 'Doméstica'
  }
);
db.resumoVoos.insertOne(
  {
    'empresa': 'GOL', totalVoosDomesticos: value
  }
);
