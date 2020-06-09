use dataFlights;
db.voos.find({ $nor: [{ "aeroportoDestino.continente": "ÁSIA" }, { "aeroportoDestino.continente": "OCEANIA" }, { "aeroportoDestino.continente": "EUROPA" }] }).count();
