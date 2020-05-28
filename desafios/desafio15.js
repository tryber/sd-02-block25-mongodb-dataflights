use dataFlights;

db.voos.count(
  {
    $nor: [
      { "aeroportoDestino.continente": "EUROPA" },
      { "aeroportoDestino.continente": "ASIA" },
      { "aeroportoDestino.pais": "OCEANIA" }
    ]
  }
);
