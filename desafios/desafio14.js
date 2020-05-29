/* Desafio 14
Utilizando os operadores lógicos, conte os documentos em que o campo aeroportoDestino.pais
seja igual a BRASIL, ARGENTINA ou CHILE. */

usa dataFlights;
db.voos.find({$and: [{$or: [{"aeroportoDestino.pais": "BRASIL"}, {"aeroportoDestino.pais": "ARGENTINA"}, {"aeroporto.Destino.pais": "CHILE"}]}]}).count();
