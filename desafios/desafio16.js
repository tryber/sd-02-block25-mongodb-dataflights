use dataFlights;

db.voos.count(
  {
    "aeroportoOrigem.pais": {
      $not: { "$eq": "BRAZIL" }
    }
  }
);
