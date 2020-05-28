use dataFlights;
db.voos.find({ "aeroportoDestino.pais": { $ne: "ESTADOS UNIDOS" } }).count();

// outra forma
db.voos.find({ "aeroportoDestino.pais": { $not: { $eq: "ESTADOS UNIDOS" } } }).count();

// outra forma
db.voos.find({ $nor: [{ "aeroportoDestino.pais": "ESTADOS UNIDOS" }] }).count();
