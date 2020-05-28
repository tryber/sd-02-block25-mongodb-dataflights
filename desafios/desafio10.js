/* Desafio 10
Retorne a quantidade de voos em que o ano seja maior do que 2016. */

use dataFlights;
db.voos.find({"ano": {$gt: 2016}}).count();
