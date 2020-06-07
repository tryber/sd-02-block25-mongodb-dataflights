/* Desafio 26
Retorne o primeiro voo em que litrosCombustivel não seja maior do que 600 e a empresa não seja GOL
ou AZUL, e o campo litrosCombustivel exista. */

use dataFlights;

db.voos.findOne(
  {
    $nor: [
      { "litrosCombustivel": { $gt: 600 } },
      {
        "empresa.nome": { $in: [ "GOL", "AZUL" ] }
      },
      { "litrosCombustivel": { $exists: false } }
    ]
  }
);
