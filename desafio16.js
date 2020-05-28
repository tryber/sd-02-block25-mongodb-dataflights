use dataFlights;
db.voos.find({ "aeroportoOrigem.pais": { $not: { $eq: "BRASIL" } } }).count();

// outra forma
db.voos.find({ $nor: [{ "aeroportoOrigem.pais": "BRASIL" }] }).count();
