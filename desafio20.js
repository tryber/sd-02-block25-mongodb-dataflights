use dataFlights;
db.voos.findOne(
  {
    "passageiros.pagos":
    {
      $gt: 7000
    }
  },
  {
    "vooID": 1,
    "mes": 1,
    "ano": 1,
    "_id": 0
  }
);
