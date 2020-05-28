use dataFlights;
db.voos.count(
  {
    "aeroportoDestino.continente":
    {
      $nin:
        ['EUROPA', 'ASIA', 'OCEANIA']
    }
  }
);
