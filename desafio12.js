use dataFlights;
db.voos.find({ $and: [{"empresa.nome": /gol/i}, {"ano": 2017}]}, {"empresa.nome": 1, "aeroportoOrigem.nome": 1, "aeroportoDestino.nome": 1, "mes": 1, "ano": 1}).limit(10).pretty();
