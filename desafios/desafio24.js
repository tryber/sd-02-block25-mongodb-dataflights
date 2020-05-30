/* Desafio 24
Retorne o vooId do primeiro voo em que a empresa seja DELTA AIRLINES ou AMERICAN AIRLINES, a sigla do aeroporto de origem seja SBGR e a sigla do aeroporto de destino seja KJFK. */

use dataFlights;
db.voos.findOne({ $and: [{ $or: [{"empresa.nome": "DELTA AIRLINES", "empresa.nome": "AMERICAN AIRLINES"}]}, {"aeroportoOrigem.sigla": "SBGR"}, {"aeroportoDestino.sigla": "KJFK"}] },{"vooId": 1, _id: 0});
