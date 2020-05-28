use dataFlights;
const delGol = db.voos.deleteMany({
  $and:
    [
      { 'empresa.nome': 'GOL' },
      { 'natureza': 'Doméstica' }
    ]
}).deletedCount;
db.resumoVoos.insert({ empresa: 'GOL', totalVoosDomesticos: delGol });
