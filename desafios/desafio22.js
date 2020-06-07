/* Desafio 22
Retorne o vooId do primeiro voo em que o campo rtk não exista. */

use dataFlights;
db.voos.findOne({ "rtk": {$exists: false} }, {"vooId": 1, _id: 0});
