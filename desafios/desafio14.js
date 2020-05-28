use dataFlights;

db.voos.count(
  {
    $or: [
      { "aeroportoDestino.pais": "BRAZIL" },
      { "aeroportoDestino.pais": "ARGENTINA" },
      { "aeroportoDestino.pais": "CHILE" }
    ]
  }
);
