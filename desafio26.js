use dataFlights;
db.voos.findOne(
  {
    $and:
      [
        {
          "litrosCombustivel":
          {
            $lte: 600
          }
        },
        {
          $or:
            [
              {
                "empresa.nome": "GOL"
              },
              {
                "empresa.nome": "AZUL"
              }
            ]
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
