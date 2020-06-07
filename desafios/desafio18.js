/* Desafio 18
Retorne o total de voos em que o campo natureza possui o valor Internacional. */

use dataFlights;
db.voos.count(
  { "natureza": "Internacional" }
);
