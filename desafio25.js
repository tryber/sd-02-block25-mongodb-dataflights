use dataFlights;
db.voos.findOne(
  {
    "litrosCombustivel":
    {
      $lte: 1000, $exists: true
    }
  },
  {
    "vooId": 1, "_id": 0
  }
);
