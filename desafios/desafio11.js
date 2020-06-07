/* Desafio 11
Retorne a quantidade de voos entre os anos de 2017 e 2018. */

use dataFlights;
db.voos.count(
  {
    "ano": {
      $gte: 2017,
      $lte: 2018
    }
  }
);
