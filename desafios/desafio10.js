/* Desafio 10
Retorne a quantidade de voos em que o ano seja maior do que 2016. */

use dataFlights;
db.voos.count({"ano": {$gt: 2016}});
