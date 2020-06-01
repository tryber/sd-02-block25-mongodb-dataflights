use dataFlights;
db.voos.count({ "aeroportoDestino.pais": { $ne: "ESTADO UNIDOS" } });
