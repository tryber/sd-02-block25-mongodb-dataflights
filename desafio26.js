use dataFlights;
db.voos.findOne(
  {
    $and:
      [
        {
          "litrosCombustivel":
          {
            $not:
            {
              $gt: 600
            }
          }
        },
        {
          "empresa.nome":
          {
            $not:
            {
              $in: ["GOL", "AZUL"]
            }
          }
        },
        {
          "litrosCombustivel":
          {
            $exists: true
          }
        }
      ]
  }
);
