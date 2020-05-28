use dataFlights;
db.voos.findOne(
  {
    "litrosCombustivel":
    {
      $exists: true
    }
  }
);
