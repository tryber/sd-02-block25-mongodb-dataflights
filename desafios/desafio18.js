/* Desafio 18
Retorne o total de voos em que o campo natureza possui o valor Internacional. */

use dataFlights;
db.voos.find({"decolagens": {$gt: 20}}).count();
