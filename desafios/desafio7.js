/* Desafio 7
Retorne o vooId do décimo ao décimo segundo documento da coleção voos. */

use dataFlights;
db.voos.find({}, {"vooId": 1}).limit(3).skip(9);
