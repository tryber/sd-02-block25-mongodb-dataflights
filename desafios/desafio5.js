/* Desafio 5
Retorne a quantidade de voos da empresa AZUL. */

use dataFlights;
db.voos.count({"empresa.nome": "AZUL"});
