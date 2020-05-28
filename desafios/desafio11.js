/* Desafio 11
Retorne a quantidade de voos entre os anos de 2017 e 2018. */

use dataFlights;
db.voos.find({"ano": {$gt: 2017}, "ano": {$lt: 2018}}).count();
