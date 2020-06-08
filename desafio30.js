use dataFlights;
const newValue = db.voos.count(
  { 'empresa.nome': 'AZUL', natureza: 'Doméstica' }
);
db.resumoVoos.insertOne(
  { 'empresa': 'AZUL', totalVoosDomesticos: newValue }
);
