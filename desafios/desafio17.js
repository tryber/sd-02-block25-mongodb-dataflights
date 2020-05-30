/* Desafio 17
Retorne o total de voos com mais de 20 decolagens. */

use dataFlights;
db.voos.find({"decolagens": {$gt: 20}}).count();
