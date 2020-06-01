use dataFlights;
db.voos.findOne({
  $or: [
    { "empresa.nome": "DELTA AIRLINES" },
    { "empresa.nome": "AMERICAN AIRLINES" }
  ],
  $and: [
    { "aeroportoDestino.sigla":"KJFK" },
    { "aeroportoOrigem.sigla":"SBGR" }
  ]
}, {vooId:1});
