/* Desafio 13
Retorne a quantidade de documentos em que o campo aeroportoDestino.pais não seja igual a ESTADOS UNIDOS. */

use dataFlights;
db.voos.count(
  {
    $nor: [
      { "aeroportoDestino.pais": "ESTADOS UNIDOS" }
    ]
  }
);
