use dataFlights;
db.voos.find({ "aeroportoOrigem.nome": { $not: { $eq: "BRASIL" } } }).count();
