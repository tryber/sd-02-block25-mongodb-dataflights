const delAzul = db.voos.deleteMany({
  $and:
    [
      { 'empresa.nome': 'AZUL' },
      { 'natureza': 'Doméstica' }
    ]
}).deletedCount;
db.resumoVoos.insert({ empresa: 'AZUL', totalVoosDomesticos: delAzul });
