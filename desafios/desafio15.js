/* Desafio 15
Utilizando os operadores lógicos, conte os documentos em que o campos aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.
 */

use dataFlights;
db.voos.find({$nor: [{"aeroporto.Destino.continente": "EUROPA", "aeroportoDestino.continente": "ÁSIA", "aeroportoDestino.continente": "OCEANIA"}]}).count();
