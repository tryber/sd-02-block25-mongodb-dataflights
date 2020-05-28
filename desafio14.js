use dataFlights;

db.voos.find({
  $or: [
    { "aeroportoDestino.continente": "EUROPA" },
    { "aeroportoDestino.continente": "ÁSIA" },
    { "aeroportoDestino.continente": "OCEANIA" }
  ]
}).count();
