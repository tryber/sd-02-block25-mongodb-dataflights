/* Desafio 23
Retorne o vooId do primeiro voo em que o campo litrosCombustivel seja maior ou igual a 1000. */

use dataFlights;
db.voos.findOne({ "litrosCombustivel": {$gte: 1000} },{"vooId": 1, _id: 0});
